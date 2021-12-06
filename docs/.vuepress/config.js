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
    markdown: {
      extendMarkdown: md => {
        md.use(require('markdown-it-mark'))
      }
    },
    themeConfig: {
        repo: 'https://github.com/lins403/vuepress-doc',
        repoLabel: 'GitHub',
        nav: require('./nav'),
        // sidebar: 'auto',
        sidebar: {
          '/interview/': interviewSidebar('前端基础', '进阶'),
          '/vue2-source-code/': sourceCodeSidebar('准备', '核心模块', '自问自答'),
          '/notesList/javascript/': JavaScriptSidebar('总览', '基础', '进阶'),
          '/notesList/typescript/': 'auto',
          '/notesList/visualization/': [
            {
              title: 'css',
              collapsable: false,
              children: [
                'animation',
                'image',
                'adaptive-layout',
                'responsive-layout',
              ]
            },
            {
              title: '其它',
              collapsable: false,
              children: [
                'color',
                'theme-config',
                'echarts',
              ]
            },
          ],
          '/notesList/nodejs/': [
            {
              title: '入门',
              collapsable: false,
              children: [
                '',
                'basic/start',
              ]
            },
            {
              title: '进阶',
              collapsable: false,
              children: [
                'advanced/express',
              ]
            },
          ],
          '/notesList/vue/': [
            {
              title: '文档学习笔记',
              collapsable: false,
              children: [
                'doc-guide',
                'doc-style-guide',
                'doc-skills',
                'component-communication',
                'vue-router',
              ]
            },
          ],
          '/notes/': [
            {
              title: '前端工程化',
              collapsable: false,
              children: [
                'engineering/modules/',
                'engineering/modules/esm',
                'engineering/workflow',
                'engineering/webpack',
                'engineering/rollup',
                'engineering/vue-cli-config',
                'tools/browser',
                'engineering/css-preprocessor',
              ]
            },
            {
              title: '前端工具',
              collapsable: false,
              children: [
                'tools/website',
                'tools/regular',
                'tools/npm',
                'tools/yarn',
                'tools/codeSpecification',
                'tools/online-coding',
              ]
            },
            {
              title: '开发工具',
              collapsable: false,
              children: [
                'tools/vscode',
                'tools/markdown',
                'tools/linux',
                'tools/mac-operations',
                'tools/git-feature',
                'tools/git-application',
                'tools/git-skills',
                'tools/github-guide',
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
        docsDir: 'docs',
        editLinks: true,
        smoothScroll: true,
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
        'basic/utils',
      ]
    },
    {
      title: groupC,
      collapsable: false,
      children: [
        'advanced/',
        'advanced/design-pattern',
      ]
    },
  ]
}

function interviewSidebar(groupA,groupB){
    return [
      {
        title: groupA,
        collapsable: false,
        children: [
          'basic/network0',
          'basic/network1',
          'basic/network2',
          'basic/network3',
          'basic/html1',
          'basic/css1',
          'basic/css2',
          'basic/css3',
        ]
      },
      {
        title: groupB,
        collapsable: false,
        children: [
          'advanced/performance',
        ]
      },
    ]
}