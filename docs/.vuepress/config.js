module.exports = {
    base: '/vuepress-doc/',
    title: '小眯嘻的文档博客',
    description: 'Just playing around',
    head: [
        ['link', { rel: 'icon', href: '/assets/img/config/favicon.png' }]
      ],
    themeConfig: {
        repo: 'https://github.com/lins403/vuepress-doc',
        repoLabel: 'GitHub',
        nav: [
            { text: 'Home', link: '/' },
            { text: 'HelloWorld', link: '/blog/HelloWorld.md' }
        ],
        sidebar: 'auto',
        lastUpdated: 'Last Updated', // string | boolean
    }
  }