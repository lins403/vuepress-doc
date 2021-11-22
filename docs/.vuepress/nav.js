/*
 * @Description:
 * @Author: lins14
 * @Date: 2021-09-19 22:14:49
 * @FilePath: /vuepress-doc/docs/.vuepress/nav.js
 * @LastEditors: lins14
 * @LastEditTime: 2021-11-19 21:38:42
 */
module.exports = [
  { text: "Home", link: "/" },
  { text: "笔记", link: "/notes/" },
  { text: "博客", link: "/blogs/" },
  { text: "计划", link: "/plans/index2" },
  { text: "面试知识点", link: "/interview/" },
  {
    text: "系列笔记",
    ariaLabel: "系列笔记",
    items: [
      {
        text: "JavaScript",
        items: [
          {
            text: "学习笔记",
            link: "/notesList/javascript/",
          },
          {
            text: "TypeScript",
            link: "/notesList/typescript/",
          },
          {
            text: "Node.js",
            link: "/notesList/nodejs/",
          },
        ],
      },
      {
        text: "Vue",
        items: [
          {
            text: "学习笔记",
            link: "/notesList/vue/",
          },
          {
            text: "Vue2源码学习",
            link: "/vue2-source-code/prepare/",
          },
        ],
      },
      {
        text: "其它",
        items: [
          {
            text: "可视化",
            link: "/notesList/visualization/echarts",
          },
        ],
      },
    ],
  },
];
