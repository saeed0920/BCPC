/**
 * Convert all images to avif format that under the src/images/banner and src/images/posts directory
 * And then upload to the R2 bucket.
 *
 * This script will also update the final image path in the markdown files.
 *
 * usage: node scripts/image.js
 *
 * Also see the global variables in the script.
 */

import { Operator } from 'opendal'

const CDN = 'https://images.godruoyi.com'

// see https://docs.rs/opendal/latest/opendal/services/struct.S3.html#configuration
const s3Options = {
    access_key_id: process.env.S3_ACCESS_KEY,
    secret_access_key: process.env.S3_SECRET_ACCESS_KEY,
    bucket: process.env.S3_BUCKET,
    endpoint: process.env.S3_ENDPOINT,
    root: 'gblog',
}

console.log(s3Options)

class Imager {
    operator = null

    async run() {
        await this.init()
    }

    async init() {
        this.operator = new Operator('s3', s3Options)
        await this.operator.check()
    }
}

const image = new Imager()
await image.run()
