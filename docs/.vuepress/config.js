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
          '/notesList/data-structure-algorithm/': DataStructureSidebar('数据结构', '算法'),
          '/notesList/javascript/': JavaScriptSidebar('总览', '基础', 'ES6', '进阶'),
          '/notesList/typescript/': 'auto',
          '/notesList/packages/': [
            {
              title: '通用',
              collapsable: false,
              children: [
                'babel',
                'browserslist',
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
              title: '文件预览下载',
              collapsable: false,
              children: [
                'files',
                'pdf',
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
                'responsive-layout',
                'responsive-layout-solutions',
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
                'echarts5',
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
                'solutions',
                'doc-guide',
                'doc-style-guide',
                'doc-skills',
                'component-communication',
                'vue-loader',
              ]
            },
            {
              title: 'Vue Router',
              collapsable: false,
              children: [
                'vue-router/base',
                'vue-router/advanced',
                'vue-router/skills',
              ]
            },
            {
              title: 'Vue CLI',
              collapsable: false,
              children: [
                'vue-cli/vue-cli',
                'vue-cli/vue-cli2',
                'vue-cli/config',
                'vue-cli/solutions',
              ]
            },
          ],
          '/notes/engineering/':[
            {
              title: '代码规范',
              collapsable: false,
              children: [
                'specification-config',
                'codeSpecification',
                'code-specification-tools',
                'jsdoc',
                'coding-performance',
              ]
            },
            {
              title: '模块化',
              collapsable: false,
              children: [
                'modules/',
                'modules/commonjs',
                'modules/esm',
                'webpack',
                'rollup',
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
                'graphQL',
              ]
            }
          ],
          '/notes/': [
            {
              title: '计算机基础',
              collapsable: false,
              children: [
                'computer/operation-system',
                'computer/encode',
                'computer/encrypt',
              ]
            },
            {
              title: '开发工具',
              collapsable: false,
              children: [
                'tools/browser',
                'tools/vscode',
                'tools/nginx',
                'tools/database',
                'tools/linux',
                'tools/linux-command',
                'tools/mac-operations',
                'tools/git-feature',
                'tools/git-application',
                'tools/git-skills',
                'tools/github-guide',
                'tools/markdown',
              ]
            },
            {
              title: '前端工具',
              collapsable: false,
              children: [
                'tools/website',
                'tools/npm',
                'tools/yarn',
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
        'core/reactive',
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

function JavaScriptSidebar (groupA, groupB, groupC, groupD) {
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
        'basic/reference',
        'basic/call-apply',
        'basic/regular',
        'basic/form',
        'basic/dom',
        'basic/bom',
        'basic/event',
        'basic/json',
        'basic/utils',
        'basic/error-analysis',
      ]
    },
    {
      title: groupC,
      collapsable: false,
      children: [
        'es6/',
        'es6/let-const',
        'es6/symbol',
        'es6/promise',
        'es6/set-map',
        'es6/iterator-generator',
        'es6/class',
        'es6/proxy-reflect',
      ]
    },
    {
      title: groupD,
      collapsable: false,
      children: [
        'advanced/',
        'advanced/object-oriented',
        'advanced/engine',
        'advanced/execution-context',
        'advanced/event-loop',
        'advanced/memory-garbage-collection',
        'advanced/binary',
        'advanced/animation',
        'advanced/web-worker',
        'advanced/skills',
        'advanced/applications',
        'advanced/design-pattern',
        'advanced/lodash',
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
          'basic/javascript0',
          'basic/javascript1',
          'basic/javascript2',
          'basic/javascript3',
          'basic/vue1',
          'basic/vue2',
          'implement',
          'memo',
          'resources',
        ]
      },
      {
        title: groupB,
        collapsable: false,
        children: [
          'advanced/integration',
          'advanced/engineering1',
          'advanced/engineering2',
          'advanced/component',
          'advanced/project',
          'advanced/monitor',
          'advanced/performance',
        ]
      },
    ]
}

function DataStructureSidebar(groupA,groupB){
    return [
      {
        title: groupA,
        collapsable: false,
        children: [
          'data-structures/',
          'data-structures/线性表',
          'data-structures/栈和队列',
          'data-structures/串、数组和广义表',
          'data-structures/树和二叉树',
          'data-structures/图',
        ]
      },
      {
        title: groupB,
        collapsable: false,
        children: [
          'algorithm/',
          'algorithm/查找',
          'algorithm/排序',
          'algorithm/recursion',
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
        '2022/1/dynamic-import',
        '2022/1/patch-node-modules',
      ]
    }
  ]
}