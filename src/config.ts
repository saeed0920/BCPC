import type { NavigationLink, Site } from "./types.ts";

export const SITE: Site = {
    author: "Saeed Abadiyan",
    url: "https://bcpc.ir",
    title: "BCPC",
    description: "Official website for BCPC",
    shortDescription: "BCPC",
};

export const NavigationLinks: NavigationLink[] = [
    //{ name: 'Posts', url: '/posts/' },
    { name: "Timeline", url: "/timeline/" },
    { name: "Contact", url: "/contact/" },
    { name: "About", url: "/about/" },
    //{ name: 'Friends', url: '/friends/' },
];

export const FooterLinks = [
    {
        section: "Blog",
        links: [
            { name: "Bircpc", url: "https://blog.bircpc.ir" },
            { name: "Timeline", url: "/timeline/" },
            { name: "Contact Us", url: "/contact/" },
            { name: "About Us", url: "/about/" },
        ],
    },
    {
        section: "Other",
        links: [
            { name: "Telegram channel", url: "https://t.me/SSOCS" },
            { name: "Telegram Super Group", url: "https://t.me/SSCEUBIR" },
            { name: "GitHub", url: "https://github.com/saeed0920/BCPC.git" },
        ],
    },
];

export const Settings = {
    GoogleAnalytics: {
        enable: true,
        id: "",
    },

    // See https://github.com/umami-software/umami
    UmamiAnalytics: {
        enable: true,
        dataWebsiteID: "",
    },

    Comment: {
        // Please note that the environment value here is `string` type on Cloudflare Pages
        // If you want to disable the comment system, please delete the `COMMENT_ENABLE` environment variable not just set it to `false`.
        enable:
            !!import.meta.env.COMMENT_ENABLE || !!process.env.COMMENT_ENABLE,

        // please visit https://giscus.app/ to learn how to configure it.
        // You can also check out this article: https://liruifengv.com/posts/add-comments-to-astro/.
        giscus: {
            repo: "godruoyi/gblog",
            repoId: "MDEwOlJlcG9zaXRvcnkxMjcyODI0NzA",
            category: "Announcements",
            categoryId: "DIC_kwDOB5YtJs4CfZnX",
            darkThem: "noborder_gray",
            lightThem: "light",
        },
    },

    Assets: {
        // If you don't want to upload the build assert(image/js/css/etc...) to anywhere, just set this to false
        // Please note that the environment value here is `string` type on Cloudflare Pages
        // If you want to disable the comment system, please delete the `S3_ENABLE` environment variable not just set it to `false`.
        uploadAssetsToS3:
            !!import.meta.env.S3_ENABLE || !!process.env.S3_ENABLE,
        config: {
            // see https://github.com/syhily/astro-uploader to get how to configure the uploader,
            // The following configuration will upload the compiled `assets` folder to S3 or R2.
            // You can set a separate domain for it so that you can access all resources using a CDN domain name.
            //
            // For example: https://images.godruoyi.com/gblog/assets/brand-logo.webp
            //
            // Note that you may also need to modify `build.assetsPrefix` in `astro.config.mjs` if you want to
            // automatically replace all images/js/css with a CDN link.
            paths: ["assets"],
            endpoint: (process.env.S3_ENDPOINT ??
                import.meta.env.S3_ENDPOINT) as string,
            bucket: (process.env.S3_BUCKET ??
                import.meta.env.S3_BUCKET) as string,
            accessKey: (process.env.S3_ACCESS_KEY ??
                import.meta.env.S3_ACCESS_KEY) as string,
            secretAccessKey: (process.env.S3_SECRET_ACCESS_KEY ??
                import.meta.env.S3_SECRET_ACCESS_KEY) as string,
            root: "gblog",
        },
    },
};

export const SEO = {
    title: SITE.title,
    description: SITE.description,
    structuredData: {
        "@context": "https://schema.org",
        "@type": "WebPage",
        inLanguage: "en-US",
        "@id": SITE.url,
        url: SITE.url,
        name: SITE.title,
        description: SITE.description,
        isPartOf: {
            "@type": "WebSite",
            url: SITE.url,
            name: SITE.title,
            description: SITE.description,
        },
    },
};
