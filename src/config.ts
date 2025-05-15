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
    { name: "Home", url: "/" },
    { name: "Teams", url: "/teams" },
    { name: "Rules", url: "/rules" },
    { name: "Timeline", url: "/timeline/" },
    { name: "Contact us", url: "/contact/" },
    { name: "About us", url: "/about/" },
    //{ name: 'Friends', url: '/friends/' },
];

export const FooterLinks = [
    {
        section: "Blog",
        links: [
            { name: "Rules", url: "/rules" },
            { name: "Teams", url: "/teams" },
            { name: "Timeline", url: "/timeline/" },
            { name: "Contact us", url: "/contact/" },
            { name: "About us", url: "/about/" },
            { name: "Bircpc", url: "https://blog.bircpc.ir" },
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
