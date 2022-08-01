<template>
  <div>
    <strong>
      Lottie一个适用于Web，Android，iOS，React Native和Windows
      的移动库，它可以使用Bodymovin解析以json格式导出的Adobe After
      Effects动画，并在移动设备上进行本地渲染！
      作者:https://www.jianshu.com/p/1cfba54a1e23
    </strong>
    <div class="box">
      <button @click="startFun">播放</button>
      <button @click="suspendFun">暂停</button>
      <div id="lottie_box"></div>
    </div>
  </div>
</template>

<script>
import lottie from 'lottie-web'

export default {
  name: 'Lottie',
  data() {
    return {
      lottie: {},
    }
  },
  methods: {
    suspendFun: function () {
      this.lottie.pause()
    },
    startFun: function () {
      this.lottie.play()
    },
  },
  mounted() {
    this.lottie = lottie.loadAnimation({
      container: document.getElementById('lottie_box'),
      renderer: 'svg',
      loop: true,
      path: 'https://labs.nearpod.com/bodymovin/demo/markus/halloween/markus.json',
    })
  },
}
</script>

<style>
.box {
  width: 100%;
  height: 100%;
}
#bm {
  width: 100%;
  height: 100%;
  margin: 0px auto;
}
</style>
