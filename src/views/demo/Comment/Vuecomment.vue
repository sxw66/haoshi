<template>
  <div>
    <h1>这是一个评论测试页面</h1>
    <hr />
    <comment
      @doSend="parentsendfn"
      @doChidSend="childsendfn"
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
    //  初始文本框发送事件
    parentsendfn(content) {
      console.log('content,bid,pid1111', content)
      this.list.push({
        id: 1,
        commentUser: {
          id: 1,
          nickName: '师浩浩',
          avatar:
            'https://img1.baidu.com/it/u=1632120736,2257211314&fm=253&fmt=auto&app=138&f=JPEG?w=563&h=500',
        },
        content: 'content',
        createDate: new Date(),
      })
    },
    // 评论列表中文本框发送事件
    childsendfn(content, bid, pid) {
      console.log('评论内容', content)
      console.log('被评论用户id', bid)
      console.log('父级评论id', pid)
      this.$refs.abc.commentList.forEach((element) => {
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
          content: content,
          createDate: new Date(),
        })
      })
    },
  },
}
</script>

<style></style>
