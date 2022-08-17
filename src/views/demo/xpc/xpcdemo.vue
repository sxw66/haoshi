<template>
  <rt-view>
    <rt-content>
      <!-- <rt-content-tabs v-model="tabIndex" class="cus-header" @tab-click="tabClick">
        <rt-tab-pane>
          <rt-badge slot="label" is-dot>默认带点</rt-badge>
        </rt-tab-pane>
        <rt-tab-pane>
          <rt-badge slot="label" is-dot type="success">成功带点</rt-badge>
        </rt-tab-pane>
        <rt-tab-pane>
          <rt-badge slot="label" value="9">默认数字</rt-badge>
        </rt-tab-pane>
        <rt-tab-pane>
          <rt-badge slot="label" value="99" type="success">成功数字</rt-badge>
        </rt-tab-pane>
      </rt-content-tabs>
      <rt-content-tabs v-model="tabIndex" class="cus-header">
        <rt-tab-pane>
          <rt-badge slot="label" is-dot>默认带点</rt-badge>
        </rt-tab-pane>
        <rt-tab-pane>
          <rt-badge slot="label" is-dot type="success">成功带点七个字</rt-badge>
        </rt-tab-pane>
        <rt-tab-pane>
          <rt-badge slot="label" value="9">默认数字很多个字</rt-badge>
        </rt-tab-pane>
        <rt-tab-pane>
          <rt-badge slot="label" value="99" type="success">
            成功数字不止4个字
          </rt-badge>
        </rt-tab-pane>
        <rt-tab-pane>
          <rt-badge slot="label" value="99" type="success">
            成功数字不止4个字
          </rt-badge>
        </rt-tab-pane>
        <rt-tab-pane>
          <rt-badge slot="label" value="99" type="success">
            成功数字不止4个字
          </rt-badge>
        </rt-tab-pane>
        <rt-tab-pane>
          <rt-badge slot="label" value="99" type="success">
            成功数字不止4个字
          </rt-badge>
        </rt-tab-pane>
        <rt-tab-pane>
          <rt-badge slot="label" value="99" type="success">
            成功数字不止4个字
          </rt-badge>
        </rt-tab-pane>
        <rt-tab-pane>
          <rt-badge slot="label" value="99" type="success">
            成功数字不止4个字
          </rt-badge>
        </rt-tab-pane>
      </rt-content-tabs> -->

      <div class="wrapper">
        <rt-content-tabs v-model="tabIndex" size="small" tab-pane-padding="0">
          <rt-tab-pane>
            <rt-badge slot="label" is-dot> 默认带点 </rt-badge>
          </rt-tab-pane>
          <rt-tab-pane>
            <rt-badge slot="label" is-dot type="success"> 成功带点 </rt-badge>
          </rt-tab-pane>
          <rt-tab-pane>
            <rt-badge slot="label" value="9"> 默认数字 </rt-badge>
          </rt-tab-pane>
          <rt-tab-pane>
            <rt-badge slot="label" value="99" type="success">
              成功数字
            </rt-badge>
          </rt-tab-pane>
        </rt-content-tabs>
      </div>
      <div class="wrapper" style="width: 75%">
        <rt-content-tabs v-model="tabIndex" tab-pane-padding="0">
          <rt-tab-pane padding="24px">
            <rt-badge slot="label" is-dot> 默认带点 </rt-badge>
          </rt-tab-pane>
          <rt-tab-pane>
            <rt-badge slot="label" is-dot type="success"> 成功带点 </rt-badge>
          </rt-tab-pane>
          <rt-tab-pane>
            <rt-badge slot="label" value="9"> 默认数字 </rt-badge>
          </rt-tab-pane>
          <rt-tab-pane>
            <rt-badge slot="label" value="99" type="success">
              成功数字
            </rt-badge>
          </rt-tab-pane>
        </rt-content-tabs>
      </div>

      <!-- 基础用法 -->
      <rt-card>
        <p class="title">基础用法</p>

        <rt-tabs v-model="activeName" tab-pane-padding="30px 0 0">
          <rt-tab-pane label="标签1"> 标签一 </rt-tab-pane>
          <rt-tab-pane label="标签2"> 标签二 </rt-tab-pane>
          <rt-tab-pane label="标签3"> 标签三 </rt-tab-pane>
          <rt-tab-pane label="标签4"> 标签四 </rt-tab-pane>
        </rt-tabs>
      </rt-card>

      <!-- 隐藏边框 -->
      <rt-card>
        <p class="title">隐藏边框</p>

        <rt-tabs v-model="activeName" :border="false">
          <rt-tab-pane label="标签1"> 标签一 </rt-tab-pane>
          <rt-tab-pane label="标签2"> 标签二 </rt-tab-pane>
          <rt-tab-pane label="标签3"> 标签三 </rt-tab-pane>
          <rt-tab-pane label="标签4"> 标签四 </rt-tab-pane>
        </rt-tabs>
      </rt-card>

      <!-- 带徽章 -->
      <rt-card>
        <p class="title">带徽章</p>

        <rt-tabs v-model="activeName">
          <rt-tab-pane>
            <rt-badge slot="label" is-dot> 默认带点 </rt-badge>
            默认带点
          </rt-tab-pane>
          <rt-tab-pane>
            <rt-badge slot="label" is-dot type="success">
              成功带点七个字
            </rt-badge>
            成功带点七个字
          </rt-tab-pane>
          <rt-tab-pane>
            <rt-badge slot="label" value="9"> 默认数字很多个字 </rt-badge>
            默认数字很多个字
          </rt-tab-pane>
        </rt-tabs>
      </rt-card>

      <!-- 位置 -->
      <rt-card>
        <p class="title">位置</p>
        <el-radio-group v-model="tabPosition" style="margin-bottom: 30px">
          <el-radio-button label="top"> top </el-radio-button>
          <el-radio-button label="right"> right </el-radio-button>
          <el-radio-button label="bottom"> bottom </el-radio-button>
          <el-radio-button label="left"> left </el-radio-button>
        </el-radio-group>

        <rt-tabs v-model="activeName" :tab-position="tabPosition">
          <rt-tab-pane label="标签1"> 标签一 </rt-tab-pane>
          <rt-tab-pane label="标签2"> 标签二 </rt-tab-pane>
          <rt-tab-pane label="标签3"> 标签三 </rt-tab-pane>
          <rt-tab-pane label="标签4"> 标签四 </rt-tab-pane>
        </rt-tabs>
      </rt-card>

      <!-- 对齐方式 -->
      <rt-card>
        <p class="title">对齐方式</p>
        <el-radio-group v-model="tabAlign" style="margin-bottom: 30px">
          <el-radio-button label="left"> left </el-radio-button>
          <el-radio-button label="right"> right </el-radio-button>
          <el-radio-button label="center"> center </el-radio-button>
        </el-radio-group>

        <rt-tabs v-model="activeName" :tab-align="tabAlign">
          <rt-tab-pane label="标签1"> 标签一 </rt-tab-pane>
          <rt-tab-pane label="标签2"> 标签二 </rt-tab-pane>
          <rt-tab-pane label="标签3"> 标签三 </rt-tab-pane>
          <rt-tab-pane label="标签4"> 标签四 </rt-tab-pane>
        </rt-tabs>
      </rt-card>

      <!-- 均匀分布 -->
      <!-- <rt-card>
        <p class="title">均匀分布</p>

        <rt-tabs v-model="activeName" uniform>
          <rt-tab-pane label="标签1">标签一</rt-tab-pane>
          <rt-tab-pane label="标签2">标签二</rt-tab-pane>
          <rt-tab-pane label="标签3">标签三</rt-tab-pane>
          <rt-tab-pane label="标签4">标签四</rt-tab-pane>
        </rt-tabs>
      </rt-card> -->

      <!-- 支持图标 -->
      <rt-card>
        <p class="title">支持图标</p>

        <rt-tabs v-model="activeName">
          <rt-tab-pane label="标签1"> 标签一 </rt-tab-pane>
          <rt-tab-pane>
            <span slot="label" class="tab-label">
              <rt-icon name="rt-portal-language" />
              <span>我是一个长标签2</span>
            </span>
            我是一个长标签二
          </rt-tab-pane>
          <rt-tab-pane label="标签3"> 标签三 </rt-tab-pane>
          <rt-tab-pane label="标签4"> 标签四 </rt-tab-pane>
        </rt-tabs>
      </rt-card>

      <!-- 默认选项卡不同类型 -->
      <rt-card>
        <p class="title">选项卡样式</p>
        <el-radio-group v-model="type" style="margin-bottom: 30px">
          <el-radio-button label="card"> card </el-radio-button>
          <el-radio-button label="spacing-card"> spacing-card </el-radio-button>
        </el-radio-group>
        <rt-tabs v-model="activeName" :border="false" :type="type">
          <rt-tab-pane label="标签1"></rt-tab-pane>
          <rt-tab-pane label="标签2"></rt-tab-pane>
          <rt-tab-pane label="我是一个长标签"></rt-tab-pane>
          <rt-tab-pane label="标签3"></rt-tab-pane>
        </rt-tabs>
        <rt-tabs v-model="activeName" :type="type" :spacing="4" :padding="32">
          <rt-tab-pane label="标签1"></rt-tab-pane>
          <rt-tab-pane label="标签2"></rt-tab-pane>
          <rt-tab-pane label="padding自定义"></rt-tab-pane>
          <rt-tab-pane label="标签3"></rt-tab-pane>
        </rt-tabs>
        <!-- 背景、边框、高亮配置
          tab-bgcolor="primary"
          tab-bordercolor="primary
          active-bgcolor="secondary"
          active-bordercolor="light""-->
        <rt-tabs
          v-model="activeName"
          :type="type"
          :spacing="4"
          :padding="32"
          tab-bordercolor="transparent"
          tab-bgcolor="transparent"
          active-bordercolor="light"
        >
          <rt-tab-pane label="标签1">
            支持配置边框色、背景色、高亮色一
          </rt-tab-pane>
          <rt-tab-pane label="标签2">
            支持配置边框色、背景色、高亮色二
          </rt-tab-pane>
          <rt-tab-pane label="未选和选中标签的边框支持单独配置隐藏或显示">
            支持配置边框色、背景色、高亮色三
          </rt-tab-pane>
          <rt-tab-pane label="标签3">
            支持配置边框色、背景色、高亮色四
          </rt-tab-pane>
        </rt-tabs>
      </rt-card>
      <!-- 标签页支持下拉选项 -->
      <rt-card>
        <p class="title">标签页支持下拉选项</p>
        <rt-tabs v-model="activeName">
          <rt-tab-pane label="标签2"> 标签二 </rt-tab-pane>
          <rt-tab-pane label="标签3"> 标签三 </rt-tab-pane>
          <rt-tab-pane label="标签4"> 标签四 </rt-tab-pane>
          <rt-tab-pane>
            <rt-list-dropdown
              slot="label"
              :menu-list="menuList"
              selected-title="相关信息"
            />
          </rt-tab-pane>
        </rt-tabs>
      </rt-card>

      <!-- 动态增减标签页 -->
      <rt-card>
        <p class="title">动态增减标签页</p>
        <rt-tabs v-model="activeName" editable @edit="handleTabsEdit">
          <rt-tab-pane
            v-for="item in editableTabs"
            :key="item.name"
            :label="item.title"
            :name="item.name"
          >
            {{ item.content }}
          </rt-tab-pane>
        </rt-tabs>
        <p class="title">spacing-card</p>
        <rt-tabs
          v-model="activeName"
          type="spacing-card"
          editable
          @edit="handleTabsEdit"
        >
          <rt-tab-pane
            v-for="item in editableTabs"
            :key="item.name"
            :label="item.title"
            :name="item.name"
          >
            {{ item.content }}
          </rt-tab-pane>
        </rt-tabs>

        <p class="title">card</p>
        <rt-tabs
          v-model="activeName"
          type="card"
          editable
          @edit="handleTabsEdit"
        >
          <rt-tab-pane
            v-for="item in editableTabs"
            :key="item.name"
            :label="item.title"
            :name="item.name"
          >
            {{ item.content }}
          </rt-tab-pane>
        </rt-tabs>
        <p class="title">button-card</p>
        <rt-tabs
          v-model="activeName"
          type="button-card"
          editable
          active-bgcolor="primary-light"
          :border="false"
          @edit="handleTabsEdit"
        >
          <rt-tab-pane
            v-for="item in editableTabs"
            :key="item.name"
            :label="item.title"
            :name="item.name"
          >
            {{ item.content }}
          </rt-tab-pane>
        </rt-tabs>
      </rt-card>
      <rt-card>
        <p class="title">
          支持单独设置某个选项卡不可关闭
          <rt-button
            style="margin-left: 10px"
            type="primary"
            @click="addTab(editableTabsValue)"
          >
            add tab
          </rt-button>
        </p>
        <rt-tabs v-model="editableTabsValue" @tab-remove="removeTab">
          <rt-tab-pane
            v-for="item in editableTabs"
            :key="item.name"
            :label="item.title"
            :name="item.name"
            :closable="item.closable"
          >
            {{ item.content }}
          </rt-tab-pane>
        </rt-tabs>
      </rt-card>

      <!-- 不同大小 -->
      <rt-card>
        <p class="title">不同大小</p>
        <el-radio-group v-model="size" style="margin-bottom: 30px">
          <el-radio-button label="medium"> medium </el-radio-button>
          <el-radio-button label="small"> small </el-radio-button>
          <el-radio-button label="large"> large </el-radio-button>
        </el-radio-group>

        <rt-tabs v-model="activeName" :size="size">
          <rt-tab-pane label="标签1"> 标签一 </rt-tab-pane>
          <rt-tab-pane label="标签2"> 标签二 </rt-tab-pane>
          <rt-tab-pane label="标签3"> 标签三 </rt-tab-pane>
          <rt-tab-pane label="标签4"> 标签四 </rt-tab-pane>
        </rt-tabs>
      </rt-card>

      <!-- 附加内容 -->
      <rt-card>
        <p class="title">附加内容</p>

        <el-radio-group v-model="extraPosition" style="margin-bottom: 30px">
          <el-radio-button label="left"> left </el-radio-button>
          <el-radio-button label="right"> right </el-radio-button>
        </el-radio-group>

        <rt-tabs v-model="activeName" :extra-position="extraPosition">
          <div slot="extraContent">当前站点：虎丘区竹园服务中心</div>
          <rt-tab-pane label="标签1"> 标签一 </rt-tab-pane>
          <rt-tab-pane label="标签2"> 标签二 </rt-tab-pane>
          <rt-tab-pane label="标签3"> 标签三 </rt-tab-pane>
          <rt-tab-pane label="标签4"> 标签四 </rt-tab-pane>
        </rt-tabs>
      </rt-card>
      <!-- ======== 按钮标签页面-======== -->
      <rt-card>
        <p class="title">按钮类型基础用法</p>
        <rt-tabs
          v-model="activeName"
          type="button-card"
          :spacing="4"
          :padding="32"
          tab-bordercolor="transparent"
          tab-bgcolor="transparent"
          active-bordercolor="light"
          :border="false"
        >
          <rt-tab-pane label="标签1">
            支持按钮类型标签页的边框色、背景色、高亮色一
          </rt-tab-pane>
          <rt-tab-pane label="标签2">
            支持按钮类型标签页的边框色、背景色、高亮色二
          </rt-tab-pane>
          <rt-tab-pane label="未选和选中标签的边框支持单独配置隐藏或显示">
            支持按钮类型标签页的边框色、背景色、高亮色三
          </rt-tab-pane>
          <rt-tab-pane label="标签3">
            支持按钮类型标签页的边框色、背景色、高亮色四
          </rt-tab-pane>
        </rt-tabs>
      </rt-card>
      <rt-card>
        <p class="title">支持配置插槽</p>
        <el-radio-group v-model="extraPosition" style="margin-bottom: 30px">
          <el-radio-button label="left"> left </el-radio-button>
          <el-radio-button label="right"> right </el-radio-button>
        </el-radio-group>
        <rt-tabs
          v-model="activeName"
          :extra-position="extraPosition"
          type="button-card"
          :border="false"
          active-bgcolor="primary-light"
        >
          <div slot="extraContent" style="height: 30px">
            当前站点：虎丘区竹园服务中心
          </div>
          <rt-tab-pane label="标签1"> 标签一 </rt-tab-pane>
          <rt-tab-pane label="标签2"> 标签二 </rt-tab-pane>
          <rt-tab-pane label="标签3"> 标签三 </rt-tab-pane>
          <rt-tab-pane label="标签4"> 标签四 </rt-tab-pane>
        </rt-tabs>
      </rt-card>
      <rt-card>
        <p class="title">支持配置样式</p>
        <rt-tabs
          v-model="activeName"
          type="button-card"
          tab-bgcolor="transparent"
          tab-text-color="n-primary"
          :border="false"
          active-bordercolor="primary"
        >
          <rt-tab-pane label="标签1"> 标签一 </rt-tab-pane>
          <rt-tab-pane label="标签2"> 标签二 </rt-tab-pane>
          <rt-tab-pane label="标签3"> 标签三 </rt-tab-pane>
          <rt-tab-pane label="标签4"> 标签四 </rt-tab-pane>
        </rt-tabs>
        <rt-tabs
          v-model="activeName"
          type="button-card"
          tab-bgcolor="lighter"
          active-bgcolor="primary-light"
          :spacing="12"
          :border="false"
          style="margin-top: 20px"
        >
          <rt-tab-pane label="标签1"> 标签一 </rt-tab-pane>
          <rt-tab-pane label="标签2"> 标签二 </rt-tab-pane>
          <rt-tab-pane label="标签3"> 标签三 </rt-tab-pane>
          <rt-tab-pane label="标签4"> 标签四 </rt-tab-pane>
        </rt-tabs>
        <rt-tabs
          v-model="activeName"
          type="button-card"
          tab-bgcolor="lighter"
          active-bgcolor="primary-light"
          :border="false"
          :border-radius="4"
          :spacing="12"
          style="margin-top: 20px"
        >
          <rt-tab-pane label="标签1"> 标签一 </rt-tab-pane>
          <rt-tab-pane label="标签2"> 标签二 </rt-tab-pane>
          <rt-tab-pane label="标签3"> 标签三 </rt-tab-pane>
          <rt-tab-pane label="标签4"> 标签四 </rt-tab-pane>
        </rt-tabs>
        <rt-tabs
          v-model="activeName"
          type="button-card"
          active-bgcolor="primary"
          tab-button-bg="primary-light"
          tab-text-color="primary"
          :border="false"
          style="margin-top: 20px"
        >
          <rt-tab-pane label="标签1"> 标签一 </rt-tab-pane>
          <rt-tab-pane label="标签2"> 标签二 </rt-tab-pane>
          <rt-tab-pane label="标签3"> 标签三 </rt-tab-pane>
          <rt-tab-pane label="标签4"> 标签四 </rt-tab-pane>
        </rt-tabs>
        <rt-tabs
          v-model="activeName"
          type="button-card"
          tab-button-bg="info-light"
          tab-text-color="primary"
          :border="false"
          style="margin-top: 20px"
        >
          <rt-tab-pane label="标签1"> 标签一 </rt-tab-pane>
          <rt-tab-pane label="标签2"> 标签二 </rt-tab-pane>
          <rt-tab-pane label="标签3"> 标签三 </rt-tab-pane>
          <rt-tab-pane label="标签4"> 标签四 </rt-tab-pane>
        </rt-tabs>
      </rt-card>
    </rt-content>
  </rt-view>
