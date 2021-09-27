module.exports = {
    base: '/vuepress-doc/',
    title: '小眯嘻的文档博客',
    description: '学习&思考&总结',
    head: [
        ['link', { rel: 'icon', href: '/assets/img/config/favicon.png' }]
      ],
    plugins: [
      ['@vuepress/back-to-top'],
      ['@vuepress/nprogress'],
      ['@vuepress/active-header-links'],
      ['@vuepress/search', {searchMaxSuggestions: 10 }],
      ['@vuepress/google-analytics',{'ga': 'UA-197628886-1'}]
    ],
    themeConfig: {
        repo: 'https://github.com/lins403/vuepress-doc',
        repoLabel: 'GitHub',
        nav: require('./nav'),
        // sidebar: 'auto',
        sidebar: {
          '/vue2-source-code/': sourceCodeSidebar('准备', '核心模块', '自问自答'),
          '/notesList/javascript/': JavaScriptSidebar('总览', '基础', '进阶'),
          '/notesList/typescript/': 'auto',
          '/notes/': [
            {
              title: '开发工具',
              collapsable: false,
              children: [
                'tools/codeSpecification',
                'tools/git-feature',
                'tools/git-application',
                'tools/git-skills',
                'tools/github-guide',
                'tools/mac-operations',
                'tools/online-coding',
              ]
            },
          ],
          '/blogs/': [],
          '/plans/': [
            {
              title: '学习计划',
              collapsable: false,
              children: [
                ['', '复习计划'],
              ]
            },
          ],
        },
        lastUpdated: 'Last Updated', // string | boolean
    }
  }

function sourceCodeSidebar (groupA, groupB, groupC) {
  return [
    {
      title: groupA,
      collapsable: false,
      children: [
        'prepare/',
        'prepare/directory',
        'prepare/entry'
      ]
    },
    {
      title: groupB,
      collapsable: false,
      children: [
        'core/',
        'core/data-driven',
        'core/reactivity',
        'core/components',
        'core/compile',
      ]
    },
    {
      title: groupC,
      collapsable: false,
      children: [
        'Q&A/',
      ]
    },
  ]
}

function JavaScriptSidebar (groupA, groupB, groupC) {
  return [
    {
      title: groupA,
      collapsable: false,
      children: [
        '',
      ]
    },
    {
      title: groupB,
      collapsable: false,
      children: [
        'basic/',
      ]
    },
    {
      title: groupC,
      collapsable: false,
      children: [
        'advanced/',
      ]
    },
  ]
}