---
title: "什么是发件箱模式"
description: "早上在群里看到有同事在问关于 Outbox Pattern 的问题，而在此之前我对此一无所知，我甚至还错误的发了一些毫不相干的回复，那就姑且把 Outbox Pattern 当作今天 TIL 的对象吧，下面是本次学习的记录"
pubDate: "2024-08-04 15:43:00"
category: "whatis"
banner: "https://images.godruoyi.com/gblog/images/posts/outbox-pattern/banner1.avif"
tags: ["技术"]
toc: true
---

早上在群里看到有同事在问关于 Outbox Pattern 的问题，而在此之前我对此一无所知，我甚至还错误的发了一些毫不相干的回复，那就姑且把 Outbox Pattern 当作今天 TIL 的对象吧，下面是本次学习的记录。

## 什么情况下引入的 Outbox Pattern?

当需要同时插入数据到数据库并且还要发送消息到消息队列时，传统操作无法保证这两个操作都完成；举个例子：

```go
db.Transact(func(tx *sqlx.Tx) {
    mq.PublishOrderCreatedEventToKafka(data)
    db.InsertOrderToDB(data)
})
```

1. 发布到 Kafka 成功但是数据保存失败，整个事务回滚；但已经发布到 Kafka 的消息无法简单的回滚，导致消费者收到了本不该存在的数据。
2. 保存数据成功但发布消息失败，整个事务提交，数据已保存到 DB 中；但由于没有发布到 Kafka，消费者丢失了本次更新。

即对外部服务的调用没法随着本地事务一起提交一起回滚，导致数据的完整性出了问题；那有没有什么办法可以将这两个操作放到同一个本地事务中，并利用事务的 ACID 来保证数据的完整性呢？

这就引入了 Outbox Pattern。

## 什么是 Outbox Pattern？

