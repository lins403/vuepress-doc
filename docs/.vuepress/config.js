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
      ['@vuepress/google-analytics',{'ga': 'UA-197628886-1'}],
      ['@vuepress/medium-zoom', {
        selector: 'img.zoom-imgs',
        options: { margin: 32 }
      }]
    ],
    markdown: {
      extendMarkdown: md => {
        md.use(require('markdown-it-mark')).use(require('markdown-it-task-lists'),{enabled: true, label: true});
      }
    },
    themeConfig: {
        repo: 'https://github.com/lins403/vuepress-doc',
        repoLabel: 'GitHub',
        nav: require('./nav'),
        // sidebar: 'auto',
        sidebar: {
          '/blogs/': blogSidebar(),
          '/interview/': interviewSidebar('前端基础', '进阶'),
          '/vue2-source-code/': sourceCodeSidebar('准备', '核心模块', '自问自答'),
          '/notesList/javascript/': JavaScriptSidebar('总览', '基础', '进阶'),
          '/notesList/typescript/': 'auto',
          '/notesList/packages/': [
            {
              title: '文件预览下载',
              collapsable: false,
              children: [
                'files',
                'pdf',
              ]
            },
            {
              title: '项目工程',
              collapsable: false,
              children: [
                'css',
                'js',
                'vuejs',
                'application',
              ]
            },
            {
              title: '其它',
              collapsable: false,
              children: [
                'cdn',
                'tools',
              ]
            },
          ],
          '/notesList/css/': [
            {
              title: '学习笔记',
              collapsable: false,
              children: [
                'color',
                'image',
                'animation',
                'adaptive-layout',
                'responsive-layout',
                'css-preprocessor',
              ]
            },
          ],
          '/notesList/visualization/': [
            {
              title: '综合',
              collapsable: false,
              children: [
                'libraries',
              ]
            },
            {
              title: '2D',
              collapsable: false,
              children: [
                'canvas',
                'echarts',
              ]
            },
            {
              title: '3D',
              collapsable: false,
              children: [
                '3d-start',
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
                'vue-cli',
              ]
            },
          ],
          '/notes/engineering/':[
            {
              title: '模块化',
              collapsable: false,
              children: [
                'modules/',
                'modules/esm',
                'webpack',
                'rollup',
                'vue-cli-config',
              ]
            },
            {
              title: '测试',
              collapsable: false,
              children: [
                'test/',
                'test/unit',
                'test/vue-unit-jest',
              ]
            },
            {
              title: '自动化与CI/CD',
              collapsable: false,
              children: [
                'workflow',
                'CI-CD/',
                'CI-CD/gitlab-ci',
              ]
            },
            {
              title: '其它',
              collapsable: false,
              children: [
                'specification-config',
                'codeSpecification',
                'graphQL',
              ]
            }
          ],
          '/notes/': [
            {
              title: '开发工具',
              collapsable: false,
              children: [
                'tools/browser',
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
            {
              title: '前端工具',
              collapsable: false,
              children: [
                'tools/website',
                'tools/npm',
                'tools/yarn',
                'tools/regular',
                'tools/online-coding',
                'tools/vocabulary',
              ]
            },
          ],
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
        'basic/base-types/type',
        'basic/base-types/number',
        'basic/base-types/string',
        'basic/base-types/array',
        'basic/base-types/object',
        'basic/base-types/function',
        'basic/es6',
        'basic/oop',
        'basic/dom',
        'basic/json',
        'basic/binary',
        'basic/utils',
      ]
    },
    {
      title: groupC,
      collapsable: false,
      children: [
        'advanced/',
        'advanced/skills',
        'advanced/engine',
        'advanced/runtime',
        'advanced/let-const',
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

function blogSidebar(){
  return [
    {
      title: '2021',
      collapsable: false,
      children: [
        '2021/nginx-alias',
      ]
    },
    {
      title: '2022',
      collapsable: false,
      children: [
        '2022/1/how-to-learn',
      ]
    }
  ]
}