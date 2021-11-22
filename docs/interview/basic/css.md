# CSS



## Q&A问题

### 画一个三角形

```css
div {
  width:0px;
  height:0px;
  
  /*下三角形*/
  border-top:10px solid red;
  border-right:10px solid transparent;
  border-left:10px solid transparent;
  
  /*上三角形*/
  border-right:10px solid transparent;
  border-bottom:10px solid blue;
  border-left:10px solid transparent;
}
```

