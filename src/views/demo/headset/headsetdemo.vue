<template>
  <div>
    <div class="header-con">
      <el-image
        v-for="item in headImgs"
        :key="item.id"
        :src="item.img"
        :style="{
          zIndex: 1000 + item.id,
          position: 'absolute',
          left: item.id * 40 - 5 + 'px',
        }"
      >
        <div>{{ item.img }}</div>
      </el-image>
    </div>
    <div :style="{ paddingLeft: headImgs.length * 5 + 15 + 'px' }">
      {{ headImgs.length }}人已转发
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      headImgs: [
        {
          id: '1',
          img: 'https://fuss10.elemecdn.com/a/3f/3302e58f9a181d2509f3dc0fa68b0jpeg.jpeg',
        },
        {
          id: '2',
          img: 'https://fuss10.elemecdn.com/1/34/19aa98b1fcb2781c4fba33d850549jpeg.jpeg',
        },
        {
          id: '3',
          img: 'https://fuss10.elemecdn.com/0/6f/e35ff375812e6b0020b6b4e8f9583jpeg.jpeg',
        },
        {
          id: '4',
          img: 'https://fuss10.elemecdn.com/9/bb/e27858e973f5d7d3904835f46abbdjpeg.jpeg',
        },
        {
          id: '5',
          img: 'https://fuss10.elemecdn.com/3/28/bbf893f792f03a54408b3b7a7ebf0jpeg.jpeg',
        },
        {
          id: '6',
          img: '66',
        },
      ],
    }
  },
}
</script>

<style>
.el-image {
  position: relative;
  display: inline-block;
  overflow: hidden;
  border-radius: 50%;
  height: 50px;
  width: 50px;
}
.header-con {
  position: relative;
}
.header-con >>> .van-image {
  margin-right: -10px !important;
}
</style>
