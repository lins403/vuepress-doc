# 动画

## transform

```scss
tranform

// 变化的原点，可以至多三维，至多由一/二/三个值组成
transform-origin: <length>|<percentage>|left|center|right|top|bottom
```

## transition

```scss
/* property name | duration | timing function | delay */
transition: margin-right 4s ease-in-out 1s;

// ---------等同于---------
transition-property: margin-right;
transition-duration: 4s;
transition-timing-function: ease-in-out; // `ease` by default
transition-delay: 1s;


// timing-function 和 delay 的顺序好像可以互换
transition: margin-right 4s 1s ease-in-out ;
// timing-function 可以使用多个效果
transition-timing-function: ease, step-start, cubic-bezier(0.1, 0.7, 1.0, 0.1)
```

```scss
/* Apply to 2 properties */
transition: margin-right 4s, color 1s;

/* Apply to all changed properties */
transition: all 0.5s ease-out;
```

## animation

```scss
animation: 3s ease-in 1s infinite reverse both running slidein;

// ---------等同于---------

animation-delay
animation-direction: normal/reverse/alternate/alternate-reverse
animation-duration
animation-fill-mode: none/backwards/forwards/both //https://www.runoob.com/cssref/css3-pr-animation-fill-mode.html
animation-iteration-count: infinite/数字(可以是浮点数)
animation-name: 由@keyframes定义
animation-play-state: running/paused
animation-timing-function
```

可以使用多个动画

## @keyframes

```scss
@keyframes slidein {
  from {
    transform: translateX(0%);
  }
  to {
    transform: translateX(100%);
  }
}
// <custom-ident> (animation-name)
// from(0%) / to(100%) / <percentage>
```

## CSS 函数

timing function

### cubic-bezier()

`cubic-bezier()` ，贝塞尔曲线 (Bézier curve)

延伸：ease、ease-in、ease-out、ease-in-out、linear

与动画结合的效果：[cubic-bezier.com](https://cubic-bezier.com/#0,1,1,0)

### steps()

将动画/过渡分割成段，切割成不连续的状态

demo: [Steps() Demo - Clock](https://designmodo.com/demo/stepscss/index.html)

```scss
// steps(<number_of_steps>，<direction>)
```

## 性能相关

- `transform: translate()`
- `transform: scale()`
- `transform: rotate()`
- `opacity`

[High Performance Animations - HTML5 Rocks](https://www.html5rocks.com/en/tutorials/speed/high-performance-animations/)



## NPM packages

[animate.css vs animejs vs gsap vs popmotion | npm trends](https://www.npmtrends.com/animate.css-vs-animejs-vs-gsap-vs-popmotion)

### Popmotion

[The animator’s JavaScript toolbox.](https://popmotion.io/)

- JS 动画

- 函数式编程



# 参考

[animation - CSS-Tricks](https://css-tricks.com/almanac/properties/a/animation/)

[【译】css动画里的steps()用法详解](https://segmentfault.com/a/1190000007042048)
