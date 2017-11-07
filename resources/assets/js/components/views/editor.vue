<template>
  <div id="app">
    <quill-editor :style="{ height: routerHeight + 'px' }" ref="myTextEditor" v-model="content" :config="editorOption"></quill-editor>
  </div>
</template>

<script>
import { quillEditor } from "vue-quill-editor"; // 导入quillEditor组件
export default {
  data: function() {
    return {
      content: "", // 编辑器的内容
      routerHeight: 400,
      editorOption: {
        // 编辑器的配置
        // something config
      }
    };
  },
  created: function() {
    this.routerHeight = window.innerHeight - 280
  },
  components: {
    quillEditor // 声明组件quillEditor
  }
};
</script>