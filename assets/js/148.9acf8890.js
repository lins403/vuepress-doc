(window.webpackJsonp=window.webpackJsonp||[]).push([[148],{547:function(t,s,a){"use strict";a.r(s);var n=a(43),e=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"_3d扫盲"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3d扫盲"}},[t._v("#")]),t._v(" 3D扫盲")]),t._v(" "),a("p",[a("a",{attrs:{href:"https://cesium.com/cesiumjs/",target:"_blank",rel:"noopener noreferrer"}},[t._v("cesium"),a("OutboundLink")],1),t._v("：用于显示三维地球和地图的开源js库")]),t._v(" "),a("h2",{attrs:{id:"thingjs"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#thingjs"}},[t._v("#")]),t._v(" ThingJS")]),t._v(" "),a("p",[t._v("ThingJS底层基于的是开源的three.js，都是对原生webGL的封装")]),t._v(" "),a("p",[t._v("用ThingJS的软件进行建模，或者通过他们的插件将3dmax的模型导进去。在客户端上生成模型后，导出资源包，在项目中引入让模型渲染，再根据api编写代码实现交互效果")]),t._v(" "),a("p",[t._v("工具下载："),a("a",{attrs:{href:"https://store.thingjs.com/tools",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://store.thingjs.com/tools"),a("OutboundLink")],1),t._v("，软件只有Windows的exe格式")]),t._v(" "),a("p",[t._v("那个CampusBuilder就是摸摸搭，好像是免费下载用的，只是其中应该会有很多收费的增值功能")]),t._v(" "),a("p",[a("strong",[t._v("github demo")])]),t._v(" "),a("p",[t._v("vue-iframe："),a("a",{attrs:{href:"https://github.com/jz991724/thingjsdemo",target:"_blank",rel:"noopener noreferrer"}},[t._v("GitHub - jz991724/thingjsdemo: ThingJs的Demo"),a("OutboundLink")],1)]),t._v(" "),a("p",[t._v("thingjs-1.2.7-demo："),a("a",{attrs:{href:"https://github.com/loveyuxuan/Thingjs_Demo",target:"_blank",rel:"noopener noreferrer"}},[t._v("GitHub - loveyuxuan/Thingjs_Demo: 学习thingjs"),a("OutboundLink")],1)]),t._v(" "),a("p",[t._v("复杂场景demo："),a("a",{attrs:{href:"https://github.com/lcpqwer/prison/blob/master/desc",target:"_blank",rel:"noopener noreferrer"}},[t._v("prison/desc at master · lcpqwer/prison · GitHub"),a("OutboundLink")],1)]),t._v(" "),a("h2",{attrs:{id:"webgl"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#webgl"}},[t._v("#")]),t._v(" WebGL")]),t._v(" "),a("p",[t._v("原理")]),t._v(" "),a("ol",[a("li",[t._v("软件如3dsmax，导出模型生成的顶点（vertexs）坐标")]),t._v(" "),a("li",[t._v("顶点着色器，根据投影矩阵进行运算，将三维的世界坐标转换成二维的屏幕坐标")]),t._v(" "),a("li",[t._v("GPU，将一系列坐标生成一个个图元（primitives），图元被合成片元（fragments）")]),t._v(" "),a("li",[t._v("片元着色器，进行绘制像素，完成渲染")])]),t._v(" "),a("h2",{attrs:{id:"threejs"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#threejs"}},[t._v("#")]),t._v(" threejs")]),t._v(" "),a("p",[t._v("封装了更底层的原生WebGL的api")]),t._v(" "),a("img",{staticStyle:{zoom:"67%"},attrs:{src:"https://images2015.cnblogs.com/blog/111077/201704/111077-20170424125001006-1547749106.png"}}),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/**\n* 创建场景\n*/")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" scene "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("THREE"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Scene")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/**\n* 创建模型（点模型Points、线模型Line、网格模型Mesh）\n*/")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" geometry_Sphere "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("THREE"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("SphereGeometry")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("60")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("40")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("40")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//创建一个球体几何对象")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" geometry "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("THREE"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("BoxGeometry")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("100")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("100")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("100")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//创建一个立方体几何对象Geometry")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/**\n* 创建材质（颜色、贴图、透明度）\n*/")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" material "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("THREE"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("MeshLambertMaterial")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//内置的网格材质")]),t._v("\n  color"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0x0000ff")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" mesh "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("THREE"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Mesh")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("geometry"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" material"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//网格模型对象Mesh")]),t._v("\nscene"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("add")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("mesh"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//网格模型添加到场景中")]),t._v("\n")])])]),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/**\n* 光源设置（位置、颜色、点光源PointLight、环境光AmbientLight、平行光DirectionalLight、聚广源SpotLight）\n*/")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("...")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/**\n* 相机设置（视线方向、投影方式（正投影相机OrthographicCamera、透视投影相机PerspectiveCamera））\n*/")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" width "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" window"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("innerWidth\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" height "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" window"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("innerHeight\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" k "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" width "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v(" height "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//窗口宽高比")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" s "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("200")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//三维场景显示范围控制系数，系数越大，显示的范围越大")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" camera "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("THREE"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("OrthographicCamera")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("s "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v(" k"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" s "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v(" k"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" s"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("s"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1000")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//创建相机对象")]),t._v("\ncamera"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("position"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("set")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("200")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("300")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("200")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//设置相机位置")]),t._v("\ncamera"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("lookAt")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("scene"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("position"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//设置相机方向(指向的场景对象)")]),t._v("\n")])])]),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/**\n* 创建渲染器\n*/")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" renderer "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("THREE"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("WebGLRenderer")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nrenderer"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("setSize")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("width"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" height"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//设置渲染区域尺寸")]),t._v("\nrenderer"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("setClearColor")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0xb9d3ff")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//设置背景颜色")]),t._v("\ndocument"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("body"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("appendChild")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("renderer"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("domElement"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//body元素中插入canvas对象")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//执行渲染操作，指定场景、相机作为参数")]),t._v("\nrenderer"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("render")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("scene"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" camera"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),a("blockquote",[a("p",[t._v("所谓相机对象"),a("strong",[t._v("Camera")]),t._v("本质上就是视图矩阵"),a("code",[t._v(".matrixWorldInverse")]),t._v("和投影矩阵"),a("code",[t._v(".projectionMatrix")]),t._v("，Threejs渲染场景的时候调用相机对象的视图矩阵和投影矩阵值对顶点进行矩阵变换。")])]),t._v(" "),a("p",[t._v("https://github.com/puxiao/threejs-tutorial")]),t._v(" "),a("p",[t._v("https://yyhsong.github.io/iThreeJS/")])])}),[],!1,null,null,null);s.default=e.exports}}]);