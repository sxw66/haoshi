<template>
  <div style="border: 1px solid #ccc;">
    <!-- 工具栏 -->
    <Toolbar
      style="border-bottom: 1px solid #ccc"
      :editor="editor"
      :default-config="toolbarConfig"
    />
    <!-- 编辑器 -->
    <Editor
      v-model="html"
      style="height: 500px; overflow-y: hidden;"
      :default-config="editorConfig"
      @onCreated="onCreated"
    />
  </div>
</template>

<script>
import { Editor, Toolbar } from '@wangeditor/editor-for-vue'

export default {
  name: 'MyEditor',
  components: { Editor, Toolbar },
  data () {
    return {
      editor: null,
      html: '<p>hello&nbsp;world</p>',
      toolbarConfig: {},
      editorConfig: {
        placeholder: '请输入内容...'
      }
    }
  },
  mounted () {
    // 模拟 ajax 请求，异步渲染编辑器
    setTimeout(() => {
      this.html = '<p>Ajax 异步设置内容 HTML</p>'
    }, 1500)
  },
  beforeDestroy () {
    const editor = this.editor
    if (editor == null) return
    editor.destroy() // 组件销毁时，及时销毁 editor ，重要！！！
  },
  methods: {
    onCreated (editor) {
      this.editor = Object.seal(editor) // 【注意】一定要用 Object.seal() 否则会报错
    }
  }
}
</script>

<!-- 记得引入 wangEditor css 文件，重要 ！！！ -->
<style src="@wangeditor/editor/dist/css/style.css"></style>