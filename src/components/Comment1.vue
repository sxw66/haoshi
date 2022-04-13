<template>
  <!-- 按照设计稿样式--重构119991222 -->
  <div class="hbl-fa">
    <div class="hbl-comm">
      <div class="comment-avatar" v-if="showAvatar">
        <avatar :avatar="avatar"></avatar>
      </div>
      <div class="comment" :style="{ width: commentWidth }">
        <el-input
          @focus="showButton(0)"
          type="textarea"
          :autosize="{ minRows: minRows, maxRows: maxRows }"
          maxlength="30"
          :placeholder="placeholder"
          v-model="textareaMap[0]"
          show-word-limit
        >
        </el-input>

        <div v-if="buttonMap[0]" class="hbl-owo">
          <div
            :class="pBodyMap[0] ? 'OwO' : 'OwO OwO-open'"
            class="emoj publish"
            :style="{ width: emojiWidth }"
          >
            <div class="expressionbox">
              <!-- 表情 -->
              <div @click="pBodyStatus(0)">
                <svg
                  t="1649639680125"
                  viewBox="0 0 1025 1024"
                  version="1.1"
                  xmlns="http://www.w3.org/2000/svg"
                  p-id="2311"
                  width="16"
                  height="16"
                >
                  <path
                    d="M512.016 1024C229.232 1024 0.016 794.784 0.016 512 0.016 229.216 229.232 0 512.016 0 794.784 0 1024 229.216 1024 512 1024 794.784 794.784 1024 512.016 1024ZM512.016 64C264.976 64 64.016 264.96 64.016 512 64.016 759.024 264.976 960 512.016 960 759.04 960 960 759.024 960 512 960 264.96 759.04 64 512.016 64ZM510.336 833.456C509.056 833.456 507.744 833.488 506.448 833.488 310.992 833.488 229.024 657.12 225.616 649.552 218.336 633.424 225.488 614.496 241.584 607.216 257.712 599.968 276.576 607.088 283.888 623.088 286.64 629.12 352.928 769.488 506.576 769.488 507.584 769.488 508.576 769.456 509.584 769.456 672.896 767.552 738.368 624.768 739.024 623.344 746.176 607.216 765.024 599.872 781.264 607.152 797.392 614.336 804.672 633.248 797.456 649.408 794.176 656.8 714.208 831.056 510.336 833.456ZM671.504 479.84C636.224 479.84 607.664 451.232 607.664 415.984 607.664 380.768 636.224 352.176 671.504 352.176 706.768 352.176 735.344 380.768 735.344 415.984 735.344 451.232 706.768 479.84 671.504 479.84ZM351.504 479.84C316.224 479.84 287.664 451.232 287.664 415.984 287.664 380.768 316.224 352.176 351.504 352.176 386.768 352.176 415.344 380.768 415.344 415.984 415.344 451.232 386.768 479.84 351.504 479.84Z"
                    p-id="2312"
                    fill="#95A1AD"
                  ></path>
                </svg>
              </div>
              <!-- 图片 -->
              <div @click="pBodyStatus(0)" style="margin-left: 5px">
                <svg
                  t="1649747784280"
                  viewBox="0 0 1024 1024"
                  version="1.1"
                  xmlns="http://www.w3.org/2000/svg"
                  p-id="3840"
                  width="16"
                  height="16"
                >
                  <path
                    d="M512 0C229.229 0 0 229.23 0 512s229.229 512 512 512c282.77 0 512-229.23 512-512S794.77 0 512 0z m0 972.8C257.505 972.8 51.2 766.495 51.2 512S257.505 51.2 512 51.2c254.5 0 460.8 206.305 460.8 460.8S766.5 972.8 512 972.8z m382.729-222.23H129.27l169.25-260.045 120.141 184.59L632.814 336.81l261.915 413.76zM336.92 293.565c0 21.205-17.19 38.4-38.4 38.4-21.205 0-38.399-17.195-38.399-38.4s17.194-38.4 38.399-38.4c21.209 0 38.4 17.195 38.4 38.4z"
                    fill="#95A1AD"
                    p-id="3841"
                  ></path>
                </svg>
              </div>
              <div
                class="OwO-logo"
                @click="pBodyStatus(0)"
                style="margin: 0px 10px"
              >
                <span @blur="blur">Emoji表情</span>
              </div>
            </div>
            <div class="OwO-body">
              <ul class="OwO-items OwO-items-show">
                <li
                  class="OwO-item"
                  v-for="(oitem, index) in OwOlist"
                  :key="'oitem' + index"
                  @click="choseEmoji(0, oitem.title)"
                >
                  <img :src="require('./img/face/' + oitem.url)" alt="" />
                </li>
              </ul>
            </div>
          </div>

          <div class="publish publish-btn">
            <button class="btn" @click="doSend()">发表</button>
            <button @click="cancel(0)" class="btn btn-cancel">取消</button>
          </div>
        </div>
      </div>
    </div>
    <div class="comm">
      <div class="su com-rep"></div>
      <div class="com-rep com-title">
        评论<span class="com-span">({{ commentNum }})</span>
      </div>
    </div>
    <div v-for="(item, index) in commentList" class="hbl-child" :key="index">
      <div class="reply"></div>
      <div class="content">
        <div class="comment-f">
          <avatar
            :avatar="item.commentUser.avatar ? item.commentUser.avatar : avatar"
          ></avatar>
        </div>
        <div class="comment-f">
          <div>
            <div class="nickname author">
              {{ item.commentUser.nickName }}
            </div>
            <div v-if="item.commentUser.id === authorId" class="icon author">
              {{ label }}
            </div>
            <div class="date">
              {{ item.createDate }}
            </div>
          </div>
        </div>
        <div class="reply-content" v-html="analyzeEmoji(item.content)">
          {{ analyzeEmoji(item.content) }}
        </div>
        <!-- 这里是按设计稿设计风格重新写了样式 -->
        <div class="reply-content-test reply-fa">
          <div class="reply-font">
            <div class="reply-font-operation">
              <span
                @click="doReply(item.id)"
                style="display: flex; align-items: center"
              >
                <img src="./img/icon/reply.png" class="icon-reply" /><font
                  class="icon-reply icon-hf"
                  >回复</font
                >
              </span>
              <!-- 删除 -->
              <svg
                t="1649754565809"
                class="icon-delete"
                viewBox="0 0 1024 1024"
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                p-id="3280"
                width="16"
                height="16"
              >
                <path
                  d="M909.050991 169.476903l-217.554898 0 0-31.346939c0-39.5866-32.205493-71.792093-71.793116-71.792093L408.15591 66.337871c-39.5866 0-71.792093 32.205493-71.792093 71.792093l0 31.346939L113.349581 169.476903c-11.013845 0-19.942191 8.940626-19.942191 19.954471s8.928347 19.954471 19.942191 19.954471l84.264149 0 0 640.687918c0 60.479443 49.203632 109.683075 109.683075 109.683075l416.474366 0c60.479443 0 109.683075-49.203632 109.683075-109.683075L833.454246 209.385844l75.595722 0c11.012821 0 19.942191-8.940626 19.942191-19.954471S920.063813 169.476903 909.050991 169.476903zM376.2482 138.130987c0-17.593703 14.314007-31.907711 31.907711-31.907711l211.547067 0c17.593703 0 31.907711 14.314007 31.907711 31.907711l0 31.346939L376.2482 169.477926 376.2482 138.130987zM793.569864 850.074785c0 38.486546-31.312146 69.798692-69.798692 69.798692L307.297828 919.873478c-38.486546 0-69.798692-31.312146-69.798692-69.798692L237.499136 211.042577l556.070728 0L793.569864 850.074785z"
                  p-id="3281"
                ></path>
                <path
                  d="M510.662539 861.276918c11.012821 0 19.954471-8.92937 19.954471-19.942191L530.61701 294.912753c0-11.013845-8.94165-19.942191-19.954471-19.942191s-19.954471 8.928347-19.954471 19.942191L490.708068 841.334727C490.708068 852.347548 499.649717 861.276918 510.662539 861.276918z"
                  p-id="3282"
                ></path>
                <path
                  d="M374.562814 801.449321c11.012821 0 19.954471-8.92937 19.954471-19.942191L394.517285 354.74035c0-11.013845-8.94165-19.942191-19.954471-19.942191s-19.954471 8.928347-19.954471 19.942191l0 426.76678C354.608344 792.519951 363.549993 801.449321 374.562814 801.449321z"
                  p-id="3283"
                ></path>
                <path
                  d="M649.832182 801.449321c11.012821 0 19.954471-8.92937 19.954471-19.942191L669.786653 354.74035c0-11.013845-8.94165-19.942191-19.954471-19.942191s-19.954471 8.928347-19.954471 19.942191l0 426.76678C629.877711 792.519951 638.81936 801.449321 649.832182 801.449321z"
                  p-id="3284"
                ></path>
              </svg>
              <!-- 点赞 -->
              <svg
                t="1649754234738"
                class="icon-like"
                viewBox="0 0 1024 1024"
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                p-id="2414"
                width="16"
                height="16"
              >
                <path
                  d="M857.28 344.992h-264.832c12.576-44.256 18.944-83.584 18.944-118.208 0-78.56-71.808-153.792-140.544-143.808-60.608 8.8-89.536 59.904-89.536 125.536v59.296c0 76.064-58.208 140.928-132.224 148.064l-117.728-0.192A67.36 67.36 0 0 0 64 483.04V872c0 37.216 30.144 67.36 67.36 67.36h652.192a102.72 102.72 0 0 0 100.928-83.584l73.728-388.96a102.72 102.72 0 0 0-100.928-121.824zM128 872V483.04c0-1.856 1.504-3.36 3.36-3.36H208v395.68H131.36A3.36 3.36 0 0 1 128 872z m767.328-417.088l-73.728 388.96a38.72 38.72 0 0 1-38.048 31.488H272V476.864a213.312 213.312 0 0 0 173.312-209.088V208.512c0-37.568 12.064-58.912 34.72-62.176 27.04-3.936 67.36 38.336 67.36 80.48 0 37.312-9.504 84-28.864 139.712a32 32 0 0 0 30.24 42.496h308.512a38.72 38.72 0 0 1 38.048 45.888z"
                  p-id="2415"
                ></path>
              </svg>
            </div>
          </div>
        </div>
        <div
          class="comment"
          :style="{ width: commentWidth }"
          v-if="replyMap[item.id]"
          :showAvatar="showAvatar"
        >
          <el-input
            @focus="showButton(item.id)"
            type="textarea"
            :autosize="{ minRows: minRows, maxRows: maxRows }"
            :placeholder="placeholder"
            v-model="textareaMap[item.id]"
          >
          </el-input>

          <div v-if="buttonMap[item.id]" class="hbl-owo">
            <div
              :class="pBodyMap[item.id] ? 'OwO' : 'OwO OwO-open'"
              class="emoj publish"
              :style="{ width: emojiWidth }"
            >
              <div class="OwO-logo" @click="pBodyStatus(item.id)">
                <span>Emoji表情</span>
              </div>
              <div class="OwO-body">
                <ul class="OwO-items OwO-items-show">
                  <li
                    class="OwO-item"
                    v-for="(oitem, index) in OwOlist"
                    :key="'oitem' + index"
                    @click="choseEmoji(item.id, oitem.title)"
                  >
                    <img :src="require('./img/face/' + oitem.url)" alt="" />
                  </li>
                </ul>
              </div>
            </div>

            <div class="publish publish-btn">
              <button
                class="btn"
                @click="doChidSend(item.id, item.commentUser.id, item.id)"
              >
                发送
              </button>
              <button @click="cancel(item.id)" class="btn btn-cancel">
                取消
              </button>
            </div>
          </div>
        </div>
      </div>

      <div
        class="children"
        v-for="(ritem, jndex) in item.childrenList"
        :key="jndex"
      >
        <div class="reply"></div>
        <div class="content">
          <div class="comment-f">
            <avatar
              :avatar="
                ritem.commentUser.avatar ? ritem.commentUser.avatar : avatar
              "
            ></avatar>
          </div>

          <div class="comment-f">
            <div>
              <div class="nickname author">
                {{ ritem.commentUser.nickName }}
              </div>
              <div v-if="ritem.commentUser.id === authorId" class="icon author">
                {{ label }}
              </div>
              <div class="date">
                {{ ritem.createDate }}
              </div>
            </div>
          </div>

          <div class="reply-content">
            <div class="cc cc-to">
              <a href="#">@{{ ritem.targetUser.nickName }}</a>
            </div>

            <div class="cc" v-html="analyzeEmoji(ritem.content)">
              {{ analyzeEmoji(ritem.content) }}
            </div>
          </div>

          <div class="reply-content reply-fa">
            <div class="reply-font" @click="doReply(ritem.id)">
              <div>
                <img src="./img/icon/reply.png" class="icon-reply" /><font
                  class="icon-reply icon-hf"
                  >回复</font
                >
              </div>
            </div>
            <div
              class="comment"
              :style="{ width: commentWidth }"
              v-if="replyMap[ritem.id]"
              :showAvatar="showAvatar"
            >
              <el-input
                @focus="showButton(ritem.id)"
                type="textarea"
                :autosize="{ minRows: minRows, maxRows: maxRows }"
                :placeholder="placeholder"
                v-model="textareaMap[ritem.id]"
              >
              </el-input>

              <div v-if="buttonMap[ritem.id]" class="hbl-owo">
                <div
                  :class="pBodyMap[ritem.id] ? 'OwO' : 'OwO OwO-open'"
                  class="emoj publish"
                  :style="{ width: emojiWidth }"
                >
                  <div class="OwO-logo" @click="pBodyStatus(ritem.id)">
                    <span>Emoji表情</span>
                  </div>
                  <div class="OwO-body">
                    <ul class="OwO-items OwO-items-show">
                      <li
                        class="OwO-item"
                        v-for="(oitem, index) in OwOlist"
                        :key="'oitem' + index"
                        @click="choseEmoji(ritem.id, oitem.title)"
                      >
                        <img :src="require('./img/face/' + oitem.url)" alt="" />
                      </li>
                    </ul>
                  </div>
                </div>

                <div class="publish publish-btn">
                  <button
                    class="btn"
                    @click="doChidSend(ritem.id, ritem.commentUser.id, item.id)"
                  >
                    发送
                  </button>
                  <button @click="cancel(ritem.id)" class="btn btn-cancel">
                    取消
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import avatar from './Avatar.vue'
export default {
  props: {
    emojiWidth: {
      type: String,
      default: '560px',
    },
    showAvatar: {
      type: Boolean,
      default: true,
    },
    avatar: {
      type: String,
      default: '',
    },
    placeholder: {
      type: String,
      default: '在此输入评论内容...',
    },
    minRows: {
      type: Number,
      default: 4,
    },
    maxRows: {
      type: Number,
      default: 8,
    },
    commentNum: {
      type: Number,
      default: 2,
    },
    authorId: {
      type: Number,
      default: 1,
    },
    label: {
      type: String,
      default: '作者',
    },
    commentList: {
      type: Array,
      default: () => [
        {
          id: 1,
          commentUser: {
            id: 1,
            nickName: '花非花',
            avatar:
              'http://qzapp.qlogo.cn/qzapp/101483738/6637A2B6611592A44A7699D14E13F7F7/50',
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
    },
    commentWidth: {
      type: String,
      default: '100%',
    },
  },
  data() {
    return {
      flag: false,
      replyMap: [],
      buttonMap: [],
      pBodyMap: [],
      textareaMap: [],
      OwOlist: [
        //表情包和表情路径
        { title: '微笑', url: 'weixiao.gif' },
        { title: '嘻嘻', url: 'xixi.gif' },
        { title: '哈哈', url: 'haha.gif' },
        { title: '可爱', url: 'keai.gif' },
        { title: '可怜', url: 'kelian.gif' },
        { title: '挖鼻', url: 'wabi.gif' },
        { title: '吃惊', url: 'chijing.gif' },
        { title: '害羞', url: 'haixiu.gif' },
        { title: '挤眼', url: 'jiyan.gif' },
        { title: '闭嘴', url: 'bizui.gif' },
        { title: '鄙视', url: 'bishi.gif' },
        { title: '爱你', url: 'aini.gif' },
        { title: '泪', url: 'lei.gif' },
        { title: '偷笑', url: 'touxiao.gif' },
        { title: '亲亲', url: 'qinqin.gif' },
        { title: '生病', url: 'shengbing.gif' },
        { title: '太开心', url: 'taikaixin.gif' },
        { title: '白眼', url: 'baiyan.gif' },
        { title: '右哼哼', url: 'youhengheng.gif' },
        { title: '左哼哼', url: 'zuohengheng.gif' },
        { title: '嘘', url: 'xu.gif' },
        { title: '衰', url: 'shuai.gif' },
        { title: '吐', url: 'tu.gif' },
        { title: '哈欠', url: 'haqian.gif' },
        { title: '抱抱', url: 'baobao.gif' },
        { title: '怒', url: 'nu.gif' },
        { title: '疑问', url: 'yiwen.gif' },
        { title: '馋嘴', url: 'chanzui.gif' },
        { title: '拜拜', url: 'baibai.gif' },
        { title: '思考', url: 'sikao.gif' },
        { title: '汗', url: 'han.gif' },
        { title: '困', url: 'kun.gif' },
        { title: '睡', url: 'shui.gif' },
        { title: '钱', url: 'qian.gif' },
        { title: '失望', url: 'shiwang.gif' },
        { title: '酷', url: 'ku.gif' },
        { title: '色', url: 'se.gif' },
        { title: '哼', url: 'heng.gif' },
        { title: '鼓掌', url: 'guzhang.gif' },
        { title: '晕', url: 'yun.gif' },
        { title: '悲伤', url: 'beishang.gif' },
        { title: '抓狂', url: 'zhuakuang.gif' },
        { title: '黑线', url: 'heixian.gif' },
        { title: '阴险', url: 'yinxian.gif' },
        { title: '怒骂', url: 'numa.gif' },
        { title: '互粉', url: 'hufen.gif' },
        { title: '书呆子', url: 'shudaizi.gif' },
        { title: '愤怒', url: 'fennu.gif' },
        { title: '感冒', url: 'ganmao.gif' },
        { title: '心', url: 'xin.gif' },
        { title: '伤心', url: 'shangxin.gif' },
        { title: '猪', url: 'zhu.gif' },
        { title: '熊猫', url: 'xiongmao.gif' },
        { title: '兔子', url: 'tuzi.gif' },
        { title: '喔克', url: 'ok.gif' },
        { title: '耶', url: 'ye.gif' },
        { title: '棒棒', url: 'good.gif' },
        { title: '不', url: 'no.gif' },
        { title: '赞', url: 'zan.gif' },
        { title: '来', url: 'lai.gif' },
        { title: '弱', url: 'ruo.gif' },
        { title: '草泥马', url: 'caonima.gif' },
        { title: '神马', url: 'shenma.gif' },
        { title: '囧', url: 'jiong.gif' },
        { title: '浮云', url: 'fuyun.gif' },
        { title: '给力', url: 'geili.gif' },
        { title: '围观', url: 'weiguan.gif' },
        { title: '威武', url: 'weiwu.gif' },
        { title: '话筒', url: 'huatong.gif' },
        { title: '蜡烛', url: 'lazhu.gif' },
        { title: '蛋糕', url: 'dangao.gif' },
        { title: '发红包', url: 'fahongbao.gif' },
      ],
    }
  },
  components: {
    avatar,
  },
  methods: {
    //事件处理器
    blur() {
      alert('ss')
    },
    showButton(index) {
      //this.showFlag = true;
      console.log(index + 'index')
      this.$set(this.buttonMap, index, true)
    },
    cancel(index) {
      this.$set(this.buttonMap, index, false)
      if (index !== 0) {
        this.$set(this.replyMap, index, false)
      }
      console.log(index + 'index')
      //this.showFlag = false;
    },
    doSend() {
      //console.log("====="+this.textarea);
      this.$emit('doSend', this.textareaMap[0])
      this.$set(this.textareaMap, 0, '')
      // this.buttonMap = []  // 发送后隐藏表情
    },
    doChidSend(index, commentUserId, pid) {
      this.$emit('doChidSend', this.textareaMap[index], commentUserId, pid)
      this.$set(this.textareaMap, index, '')
      // this.buttonMap = [] // // 发送后隐藏表情
    },

    //选择表情包
    choseEmoji: function (index, inner) {
      var con = ''
      if (!this.textareaMap[index]) {
        this.$set(this.textareaMap, index, '')
      }
      con = this.textareaMap[index] += '[' + inner + ']'
      this.$set(this.textareaMap, index, con)
    },
    analyzeEmoji: function (cont) {
      //编译表情替换成图片展示出来
      var pattern1 = /\[[\u4e00-\u9fa5]+\]/g
      var pattern2 = /\[[\u4e00-\u9fa5]+\]/
      var content = cont.match(pattern1)
      var str = cont
      if (content) {
        for (var i = 0; i < content.length; i++) {
          for (var j = 0; j < this.OwOlist.length; j++) {
            if ('[' + this.OwOlist[j].title + ']' == content[i]) {
              var src = this.OwOlist[j].url
              break
            }
          }
          var s = require('./img/face/' + src)
          var imoj = "<img src='" + s + "'/>"

          str = str.replace(pattern2, imoj)
        }
      }
      return str
    },
    doReply(index) {
      this.$set(this.replyMap, index, !this.replyMap[index])
      console.log(this.replyMap[index])
      // this.cancel(0)
    },

    pBodyStatus(index) {
      this.$set(this.pBodyMap, index, !this.pBodyMap[index])
    },
  },
  watch: {
    // 如果路由有变化，会再次执行该方法
    // '$route':'routeChange'
  },
  created() {
    //生命周期函数
  },
  mounted() {
    //页面加载完成后
  },
}
</script>
<style lang="less" scoped>
.comment,
.comment-avatar {
  display: inline-block;
  vertical-align: top;
}

.emoj {
  /*width: 560px;*/
}

.publish {
  margin-top: 10px;
  display: inline-block;
  vertical-align: top;
}

.publish-btn {
  float: right;
}

.btn {
  margin-top: 3px;
  border-width: 0px;

  /* 边框宽度 */
  font-family: Microsoft YaHei;

  /* 设置字体 */
  color: white;

  /* 字体颜色 */
  font-size: 13px;

  /* 字体大小 */
  text-align: center;
  line-height: 30px;
  display: inline-block;
  margin-left: 5px;
  margin-right: 5px;
  cursor: pointer;

  /* 鼠标移入按钮范围时出现手势 */
  outline: none;

  /* 不显示轮廓线 */
  width: 72px;
  height: 32px;
  background: #0059b3;
  border-radius: 2px;
}

.btn-cancel {
  background: grey;

  /* 背景颜色 */
}

.tmsgBox {
  position: relative;
  background: #fff;
  padding: 15px;
  margin-bottom: 20px;
  border-radius: 5px;
}

.tmsg-respond {
  h3 {
    font-size: 18px;
    font-weight: bold;
    margin-bottom: 8px;

    small {
      font-size: smaller;
      cursor: pointer;
    }
  }

  textarea {
    background: #f4f6f7;
    height: 100px;
    margin-bottom: 10px;
  }
}

.OwO {
  position: relative;
  z-index: 1;

  .OwO-logo {
    position: relative;
    border-radius: 4px;
    color: #444;
    display: inline-block;
    background: #fff;
    border: 1px solid #ddd;
    font-size: 13px;
    padding: 0 6px;
    cursor: pointer;
    height: 30px;
    box-sizing: border-box;
    z-index: 2;
    line-height: 30px;

    &:hover {
      animation: a 5s infinite ease-in-out;
      -webkit-animation: a 5s infinite ease-in-out;
    }
  }

  .OwO-body {
    position: absolute;
    background: #fff;
    border: 1px solid #ddd;
    z-index: 1;
    top: 29px;
    border-radius: 0 4px 4px 4px;
    display: none;
  }
}

.OwO-open {
  .OwO-body {
    display: block;
  }

  .OwO-logo {
    border-radius: 4px 4px 0 0;
    border-bottom: none;

    &:hover {
      animation: none;
      -webkit-animation: none;
    }
  }
}

.OwO {
  .OwO-items {
    max-height: 197px;
    overflow: scroll;
    font-size: 0;
    padding: 10px;
    z-index: 1;

    .OwO-item {
      background: #f7f7f7;
      padding: 5px 10px;
      border-radius: 5px;
      display: inline-block;
      margin: 0 10px 12px 0;
      transition: 0.3s;
      line-height: 19px;
      font-size: 20px;
      cursor: pointer;

      &:hover {
        background: #eee;
        box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.14),
          0 3px 1px -2px rgba(0, 0, 0, 0.2), 0 1px 5px 0 rgba(0, 0, 0, 0.12);
        animation: a 5s infinite ease-in-out;
        -webkit-animation: a 5s infinite ease-in-out;
      }
    }
  }

  .OwO-body .OwO-bar {
    width: 100%;
    height: 30px;
    border-top: 1px solid #ddd;
    background: #fff;
    border-radius: 0 0 4px 4px;
    color: #444;

    .OwO-packages li {
      display: inline-block;
      line-height: 30px;
      font-size: 14px;
      padding: 0 10px;
      cursor: pointer;
      margin-right: 3px;
      text-align: center;

      &:first-of-type {
        border-radius: 0 0 0 3px;
      }
    }
  }
}

@-webkit-keyframes a {
  2% {
    -webkit-transform: translateY(1.5px) rotate(1.5deg);
    transform: translateY(1.5px) rotate(1.5deg);
  }

  4% {
    -webkit-transform: translateY(-1.5px) rotate(-0.5deg);
    transform: translateY(-1.5px) rotate(-0.5deg);
  }

  6% {
    -webkit-transform: translateY(1.5px) rotate(-1.5deg);
    transform: translateY(1.5px) rotate(-1.5deg);
  }

  8% {
    -webkit-transform: translateY(-1.5px) rotate(-1.5deg);
    transform: translateY(-1.5px) rotate(-1.5deg);
  }

  10% {
    -webkit-transform: translateY(2.5px) rotate(1.5deg);
    transform: translateY(2.5px) rotate(1.5deg);
  }

  12% {
    -webkit-transform: translateY(-0.5px) rotate(1.5deg);
    transform: translateY(-0.5px) rotate(1.5deg);
  }

  14% {
    -webkit-transform: translateY(-1.5px) rotate(1.5deg);
    transform: translateY(-1.5px) rotate(1.5deg);
  }

  16% {
    -webkit-transform: translateY(-0.5px) rotate(-1.5deg);
    transform: translateY(-0.5px) rotate(-1.5deg);
  }

  18% {
    -webkit-transform: translateY(0.5px) rotate(-1.5deg);
    transform: translateY(0.5px) rotate(-1.5deg);
  }

  20% {
    -webkit-transform: translateY(-1.5px) rotate(2.5deg);
    transform: translateY(-1.5px) rotate(2.5deg);
  }

  22% {
    -webkit-transform: translateY(0.5px) rotate(-1.5deg);
    transform: translateY(0.5px) rotate(-1.5deg);
  }

  24% {
    -webkit-transform: translateY(1.5px) rotate(1.5deg);
    transform: translateY(1.5px) rotate(1.5deg);
  }

  26% {
    -webkit-transform: translateY(0.5px) rotate(0.5deg);
    transform: translateY(0.5px) rotate(0.5deg);
  }

  28% {
    -webkit-transform: translateY(0.5px) rotate(1.5deg);
    transform: translateY(0.5px) rotate(1.5deg);
  }

  30% {
    -webkit-transform: translateY(-0.5px) rotate(2.5deg);
    transform: translateY(-0.5px) rotate(2.5deg);
  }

  32%,
  34% {
    -webkit-transform: translateY(1.5px) rotate(-0.5deg);
    transform: translateY(1.5px) rotate(-0.5deg);
  }

  36% {
    -webkit-transform: translateY(-1.5px) rotate(2.5deg);
    transform: translateY(-1.5px) rotate(2.5deg);
  }

  38% {
    -webkit-transform: translateY(1.5px) rotate(-1.5deg);
    transform: translateY(1.5px) rotate(-1.5deg);
  }

  40% {
    -webkit-transform: translateY(-0.5px) rotate(2.5deg);
    transform: translateY(-0.5px) rotate(2.5deg);
  }

  42% {
    -webkit-transform: translateY(2.5px) rotate(-1.5deg);
    transform: translateY(2.5px) rotate(-1.5deg);
  }

  44% {
    -webkit-transform: translateY(1.5px) rotate(0.5deg);
    transform: translateY(1.5px) rotate(0.5deg);
  }

  46% {
    -webkit-transform: translateY(-1.5px) rotate(2.5deg);
    transform: translateY(-1.5px) rotate(2.5deg);
  }

  48% {
    -webkit-transform: translateY(-0.5px) rotate(0.5deg);
    transform: translateY(-0.5px) rotate(0.5deg);
  }

  50% {
    -webkit-transform: translateY(0.5px) rotate(0.5deg);
    transform: translateY(0.5px) rotate(0.5deg);
  }

  52% {
    -webkit-transform: translateY(2.5px) rotate(2.5deg);
    transform: translateY(2.5px) rotate(2.5deg);
  }

  54% {
    -webkit-transform: translateY(-1.5px) rotate(1.5deg);
    transform: translateY(-1.5px) rotate(1.5deg);
  }

  56% {
    -webkit-transform: translateY(2.5px) rotate(2.5deg);
    transform: translateY(2.5px) rotate(2.5deg);
  }

  58% {
    -webkit-transform: translateY(0.5px) rotate(2.5deg);
    transform: translateY(0.5px) rotate(2.5deg);
  }

  60% {
    -webkit-transform: translateY(2.5px) rotate(2.5deg);
    transform: translateY(2.5px) rotate(2.5deg);
  }

  62% {
    -webkit-transform: translateY(-0.5px) rotate(2.5deg);
    transform: translateY(-0.5px) rotate(2.5deg);
  }

  64% {
    -webkit-transform: translateY(-0.5px) rotate(1.5deg);
    transform: translateY(-0.5px) rotate(1.5deg);
  }

  66% {
    -webkit-transform: translateY(1.5px) rotate(-0.5deg);
    transform: translateY(1.5px) rotate(-0.5deg);
  }

  68% {
    -webkit-transform: translateY(-1.5px) rotate(-0.5deg);
    transform: translateY(-1.5px) rotate(-0.5deg);
  }

  70% {
    -webkit-transform: translateY(1.5px) rotate(0.5deg);
    transform: translateY(1.5px) rotate(0.5deg);
  }

  72% {
    -webkit-transform: translateY(2.5px) rotate(1.5deg);
    transform: translateY(2.5px) rotate(1.5deg);
  }

  74% {
    -webkit-transform: translateY(-0.5px) rotate(0.5deg);
    transform: translateY(-0.5px) rotate(0.5deg);
  }

  76% {
    -webkit-transform: translateY(-0.5px) rotate(2.5deg);
    transform: translateY(-0.5px) rotate(2.5deg);
  }

  78% {
    -webkit-transform: translateY(-0.5px) rotate(1.5deg);
    transform: translateY(-0.5px) rotate(1.5deg);
  }

  80% {
    -webkit-transform: translateY(1.5px) rotate(1.5deg);
    transform: translateY(1.5px) rotate(1.5deg);
  }

  82% {
    -webkit-transform: translateY(-0.5px) rotate(0.5deg);
    transform: translateY(-0.5px) rotate(0.5deg);
  }

  84% {
    -webkit-transform: translateY(1.5px) rotate(2.5deg);
    transform: translateY(1.5px) rotate(2.5deg);
  }

  86% {
    -webkit-transform: translateY(-1.5px) rotate(-1.5deg);
    transform: translateY(-1.5px) rotate(-1.5deg);
  }

  88% {
    -webkit-transform: translateY(-0.5px) rotate(2.5deg);
    transform: translateY(-0.5px) rotate(2.5deg);
  }

  90% {
    -webkit-transform: translateY(2.5px) rotate(-0.5deg);
    transform: translateY(2.5px) rotate(-0.5deg);
  }

  92% {
    -webkit-transform: translateY(0.5px) rotate(-0.5deg);
    transform: translateY(0.5px) rotate(-0.5deg);
  }

  94% {
    -webkit-transform: translateY(2.5px) rotate(0.5deg);
    transform: translateY(2.5px) rotate(0.5deg);
  }

  96% {
    -webkit-transform: translateY(-0.5px) rotate(1.5deg);
    transform: translateY(-0.5px) rotate(1.5deg);
  }

  98% {
    -webkit-transform: translateY(-1.5px) rotate(-0.5deg);
    transform: translateY(-1.5px) rotate(-0.5deg);
  }

  0%,
  to {
    -webkit-transform: translate(0) rotate(0deg);
    transform: translate(0) rotate(0deg);
  }
}

@keyframes a {
  2% {
    -webkit-transform: translateY(1.5px) rotate(1.5deg);
    transform: translateY(1.5px) rotate(1.5deg);
  }

  4% {
    -webkit-transform: translateY(-1.5px) rotate(-0.5deg);
    transform: translateY(-1.5px) rotate(-0.5deg);
  }

  6% {
    -webkit-transform: translateY(1.5px) rotate(-1.5deg);
    transform: translateY(1.5px) rotate(-1.5deg);
  }

  8% {
    -webkit-transform: translateY(-1.5px) rotate(-1.5deg);
    transform: translateY(-1.5px) rotate(-1.5deg);
  }

  10% {
    -webkit-transform: translateY(2.5px) rotate(1.5deg);
    transform: translateY(2.5px) rotate(1.5deg);
  }

  12% {
    -webkit-transform: translateY(-0.5px) rotate(1.5deg);
    transform: translateY(-0.5px) rotate(1.5deg);
  }

  14% {
    -webkit-transform: translateY(-1.5px) rotate(1.5deg);
    transform: translateY(-1.5px) rotate(1.5deg);
  }

  16% {
    -webkit-transform: translateY(-0.5px) rotate(-1.5deg);
    transform: translateY(-0.5px) rotate(-1.5deg);
  }

  18% {
    -webkit-transform: translateY(0.5px) rotate(-1.5deg);
    transform: translateY(0.5px) rotate(-1.5deg);
  }

  20% {
    -webkit-transform: translateY(-1.5px) rotate(2.5deg);
    transform: translateY(-1.5px) rotate(2.5deg);
  }

  22% {
    -webkit-transform: translateY(0.5px) rotate(-1.5deg);
    transform: translateY(0.5px) rotate(-1.5deg);
  }

  24% {
    -webkit-transform: translateY(1.5px) rotate(1.5deg);
    transform: translateY(1.5px) rotate(1.5deg);
  }

  26% {
    -webkit-transform: translateY(0.5px) rotate(0.5deg);
    transform: translateY(0.5px) rotate(0.5deg);
  }

  28% {
    -webkit-transform: translateY(0.5px) rotate(1.5deg);
    transform: translateY(0.5px) rotate(1.5deg);
  }

  30% {
    -webkit-transform: translateY(-0.5px) rotate(2.5deg);
    transform: translateY(-0.5px) rotate(2.5deg);
  }

  32%,
  34% {
    -webkit-transform: translateY(1.5px) rotate(-0.5deg);
    transform: translateY(1.5px) rotate(-0.5deg);
  }

  36% {
    -webkit-transform: translateY(-1.5px) rotate(2.5deg);
    transform: translateY(-1.5px) rotate(2.5deg);
  }

  38% {
    -webkit-transform: translateY(1.5px) rotate(-1.5deg);
    transform: translateY(1.5px) rotate(-1.5deg);
  }

  40% {
    -webkit-transform: translateY(-0.5px) rotate(2.5deg);
    transform: translateY(-0.5px) rotate(2.5deg);
  }

  42% {
    -webkit-transform: translateY(2.5px) rotate(-1.5deg);
    transform: translateY(2.5px) rotate(-1.5deg);
  }

  44% {
    -webkit-transform: translateY(1.5px) rotate(0.5deg);
    transform: translateY(1.5px) rotate(0.5deg);
  }

  46% {
    -webkit-transform: translateY(-1.5px) rotate(2.5deg);
    transform: translateY(-1.5px) rotate(2.5deg);
  }

  48% {
    -webkit-transform: translateY(-0.5px) rotate(0.5deg);
    transform: translateY(-0.5px) rotate(0.5deg);
  }

  50% {
    -webkit-transform: translateY(0.5px) rotate(0.5deg);
    transform: translateY(0.5px) rotate(0.5deg);
  }

  52% {
    -webkit-transform: translateY(2.5px) rotate(2.5deg);
    transform: translateY(2.5px) rotate(2.5deg);
  }

  54% {
    -webkit-transform: translateY(-1.5px) rotate(1.5deg);
    transform: translateY(-1.5px) rotate(1.5deg);
  }

  56% {
    -webkit-transform: translateY(2.5px) rotate(2.5deg);
    transform: translateY(2.5px) rotate(2.5deg);
  }

  58% {
    -webkit-transform: translateY(0.5px) rotate(2.5deg);
    transform: translateY(0.5px) rotate(2.5deg);
  }

  60% {
    -webkit-transform: translateY(2.5px) rotate(2.5deg);
    transform: translateY(2.5px) rotate(2.5deg);
  }

  62% {
    -webkit-transform: translateY(-0.5px) rotate(2.5deg);
    transform: translateY(-0.5px) rotate(2.5deg);
  }

  64% {
    -webkit-transform: translateY(-0.5px) rotate(1.5deg);
    transform: translateY(-0.5px) rotate(1.5deg);
  }

  66% {
    -webkit-transform: translateY(1.5px) rotate(-0.5deg);
    transform: translateY(1.5px) rotate(-0.5deg);
  }

  68% {
    -webkit-transform: translateY(-1.5px) rotate(-0.5deg);
    transform: translateY(-1.5px) rotate(-0.5deg);
  }

  70% {
    -webkit-transform: translateY(1.5px) rotate(0.5deg);
    transform: translateY(1.5px) rotate(0.5deg);
  }

  72% {
    -webkit-transform: translateY(2.5px) rotate(1.5deg);
    transform: translateY(2.5px) rotate(1.5deg);
  }

  74% {
    -webkit-transform: translateY(-0.5px) rotate(0.5deg);
    transform: translateY(-0.5px) rotate(0.5deg);
  }

  76% {
    -webkit-transform: translateY(-0.5px) rotate(2.5deg);
    transform: translateY(-0.5px) rotate(2.5deg);
  }

  78% {
    -webkit-transform: translateY(-0.5px) rotate(1.5deg);
    transform: translateY(-0.5px) rotate(1.5deg);
  }

  80% {
    -webkit-transform: translateY(1.5px) rotate(1.5deg);
    transform: translateY(1.5px) rotate(1.5deg);
  }

  82% {
    -webkit-transform: translateY(-0.5px) rotate(0.5deg);
    transform: translateY(-0.5px) rotate(0.5deg);
  }

  84% {
    -webkit-transform: translateY(1.5px) rotate(2.5deg);
    transform: translateY(1.5px) rotate(2.5deg);
  }

  86% {
    -webkit-transform: translateY(-1.5px) rotate(-1.5deg);
    transform: translateY(-1.5px) rotate(-1.5deg);
  }

  88% {
    -webkit-transform: translateY(-0.5px) rotate(2.5deg);
    transform: translateY(-0.5px) rotate(2.5deg);
  }

  90% {
    -webkit-transform: translateY(2.5px) rotate(-0.5deg);
    transform: translateY(2.5px) rotate(-0.5deg);
  }

  92% {
    -webkit-transform: translateY(0.5px) rotate(-0.5deg);
    transform: translateY(0.5px) rotate(-0.5deg);
  }

  94% {
    -webkit-transform: translateY(2.5px) rotate(0.5deg);
    transform: translateY(2.5px) rotate(0.5deg);
  }

  96% {
    -webkit-transform: translateY(-0.5px) rotate(1.5deg);
    transform: translateY(-0.5px) rotate(1.5deg);
  }

  98% {
    -webkit-transform: translateY(-1.5px) rotate(-0.5deg);
    transform: translateY(-1.5px) rotate(-0.5deg);
  }

  0%,
  to {
    -webkit-transform: translate(0) rotate(0deg);
    transform: translate(0) rotate(0deg);
  }
}

/*用户输入表单*/

.tmsg-r-info {
  margin: 10px 0;

  input {
    height: 30px;
    border-radius: 4px;
    background: #f4f6f7;
  }

  .info-submit {
    margin: 10px 0;
    text-align: center;

    p {
      /*background: #97dffd;*/
      color: #fff;
      border-radius: 5px;
      cursor: pointer;

      /*transition: all .3s ease-in-out;*/
      height: 30px;
      line-height: 30px;
      text-align: center;
    }
  }
}

.tmsg-commentshow h1 {
  /*background: #97dffd;*/
  color: #fff;
  border-radius: 5px;
  cursor: pointer;

  /*transition: all .3s ease-in-out;*/
  height: 30px;
  line-height: 30px;
  text-align: center;
}

/*.tmsg-r-info .info-submit p:hover{
    background: #47456d;
}*/
/*评论列表*/

.tmsg-comments .tmsg-comments-tip {
  display: block;
  border-left: 2px solid #363d4c;
  padding: 0 10px;
  margin: 40px 0;
  font-size: 20px;
}

.tmsg-commentlist {
  margin-bottom: 20px;
}

.tmsg-commentshow > .tmsg-commentlist {
  border-bottom: 1px solid #e5eaed;
}

.tmsg-c-item {
  border-top: 1px solid #e5eaed;

  article {
    margin: 20px 0;

    header {
      margin-bottom: 10px;

      img {
        width: 65px;
        height: 65px;
        border-radius: 50%;
        float: left;
        transition: all 0.4s ease-in-out;
        -webkit-transition: all 0.4s ease-in-out;
        margin-right: 15px;
        object-fit: cover;

        &:hover {
          transform: rotate(360deg);
          -webkit-transform: rotate(360deg);
        }
      }

      .i-name {
        font-size: 14px;
        margin: 5px 8px 7px 0;
        color: #444;
        font-weight: bold;
        display: inline-block;
      }

      .i-class {
        display: inline-block;
        margin-left: 10px;
        background: #dff0d8;
        color: #3c763d;
        border-radius: 5px;
        padding: 3px 6px;
        font-size: 12px;
        font-weight: 400;
      }

      .i-time {
        color: #aaa;
        font-size: 12px;
      }
    }

    section {
      margin-left: 80px;

      p img {
        vertical-align: middle;
      }

      .tmsg-replay {
        margin: 10px 0;
        font-size: 12px;
        color: #64609e;
        cursor: pointer;
      }
    }
  }
}

.hbl-owo {
  text-align: left;
  .expressionbox {
    display: flex;
    align-items: center;
    justify-content: flex-start;
  }
}

.comm {
  padding: 20px;
}

.su {
  margin-top: 2px;
  width: 5px;
  height: 23px;
  background: #3cb371;

  /*#1E90FF*/
}

.com-rep {
  display: inline-block;
  vertical-align: top;
}

.com-title {
  font-size: 20px;
  margin-left: 5px;
}

.com-span {
  font-size: 16px;
}

.hbl-fa {
  text-align: left;
}

.hbl-comm {
  padding: 40px;
}

.reply {
  border-top: solid 1px #d9d9d9;
}

.content {
  margin-top: 20px;
  margin-bottom: 20px;
}

.comment-f {
  display: inline-block;
  vertical-align: top;
}

.nickname {
  font-size: 14px;
}

.author {
  display: inline-block;
}

.icon {
  background: #dff0d8;
  color: #3c763d;
  border-radius: 5px;
  padding: 3px 6px;
  font-size: 12px;
  font-weight: 400px;
}

.date {
  font-size: 12px;
  margin-top: 5px;
  color: grey;
}

.reply-content {
  word-wrap: break-word;
  width: 90%;
  font-size: 15px;
  line-height: 25px;
  margin-left: 56px;
}

.reply-content-test {
  word-wrap: break-word;
  width: 95%;
  font-size: 15px;
  line-height: 25px;
  margin-left: 56px;
}
.reply-fa {
  display: flex;
  justify-content: flex-end;
}

.reply-font {
  margin-bottom: 5px;
  color: grey;
  cursor: pointer;
  &-operation {
    display: flex;
    align-items: center;
  }
}

.children {
  padding-left: 40px;
}

.cc {
  display: inline-block;
}

.cc-to a {
  text-decoration: none;
  color: #409eff;
}

.icon-reply {
  display: inline-block;
  vertical-align: top;
}
// 评论删除
.icon-delete {
  margin: 0 15px;
}

.icon-hf {
  margin-top: 2px;
}

.hbl-child {
  padding: 20px;
}
</style>
