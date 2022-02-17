state，驱动应用的数据源；
数据源就是组件里面的 data

view，以声明方式将 state 映射到视图；
actions，响应在 view 上的用户输入导致的状态变化。
actions 说白了就是多个函数。

不知道你还记不记得 Vue 的生命周期，View 的话，下面从初始化显示和更新显示两个方面来说。
初始化显示 View（组件，也就是模板页面）读取 State（状态）。
更新显示更新的起始点为 View，它通过事件触发调用 actions 里面的某一个函数，然后 actions 去更新 State 的状态数据。State 更新之后，View 的界面也会随之改变。
多组间共享状态的问题
比如说，当用户登录之后，用户的个人中心页面上有三个组件都需要获取到用户的登录状态（isLogin），这时就有了一个多组件共享状态的概念。

1. 多个视图依赖于同一状态

2. 来自不同视图的行为需要变更同一状态

3. 以前的解决办法

   a. 将数据以及操作数据的行为都定义在父组件

   b. 将数据以及操作数据的行为传递给需要的各个子组件(有可能需要多级传递）

4. vuex 就是用来解决这个问题的

下面讲一个实例带大家学习 Vuex 的核心和 API。

Vuex 的核心概念和 API
先把概念拿出来，看一遍就可以了，主要理解实例中下面这些对象是如何运作的。

流程：View -> Actions -> Mutations -> State -> View

1、 state

1.  vuex 管理的状态对象
2.  它应该是唯一的
    const state = {undefined
    xxx: initValue
    }

2、 mutations 1) 包含多个直接更新 state 的方法(回调函数)的对象 2) 谁来触发: action 中的 commit('mutation 名称') 3) 只能包含同步的代码, 不能写异步代码
const mutations = {undefined
yyy (state, {data1}) {undefined
// 更新 state 的某个属性
}
}

3、 actions

1. 包含多个事件回调函数的

2. 通过执行: commit()来触发 mutation 的调用, 间接更新 sta

3. 谁来触发: 组件中: $store.dispatch('action 名称', data1) // 'zzz

4. 可以包含异步代码(axios)

const actions ={undefined
      zzz ({commit, state}, data1)
              commit('yyy', {data1})
      }
  }

4、 getters

1.  包含多个计算属性(get)的对象（也就是说，getters 是用来放 state 里面的变量的计算属性的）

2.  谁来读取: 组件中: $store.getters.xxx

    const getters ={undefined
         mmm (state) {undefined
            return ...
         }
    }

5、 modules

1. 包含多个 module

2. 一个 module 是一个 store 的配置对象

3. 与一个组件(包含有共享数据)对应

Todolist 的实例分析
我把源码打包免费给大家，然后主要讲一下 Vuex 的实现，也可以先看一下 Vuex 的运作流程。

有 1 积分直通车：https://download.csdn.net/download/qq_41647999/10880373

没有积分直通车：https://pan.baidu.com/s/1xtTQEuwZfLph4Jtg-AvMUg，提取码：zllo

store 文件夹
index.js
index.js 是入口文件（Vuex 最核心的管理对象）。

    mutations-types.js
             存放mutation的名称常量，

Vuex 的运作流程
详细流程图

流程详解
① 在组件（页面）中，通过 dispatch()或 mapActions()这个函数分发给 actions 的函数去处理。

② actions 的函数可以与后台交互，也可以通过 commit() 提交给 mutations 去处理。

③ mutations 可以直接与 devtool（如本地存储工具 → 在实例代码中的 utils 里的 storageUtils.js）交互与直接更新 state（数据状态）。

④ 如果有计算属性（get 函数写在 getters 里面），则状态通过 getters 的$store.getters()或mapGetters()来更新组件；反之就通过$store.state()或者 mapState()的方式来更新组件。
