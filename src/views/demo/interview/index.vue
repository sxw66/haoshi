<template>
  <div>
    <div class="interview-demo">
      <h3>1.判断数据类型</h3>
      <div class="demo-one">
        typeof可以测试出number、string、boolean、undefined及function，
        而对于null、数组、对象，typeof均检测出为object，不能进一步判断它们的类型。
      </div>
      <div class="demo-one">
        instanceof 需要判断的数据 js内置构造函数
        instanceof不能区别undefined和null，而且对于基本类型如果不是用new声明的则也测试不出来，对于是使用new声明的类型，它还可以检测出多层继承关系。
      </div>
      <div class="demo-one">
        Object.prototype.toString.call 最准确的判断数据类型
      </div>
    </div>
    <div class="interview-demo">
      <h3>2.数组遍历的方法</h3>
      <div class="demo-two">for 循环遍历</div>
      <div class="demo-two">for in 遍历下标</div>
      <div class="demo-two">forEach() 遍历数组获取每一个元素,没有返回值</div>
      <div class="demo-two">
        indexOf() 遍历数组,返回元素在数组中第一次出现的下标
      </div>
      <div class="demo-two">
        for of 遍历值 String 字符串 Array 数组 Set 集合Map
      </div>
      <div class="demo-two">
        reduce() 遍历数组,返回参数函数里的返回值.一般作为累加器计算总价
      </div>
      <div class="demo-two">
        filter() 遍历数组,返回一个新数组:新数组由参数里,条件为true的元素组成.
      </div>
      <div class="demo-two">
        map() 遍历数组,返回一个新数组,数组由参数里的返回值组成.必须使用return.
      </div>
      <div class="demo-two">
        some()
        遍历数组,返回参数函数里符合条件的元素,只要检测到有一个元素符合条件就return.
      </div>
      <div class="demo-two">
        every()
        遍历数组,判断数组元素是否全部符合函数参数里的条件,全部满足返回true,否则false.
      </div>
    </div>
    <div class="interview-demo">
      <h3>3.数组对象去重</h3>
      <div class="demo-one">原数组{{ arrset }}</div>
      <div class="demo-one">去重后的数组{{ newarr }}</div>
      <el-button type="primary" @click="handerSet">点击去重</el-button>
    </div>
    <div class="interview-demo">
      <h3>3.数组一些使用方法</h3>
      <el-button type="success" @click="handerArr">数组的一些方法</el-button>
    </div>
  </div>
</template>

