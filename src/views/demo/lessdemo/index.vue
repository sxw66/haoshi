<template>
  <div>
    <h1>
      Less 学习——————————变量、插值、函数、作用域、嵌套、伪类、伪元素、媒体查询
    </h1>
    <h3>Less使用@变量————Sass使用$变量</h3>
    <div class="container">
      <header></header>
      <section></section>
      <footer></footer>
    </div>
    <div class="testfunction">函数测试</div>
    <div class="box9">when()判断</div>
  </div>
</template>

<script>
export default {
  /*
    运算、单位、转义、颜色
  */
  /*
    LESS运算单位以前面的单位为准如果前面是em则为em单位
    LESS会局部变量提升Sass不会局部变量提升
    Sass如果单位不相同的话是不能够运算的
  */
  /*
    函数
  */
}
</script>

<style scoped lang="less">
@container-width: 500px;
@container-height: 500px;
@key: margin;
@num: 20px;
// 支持局部变量
.container {
  @widthnumber: 100px;
  width: @container-width;
  height: @container-height;
  background: #6025f5;
  header {
    height: @num*3;
    background: #345;
  }
  section {
    height: 100px;
    background: #456;
    &:hover {
      background: pink;
      @{key}: 20px;
    }
    &::before {
      content: '';
      position: absolute;
      left: 100px;
      right: 100px;
      background: chartreuse;
    }
    @media screen and (max-width: 500px) {
      background: #901;
    }
  }
  footer {
    height: @num + 10em;
    background: #456 * 2;
  }
}
// 函数
.testfunction {
  width: round(3.5px); // 四舍五入
  height: percentage(0.2); // 20%
  margin: random(); // 支持Sass不支持Less
  padding: sqrt(25%); // 支持
}
.show {
  display: block;
}
/*  LESS 混入 可传参，也可不传参 */
.hide(@color) {
  display: none;
  color: @color;
}
.box6 {
  width: 100px;
  .show;
  .hide(blue);
}

// scss 用@mixin混入-@include使用 以及传参
// @mixin show {
//   display: block;
// }
// @mixin hide($color) {
//   display: none;
//   color: $color;
// }
// .box6 {
//   width: 100px;
//   @include show;
//   @include hide(red);
// }

// **命名空间(Less)**
// 只有less有命名空间的概念，scss 没有命名空间的概念

// #test(){
//     .show{ display: inline-block; }
// }
// .box7{
//     #test.show;
// }

// **less extend继承**
// .line{
//     display : inline;
// }
// .box7{
//     &:extend(.line);
// }
// .box8{
//     &:extend(.line);
// }

// 条件判断,循环
.getname(@cn) when(@cn>4) {
  width: 100px + @cn;
}
.getname(@cn) when(@cn<4) {
  width: 10px + @cn;
}
.box9 {
  .getname(3);
  background: red;
}
</style>
