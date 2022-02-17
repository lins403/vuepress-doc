# 3D扫盲

[cesium](https://cesium.com/cesiumjs/)：用于显示三维地球和地图的开源js库

## ThingJS

ThingJS底层基于的是开源的three.js，都是对原生webGL的封装

用ThingJS的软件进行建模，或者通过他们的插件将3dmax的模型导进去。在客户端上生成模型后，导出资源包，在项目中引入让模型渲染，再根据api编写代码实现交互效果

工具下载：<https://store.thingjs.com/tools>，软件只有Windows的exe格式

那个CampusBuilder就是摸摸搭，好像是免费下载用的，只是其中应该会有很多收费的增值功能

**github demo**

vue-iframe：[GitHub - jz991724/thingjsdemo: ThingJs的Demo](https://github.com/jz991724/thingjsdemo)

thingjs-1.2.7-demo：[GitHub - loveyuxuan/Thingjs_Demo: 学习thingjs](https://github.com/loveyuxuan/Thingjs_Demo)

复杂场景demo：[prison/desc at master · lcpqwer/prison · GitHub](https://github.com/lcpqwer/prison/blob/master/desc)

## WebGL

原理

1. 软件如3dsmax，导出模型生成的顶点（vertexs）坐标
2. 顶点着色器，根据投影矩阵进行运算，将三维的世界坐标转换成二维的屏幕坐标
3. GPU，将一系列坐标生成一个个图元（primitives），图元被合成片元（fragments）
4. 片元着色器，进行绘制像素，完成渲染

## threejs

封装了更底层的原生WebGL的api

<img src="https://images2015.cnblogs.com/blog/111077/201704/111077-20170424125001006-1547749106.png" style="zoom: 67%;" />

```js
/**
* 创建场景
*/
var scene = new THREE.Scene()
/**
* 创建模型（点模型Points、线模型Line、网格模型Mesh）
*/
var geometry_Sphere = new THREE.SphereGeometry(60, 40, 40); //创建一个球体几何对象
var geometry = new THREE.BoxGeometry(100, 100, 100) //创建一个立方体几何对象Geometry
/**
* 创建材质（颜色、贴图、透明度）
*/
var material = new THREE.MeshLambertMaterial({    //内置的网格材质
  color: 0x0000ff
})
var mesh = new THREE.Mesh(geometry, material) //网格模型对象Mesh
scene.add(mesh) //网格模型添加到场景中
```

```js
/**
* 光源设置（位置、颜色、点光源PointLight、环境光AmbientLight、平行光DirectionalLight、聚广源SpotLight）
*/
...

/**
* 相机设置（视线方向、投影方式（正投影相机OrthographicCamera、透视投影相机PerspectiveCamera））
*/
var width = window.innerWidth
var height = window.innerHeight
var k = width / height //窗口宽高比
var s = 200 //三维场景显示范围控制系数，系数越大，显示的范围越大
var camera = new THREE.OrthographicCamera(-s * k, s * k, s, -s, 1, 1000)    //创建相机对象
camera.position.set(200, 300, 200) //设置相机位置
camera.lookAt(scene.position) //设置相机方向(指向的场景对象)
```

```js
/**
* 创建渲染器
*/
var renderer = new THREE.WebGLRenderer()
renderer.setSize(width, height) //设置渲染区域尺寸
renderer.setClearColor(0xb9d3ff, 1) //设置背景颜色
document.body.appendChild(renderer.domElement) //body元素中插入canvas对象
//执行渲染操作，指定场景、相机作为参数
renderer.render(scene, camera)
```

> 所谓相机对象**Camera**本质上就是视图矩阵`.matrixWorldInverse`和投影矩阵`.projectionMatrix`，Threejs渲染场景的时候调用相机对象的视图矩阵和投影矩阵值对顶点进行矩阵变换。

https://github.com/puxiao/threejs-tutorial

https://yyhsong.github.io/iThreeJS/