<script>
export default {
  name: "interview",
  data() {
    return {
      arrset: [
        { id: 1, name: "张三", age: 18 },
        { id: 2, name: "李四", age: 19 },
        { id: 3, name: "王五", age: 20 },
        { id: 2, name: "张三", age: 21 },
        { id: 5, name: undefined, age: undefined },
      ],
      newarr: [],
      reduceArr: [1,2,4,6,78],
      agearr: undefined,
      a: undefined,
      b: undefined,
      c: undefined,
      d: undefined,
      e: undefined,
      f: undefined,
    };
  },
  methods: {
    typeof(obj) {
      return Object.prototype.toString.call(obj).slice(8, -1).toLowerCase();
    },
    handerSet() {
      this.arrset.forEach((item) => {
        if (this.newarr.every((element) => item.name != element.name)) {
          this.newarr.push(item);
        }
      });
      console.log(this.newarr);
    },
    handerArr() {
      // 1.不能return 没有返回值无法中断一直循环结束
      // this.arrset.forEach((item) => {
      //   console.log("forEach 不能return 没有返回值无法中断", item);
      // });
      // 2.过滤筛选条件 找出年龄大于20的 有返回值
      this.agearr = this.arrset.filter((item) => {
        return item.age > 20;
      });
      console.log("filter 有返回值-----", this.agearr);
      // 3.有返回值 可以链式调用
      this.a = this.arrset
        .map((item) => {
          return item.age > 18 ? item : "";
        })
        .filter((item) => item);
      console.log("map 有返回值-------", this.a);
      // 4.只查找出数组中第一项的符合条件的后面的不会在执行
      this.b = this.arrset.find((item) => {
        return item != undefined;
      });
      console.log("find 有返回值找到一个就不会在找------", this.b);
      // 5.只查找出数组中第一项的下标的后面的不会在执行
      this.c = this.arrset.findIndex((item) => {
        return item.age > 18;
      });
      console.log("findIndex 查找数组下标------", this.c);
      // 6.返回布尔值 一个为真都为真
      this.d = this.arrset.some((item) => {
        return item.age > 18;
      });
      console.log("some 一个为真都为真------", this.d);
      // 7.返回布尔值 一个为假都为假
      this.e = this.arrset.every((item) => {
        return item.age > 18;
      });
      // 8.数组进行求和 有返回值
      this.f = this.reduceArr.reduce((item, t) => {
        return item + t;
      });
      console.log("reduce 数组求和------", this.f);
    },
  },
  mounted() {
    // 1.var 声明的变量如果先使用默认会赋值为 undefined 然后在进行赋值
    // 2.函数内部及对象内部 的var 和 let 声明的变量只能函数和对象内访问
    // 3.var 可以重复声明let 和const (对象数组除外)不行
    function oneFun() {
      console.log("var", nameaa);
      var nameaa = "小明";
      let age = 18;
      console.log("let", age);
    }
    console.log(window, oneFun());
    // =========================================
    let bool = true; //Boolean
    let num = 1; //Number
    let str = "abc"; //String
    let und = undefined; //Undefined
    let nul = null; //Null
    let arr = [1, 2, 3]; //Object数组
    let obj = { name: "haoxl", age: 18 }; //Object对象
    let fun = function () {
      console.log("I am a function");
    }; // Object函数

    // typeof  // 检测基本数据类型
    console.log(typeof bool); //boolean
    console.log(typeof num); //number
    console.log(typeof str); //string
    console.log(typeof und); //undefined
    console.log(typeof nul); //object
    console.log(typeof arr); //object
    console.log(typeof obj); //object
    console.log(typeof fun); //function

    // instanceof  需要判断的数据 js内置构造函数  对于基本类型如果不是用new声明的则也测试不出来
    console.log("----------instanceof -------------");
    console.log("instanceof 检测数子", num instanceof Number); // false
    console.log("instanceof 检测字符串", str instanceof String); // false
    console.log("instanceof 检测布尔", bool instanceof Boolean); // false
    console.log("instanceof 检测und", und instanceof Object); // false
    console.log("instanceof 检测nul", nul instanceof Object); // false
    console.log(arr instanceof Array); // true
    console.log(obj instanceof Object); // true
    console.log(fun instanceof Function); // true

    // Object.prototype.toString.call 最准确的判断数据类型
    console.log("-------Object.prototype.toString.call--------");
    console.log(" 判断数字", Object.prototype.toString.call(3));
    console.log(" 判断字符串", Object.prototype.toString.call("hellow"));
    console.log(" 判断布尔值", Object.prototype.toString.call(true));
    console.log(" 判断数组", Object.prototype.toString.call([]));
    console.log(" 判断对象", Object.prototype.toString.call({}));
    console.log(" 判断nul", Object.prototype.toString.call(null));

    if (Object.prototype.toString.call([]) === "[object Array]") {
      this.$message({
        message: "判断数组数据类型 正确",
        type: "success",
      });
    }
    for (const iterator of this.arrset) {
      console.log(11111, iterator);
    }
  },
};
</script>

<style lang="less" scoped>
.interview-demo {
  width: 100%;
  border: solid 2px red;
  margin: 10px 0;
  .demo-one {
    background: rgb(108, 198, 11);
    display: flex;
    justify-content: center;
    margin: 15px 0;
  }
  .demo-two {
    background: rgb(184, 89, 89);
    display: flex;
    justify-content: center;
    margin: 15px 0;
    color: white;
  }
}
</style>