(window.webpackJsonp=window.webpackJsonp||[]).push([[100],{501:function(v,t,_){"use strict";_.r(t);var a=_(43),s=Object(a.a)({},(function(){var v=this,t=v.$createElement,_=v._self._c||t;return _("ContentSlotsDistributor",{attrs:{"slot-key":v.$parent.slotKey}},[_("h1",{attrs:{id:"数据结构"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#数据结构"}},[v._v("#")]),v._v(" 数据结构")]),v._v(" "),_("p",[_("img",{attrs:{src:"https://raw.githubusercontent.com/lins403/assetsSpace/master/vuepress/img/data_structure.png",alt:""}})]),v._v(" "),_("ul",[_("li",[v._v("逻辑结构：描述数据元素之间的逻辑关系，是从具体问题抽象出来的数学模型。")]),v._v(" "),_("li",[v._v("物理 / 存储结构：数据元素及其元素在计算机存储器中的结构（存储方式）")])]),v._v(" "),_("p",[v._v("逻辑结构是数据结构的抽象，存储结构是数据结构的实现（映像），综合起来建立了数据元素之间的结构关系")]),v._v(" "),_("h2",{attrs:{id:"逻辑结构"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#逻辑结构"}},[v._v("#")]),v._v(" 逻辑结构")]),v._v(" "),_("p",[v._v("两种划分方式：")]),v._v(" "),_("h4",{attrs:{id:"方式一"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#方式一"}},[v._v("#")]),v._v(" 方式一")]),v._v(" "),_("ul",[_("li",[v._v("线性结构\n"),_("ul",[_("li",[v._v("所有节点都最多只有一个直接前趋和一个直接后继")]),v._v(" "),_("li",[v._v("线性表、栈和队列、串、数组和广义表")])])]),v._v(" "),_("li",[v._v("非线性结构\n"),_("ul",[_("li",[v._v("树、图")])])])]),v._v(" "),_("h4",{attrs:{id:"方式二"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#方式二"}},[v._v("#")]),v._v(" 方式二")]),v._v(" "),_("ul",[_("li",[v._v("集合结构：结构中的数据元素除了同属一个集合外，无任何其它关系")]),v._v(" "),_("li",[v._v("线性结构：一对一的线性关系")]),v._v(" "),_("li",[v._v("树形结构：一对多的层次关系")]),v._v(" "),_("li",[v._v("图状结构/网状结构：多对多的任意关系")])]),v._v(" "),_("h2",{attrs:{id:"存储结构"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#存储结构"}},[v._v("#")]),v._v(" 存储结构")]),v._v(" "),_("ul",[_("li",[_("p",[_("strong",[v._v("顺序存储结构")])]),v._v(" "),_("ul",[_("li",[v._v("数组")]),v._v(" "),_("li",[v._v("连续的存储单元、依次存储，数据元素之间的逻辑关系由 "),_("u",[v._v("存储位置")]),v._v(" 来表示")])])]),v._v(" "),_("li",[_("p",[_("strong",[v._v("链式存储结构")])]),v._v(" "),_("ul",[_("li",[v._v("链表")]),v._v(" "),_("li",[v._v("任意的存储单元，逻辑关系由 "),_("u",[v._v("指针")]),v._v(" 来表示")])])]),v._v(" "),_("li",[_("p",[v._v("索引存储结构")]),v._v(" "),_("ul",[_("li",[v._v("建立附加的索引表")])])]),v._v(" "),_("li",[_("p",[v._v("散列存储结构")]),v._v(" "),_("ul",[_("li",[v._v("根据结点的关键字直接计算出该结点的存储地址")])])])]),v._v(" "),_("h3",{attrs:{id:"数组和链表"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#数组和链表"}},[v._v("#")]),v._v(" 数组和链表")]),v._v(" "),_("p",[v._v("多样化的数据结构，究其源头，都是在链表或者数组上的特殊操作，API 不同而已。")]),v._v(" "),_("p",[v._v("「队列」、「栈」这两种数据结构既可以使用链表也可以使用数组实现。用数组实现，就要处理扩容缩容的问题；用链表实现，没有这个问题，但需要更多的内存空间存储节点指针。")]),v._v(" "),_("p",[v._v("「图」的两种表示方法，邻接表就是链表，邻接矩阵就是二维数组。邻接矩阵判断连通性迅速，并可以进行矩阵运算解决一些问题，但是如果图比较稀疏的话很耗费空间。邻接表比较节省空间，但是很多操作的效率上肯定比不过邻接矩阵。")]),v._v(" "),_("p",[v._v("「散列表」就是通过散列函数把键映射到一个大数组里。而且对于解决散列冲突的方法，拉链法需要链表特性，操作简单，但需要额外的空间存储指针；线性探查法就需要数组特性，以便连续寻址，不需要指针的存储空间，但操作稍微复杂些。")]),v._v(" "),_("p",[v._v("「树」，用数组实现就是「堆」，因为「堆」是一个完全二叉树，用数组存储不需要节点指针，操作也比较简单；用链表实现就是很常见的那种「树」，因为不一定是完全二叉树，所以不适合用数组存储。为此，在这种链表「树」结构之上，又衍生出各种巧妙的设计，比如二叉搜索树、AVL 树、红黑树、区间树、B 树等等，以应对不同的问题。")]),v._v(" "),_("h4",{attrs:{id:"优缺点"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#优缺点"}},[v._v("#")]),v._v(" 优缺点")]),v._v(" "),_("p",[_("strong",[v._v("数组")]),v._v("由于是紧凑连续存储,可以随机访问，通过索引快速找到对应元素，而且相对节约存储空间。但正因为连续存储，内存空间必须一次性分配够，所以说数组如果要"),_("u",[v._v("扩容")]),v._v("，需要重新分配一块更大的空间，再把数据全部复制过去，时间复杂度 O(N)；而且你如果想在数组中间进行"),_("u",[v._v("插入和删除")]),v._v("，每次必须搬移后面的所有数据以保持连续，时间复杂度 O(N)。")]),v._v(" "),_("p",[_("strong",[v._v("链表")]),v._v("因为元素不连续，而是靠指针指向下一个元素的位置，所以不存在数组的扩容问题；如果知道某一元素的前驱和后驱，操作指针即可删除该元素或者插入新元素，时间复杂度 O(1)。但是正因为存储空间不连续，你无法根据一个索引算出对应元素的地址，所以"),_("u",[v._v("不能随机访问")]),v._v("；而且由于每个元素必须存储指向前后元素位置的指针，"),_("u",[v._v("会消耗相对更多的储存空间")]),v._v("。")]),v._v(" "),_("h2",{attrs:{id:"抽象数据类型"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#抽象数据类型"}},[v._v("#")]),v._v(" 抽象数据类型")]),v._v(" "),_("p",[v._v("抽象数据类型（Abstract Data Type，ADT）是将数据对象、数据对象之间的关系和数据对象的基本操作封装在一起的一种表达方式。")]),v._v(" "),_("p",[v._v("抽象数据类型 = "),_("u",[v._v("数据的逻辑结构 + 抽象运算")]),v._v("（运算的功能描述）")]),v._v(" "),_("div",{staticClass:"language- extra-class"},[_("pre",{pre:!0,attrs:{class:"language-text"}},[_("code",[v._v("// 抽象数据类型可以用以下的三元组来表示：\n\nADT抽象数据类型名{\n  数据对象：<数据对象的定义>\n  数据关系：<数据关系的定义>\n  基本操作：<基本操作的定义>\n} ADT抽象数据类型名\n")])])]),_("p",[v._v("实现方式")]),v._v(" "),_("div",{staticClass:"language- extra-class"},[_("pre",{pre:!0,attrs:{class:"language-text"}},[_("code",[v._v("1. 用已有数据类型定义描述它的存储结构\n2. 用函数定义描述它的操作\n>>>然后就可以在程序中使用了\n")])])]),_("h1",{attrs:{id:"参考"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#参考"}},[v._v("#")]),v._v(" 参考")]),v._v(" "),_("p",[v._v("《2021王道数据结构》")]),v._v(" "),_("p",[_("a",{attrs:{href:"https://labuladong.github.io/algo/",target:"_blank",rel:"noopener noreferrer"}},[v._v("《labuladong的算法小抄》"),_("OutboundLink")],1)])])}),[],!1,null,null,null);t.default=s.exports}}]);