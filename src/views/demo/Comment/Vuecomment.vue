<template>
  <div>
    <h1>这是一个评论测试页面</h1>
    <hr />
    <comment
      @doSend="fn"
      @doChidSend="sendfn"
      :commentList="list"
      label="作者师浩浩"
      ref="abc"
    ></comment>
  </div>
</template>

<script>
import comment from '@/components/Comment.vue'
export default {
  components: {
    comment,
  },
  data() {
    return {
      list: [
        {
          id: 1,
          commentUser: {
            id: 1,
            nickName: '师浩浩',
            avatar:
              'https://img1.baidu.com/it/u=1632120736,2257211314&fm=253&fmt=auto&app=138&f=JPEG?w=563&h=500',
          },
          content: '[害羞][害羞][害羞]<br/>',
          createDate: '2019-9-23 17:36:02',
          childrenList: [
            {
              id: 2,
              commentUser: {
                id: 2,
                nickName: '坏菠萝',
                avatar: '',
              },
              targetUser: {
                id: 1,
                nickName: '花非花',
                avatar:
                  'http://qzapp.qlogo.cn/qzapp/101483738/6637A2B6611592A44A7699D14E13F7F7/50',
              },
              content: '真的就很棒！很Nice!',
              createDate: '2019-9-23 17:45:26',
            },
          ],
        },
      ],
    }
  },
  methods: {
    sendfn() {
      console.log('this.$refs.abc', this.$refs.abc)
      console.log('this.$refs.222', this.$refs.abc.commentList)
      this.$refs.abc.commentList.forEach((element) => {
        console.log('element', element.childrenList)
        element.childrenList.push({
          id: 3,
          commentUser: {
            id: 3,
            nickName: '坏菠萝1',
            avatar: '',
          },
          targetUser: {
            id: 2,
            nickName: '花非花1',
            avatar:
              'http://qzapp.qlogo.cn/qzapp/101483738/6637A2B6611592A44A7699D14E13F7F7/50',
          },
          content: '1真的就很棒！很Nice!',
          createDate: new Date(),
        })
      })
      console.log('this.$refs.3333', this.$refs.abc.commentList)
    },
    fn(val) {
      console.log(val)
      this.list.push({
        id: 1,
        content: val,
        commentUser: {
          id: 1,
          nickName: '师浩浩',
          avatar:
            'https://img1.baidu.com/it/u=1632120736,2257211314&fm=253&fmt=auto&app=138&f=JPEG?w=563&h=500',
        },
      })
    },
  },
}
</script>

<style></style>
