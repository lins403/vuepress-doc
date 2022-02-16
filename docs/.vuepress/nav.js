/*
 * @Description:
 * @Author: lins14
 * @Date: 2021-09-19 22:14:49
 * @FilePath: /vuepress-doc/docs/.vuepress/nav.js
 * @LastEditors: lins14
 * @LastEditTime: 2022-02-17 12:16:31
 */
module.exports = [
  { text: 'Home', link: '/' },
  {
    text: '系列笔记',
    ariaLabel: '系列笔记',
    items: [
      {
        text: '综合',
        items: [
          // {
          //   text: '数据结构与算法',
          //   link: '/notesList/data-structure-algorithm/'
          // },
          {
            text: '前端工程化',
            link: '/notes/engineering/'
          },
          {
            text: 'NPM Packages',
            link: '/notesList/packages/'
          },

          {
            text: '可视化',
            link: '/notesList/visualization/'
          }
        ]
      },
      {
        text: '基础',
        items: [
          {
            text: 'CSS',
            link: '/notesList/css/'
          },
          {
            text: 'JavaScript',
            link: '/notesList/javascript/'
          },
          {
            text: 'TypeScript',
            link: '/notesList/typescript/'
          },
          {
            text: 'Node.js',
            link: '/notesList/nodejs/'
          }
        ]
      },
      {
        text: 'Vue',
        items: [
          {
            text: '全家桶',
            link: '/notesList/vue/'
          },
          {
            text: 'Vue2源码学习',
            link: '/vue2-source-code/prepare/'
          }
        ]
      }
    ]
  },
  { text: '笔记', link: '/notes/' },
  { text: '知识点', link: '/interview/' },
  { text: '博客', link: '/blogs/' },
  { text: '计划', link: '/plans/index2' }
];
