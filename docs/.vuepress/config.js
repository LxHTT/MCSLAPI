module.exports = {
    title: 'MCSL 2 API',
    description: '为MCSL 2以及公众打造的下载API',
    head: [
        [
            'link',
            { rel: 'icon', href: 'logo.png' }
        ]
    ],
    themeConfig: {
        logo: 'https://www.helloimg.com/images/2023/01/23/oRbUVn.png',
        nav: [
            { text: '首页', link: '/' },
            { text: 'API文档', link: '/APIDoc/' },
            { text: 'MCSL 2官网', link: 'https://mcsl.netlify.app' },
            { text: '作者B站', link: 'https://space.bilibili.com/488011295' },
        ],
        sidebar: 'auto'
    },
    markdown: {
        lineNumbers: true
    }
}