</template>
<script>
export default {
  data() {
    return {
      queryValue: '',
      editForm: {
        type: '',
        weixin: '',
        fax: '',
        website: '',
        email: '',
        tel1: '',
        address: [
          '3ce90205-712f-e911-80c6-000c2997f699',
          '965e1eb2-712f-e911-80c6-000c2997f699',
          '79958234-722f-e911-80c6-000c2997f699',
        ],
        address1: [],
      },
      props: { value: 'id', label: 'name' },
      tabList: [
        {
          label: 'tab1',
          name: '1',
        },
        {
          label: 'tab2',
          name: '2',
        },
        {
          label: 'tab3',
          name: '3',
        },
        {
          label: 'tab4',
          name: '4',
        },
      ],
      tabIndex: '2',
      activeName: '1',
      tabPosition: 'top',
      tabAlign: 'left',
      editableTabsValue: '2',
      editableTabs: [
        {
          title: 'Tab 1',
          name: '1',
          content: 'Tab 1 content',
        },
        {
          title: 'Tab 2',
          name: '2',
          content: 'Tab 2 content',
          closable: true,
        },
      ],
      type: 'card',
      clor: 'red',
      // eslint-disable-next-line vue/no-dupe-keys
      menuList: [
        {
          value: 1,
          name: '选择一',
        },
        {
          value: 2,
          name: '所有服务单',
        },
        {
          value: 3,
          name: '待派工',
        },
        {
          value: 4,
          name: '待审批',
        },
        {
          value: 5,
          name: '待结算的服务单',
        },
        {
          value: 6,
          name: '超期服务单（三天）',
        },
      ],
      size: 'medium',
      extraPosition: 'left',
    }
  },
  methods: {
    handleTabsEdit(targetName, action) {
      if (action === 'add') {
        let newTabName = ++this.tabIndex + ''
        this.editableTabs.push({
          title: 'New Tab',
          name: newTabName,
          content: 'New Tab content',
        })
        this.editableTabsValue = newTabName
      }
      if (action === 'remove') {
        let tabs = this.editableTabs
        let activeName = this.editableTabsValue
        if (activeName === targetName) {
          tabs.forEach((tab, index) => {
            if (tab.name === targetName) {
              let nextTab = tabs[index + 1] || tabs[index - 1]
              if (nextTab) {
                activeName = nextTab.name
              }
            }
          })
        }
        this.editableTabsValue = activeName
        this.editableTabs = tabs.filter((tab) => tab.name !== targetName)
      }
    },
    addTab() {
      let newTabName = ++this.tabIndex + ''
      this.editableTabs.push({
        title: 'New Tab',
        name: newTabName,
        content: 'New Tab content',
      })
      this.editableTabsValue = newTabName
    },
    removeTab(targetName) {
      let tabs = this.editableTabs
      let activeName = this.editableTabsValue
      if (activeName === targetName) {
        tabs.forEach((tab, index) => {
          if (tab.name === targetName) {
            let nextTab = tabs[index + 1] || tabs[index - 1]
            if (nextTab) {
              activeName = nextTab.name
            }
          }
        })
      }
      this.editableTabsValue = activeName
      this.editableTabs = tabs.filter((tab) => tab.name !== targetName)
    },
    tabClick() {
      console.log('tabclick')
    },
  },
}
</script>
<style lang="less" scoped>
.rt-card {
  padding: 16px;
}
.title {
  margin: 16px;
  font-size: 18px;
}
.rt-view-wrapper {
  height: 100%;
}
.wrapper {
  margin: 10px 0;
  background: #fff;
}
.rt-section .section-body {
  padding: 0;
}

.cus-header {
  margin-bottom: 16px;
}

.tab-label {
  display: flex;
  align-items: center;
  .rt-icon {
    margin-right: 4px;
  }
}
</style>
