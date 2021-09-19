module.exports = {
    base: '/vuepress-doc/',
    title: '小眯嘻的文档博客',
    description: 'Just playing around',
    head: [
        ['link', { rel: 'icon', href: '/assets/img/config/favicon.png' }]
      ],
    plugins: [
      ['@vuepress/back-to-top'],
      ['@vuepress/nprogress'],
      ['@vuepress/active-header-links'],
      ['@vuepress/search', {searchMaxSuggestions: 10 }]
    ],
    themeConfig: {
        repo: 'https://github.com/lins403/vuepress-doc',
        repoLabel: 'GitHub',
        nav: require('./nav'),
        // sidebar: 'auto',
        sidebar: {
          '/vue2-source-code/': getPrepareSidebar('准备','自问自答'),
        },
        lastUpdated: 'Last Updated', // string | boolean
    }
  }

function getPrepareSidebar (groupA, groupB) {
  return [
    {
      title: groupA,
      collapsable: false,
      children: [
        'prepare/',
        'prepare/directory'
      ]
    },
    {
      title: groupB,
      collapsable: false,
      children: [
        'Q&A/',
      ]
    },
  ]
}