我们知道大多数数据库都能保证两条 SQL 操作要么全都成功，要么全都失败，参见[为什么我们需要数据库事务](https://godruoyi.com/posts/why-do-we-need-database-transactions/)；如果我们能将「发送消息到队列」这一操作转化为 —— 插入一条数据到数据库；我们就能利用数据库的特性来保证数据的完整性，然后再利用额外的程序来异步读取数据并发送到 Kafka。

```go
db.Transact(func(tx *sqlx.Tx) {
    db.InsertOutboxTable(data)
    db.InsertOrderToDB(data)
})
```

![outbox pattern](https://images.godruoyi.com/gblog/images/posts/outbox-pattern/outbox-pattern.avif)
图片来自于 [Outbox Pattern Example](https://github.com/debezium/debezium-examples/tree/main/outbox)

### 这样做有什么好处？

1. 通过同一个本地事务来保证数据的完整性，即这两个操作要么全都成功，要么全都失败
2. 不需要依赖 MQ 组件
3. 业务方只需要关注如何操作数据
4. 更可靠；一旦事务提交，异步程序会通过多种方式(如重试)保证数据正确的投递到 MQ，不会因为短时间的 Kafka 断开连接而投递失败

### 这样做有什么弊端？

1. 引入了额外的程序；需要单独的程序&进程异步读取数据并发送到 MQ
2. 更高的延迟；之前是直接将数据投递到 MQ，现在需要先插入数据到 DB，再由异步程序读取 DB 的数据，最后再投递到 MQ

我们可以设计一个通用的表结构来保存消息实体，它应该是和业务无关的，如：

```sql
CREATE TABLE reference_outbox.outbox (
    id integer NOT NULL,
    event_name character varying(256) NOT NULL,
    event_type character varying(256),
    event_key character varying(1024) NOT NULL,
    event_payload bytea NOT NULL,
    event_timestamp bigint DEFAULT (date_part('epoch'::text, now()) * (1000)::double precision) NOT NULL,
    headers text,
    target_kafka_topic character varying(256) NOT NULL
);
```

### 为什么不将数据都发送到 Kafka?

那为什么我们要将两条数据都插入到数据库而不是将他们都投递到 Kafka 呢？即应用程序只需要将消息投递到 Kafka 然后再由单独的消费者来处理它们，这样也能保证「发送消息到队列」和「插入到数据库」这两个操作的完整性。

```go
mq.PublishOrderCreatedEventToKafka(data) // 生产者

mq.pull(kafka-topic, func (e *Event) { // 消费者
    db.Transact(func(tx *sqlx.Tx) {
        db.InsertOrderToDB(e)
    })
})
```

因为这样违背了一个原则：Read-Your-Wrirte。假设消费者在处理这个消息时延迟了 5 秒钟，那意味着你通过 APP 下的订单需要 5 秒后才能查看它们，这对于用户来说是不可接受的。

## 如何实现 Outbox Pattern

Outbox Pattern 的难点在于如何设计一个程序，可以异步的读取数据并发送到 MQ。它应该支持：

1. 不会意外停止服务，即使停止服务重启后也能继续投递数据到 MQ，不会造成丢失数据
2. 支持失败重试
3. 侵入性小
4. 低延时

目前关于 Outbox Pattern 的实现中采用最多的可能是开源的 [Debezium](https://github.com/debezium/debezium) 方案，它支持捕获数据库的任何变更并将它们发送到 MQ 平台；支持监控数据库中行级别(row-level)的更改，并且只关注已提交的事务；也支持本地持久化，即就算 Debezium 异常停止服务，重启后也能保证所有的事件都能被正确的处理。

### PostgreSQL Connector

Debezium 为不同的数据库都提供了不同的 Connector，以 PostgreSQL Connector 为例，它基于 WAL 日志变更的方式来捕获 Outbox 表中的新记录并将它们投递到 Apache Kafka 中。与任何基于轮询的方法相比，基于日志的事件捕获几乎是实时的，并且开销也很低。

不过由于 PostgreSQL 的 WAL 可能隔一段时间就被清理，这导致 Debezium 没法获取数据库的所有变更历史，所以 PostgreSQL Connector 在第一次启动的时候会尝试对数据库做一次快照，后续将基于这个快照来同步数据到 Kafka，参见 [Debezium connector for PostgreSQL](https://debezium.io/documentation/reference/2.7/connectors/postgresql.html#postgresql-overview)。

### 如何配置 Connector 以捕获数据变更？

我们可以参考[这里的例子](https://debezium.io/documentation/reference/2.7/tutorial.html#starting-kafka-connect)通过 Docker 启动一个 Connector，启动成功后 Connector 会对外暴露一个 REST API，可以通过向这个 API POST 一些配置告诉 Connector 应该如何处理数据库变更。

```
$ docker run -it --rm --name connect -p 8083:8083 
-e GROUP_ID=1 
-e CONFIG_STORAGE_TOPIC=my_connect_configs 
-e OFFSET_STORAGE_TOPIC=my_connect_offsets 
-e STATUS_STORAGE_TOPIC=my_connect_statuses 
--link kafka:kafka 
--link mysql:mysql 
quay.io/debezium/connect:2.7
```

下面的这个示例来自官网教程的一个 [PostgreSQL 样例配置](https://debezium.io/documentation/reference/2.7/connectors/postgresql.html#postgresql-example-configuration)，其中指定了数据库的账号密码以及捕获哪个表的数据变更等，你可以从[这个表格](https://debezium.io/documentation/reference/2.7/connectors/postgresql.html#postgresql-connector-properties)查看每个字段对应的具体含义。

```json
{
  "name": "fulfillment-connector",  
  "config": {
    "connector.class": "io.debezium.connector.postgresql.PostgresConnector", 
    "database.hostname": "192.168.99.100", 
    "database.port": "5432", 
    "database.user": "postgres", 
    "database.password": "postgres", 
    "database.dbname" : "postgres", 
    "topic.prefix": "fulfillment", 
    "table.include.list": "public.inventory" // 监控的数据表
  }
}
```

我们甚至可以为 Connector 配置删除策略以忽略 Outbox 的删除操作，如下：

```json
{
  "name": "fulfillment-connector",  
  "config": {
    "table.include.list": "public.outbox_table", // 监控的数据表
    "tombstones.on.delete": false
  }
}
```

将 `tombstones.on.delete` 设置为 false 后 Connector 会忽略对 `public.outbox_table` 表的删除操作，我们可以将应用程序的业务代码修改为如下形式：

```go
db.Transact(func(tx *sqlx.Tx) {
    id := db.InsertOutboxTable(data)
    db.DeleteOutboxTable(id)

    db.InsertOrderToDB(data)
})
```

这样做有一个好处就是可以保证 outbox 数据表的大小不会太大，并且即使我们在新增后马上就删除了 outbox 的记录，也不会影响 Connector 将新增的消息数据投递到 Kafka。

## 总结

1. Outbox Pattern 将对外部服务的调用转为对两个本地事务内的操作，然后通过本地事务特性来保证数据数据的完整性
2. Outbox Pattern 的难点在于设计一个程序异步低延迟的读取数据的变化并将它们投递到 MQ，好在我们有现成的解决方案
3. Debezium 的配置很复杂
4. 今天就学到这儿了

## 参考
* [Publishing Events to Kafka using an Outbox Pattern](https://medium.com/contino-engineering/publishing-events-to-kafka-using-a-outbox-pattern-867a48e29d35)
* [Reliable Microservices Data Exchange With the Outbox Pattern - must read](https://debezium.io/blog/2019/02/19/reliable-microservices-data-exchange-with-the-outbox-pattern/)
* [Pattern: Transactional outbox](https://microservices.io/patterns/data/transactional-outbox.html)
* [Debezium connector for PostgreSQL](https://debezium.io/documentation/reference/2.7/connectors/postgresql.html#debezium-connector-for-postgresql)
* [Tutorial :: Debezium Documentation](https://debezium.io/documentation/reference/2.7/tutorial.html#introduction-debezium)
* [Read-your-write consistency](https://arpitbhayani.me/blogs/read-your-write-consistency/)
* [为什么我们需要数据库事务](https://godruoyi.com/posts/why-do-we-need-database-transactions/)
