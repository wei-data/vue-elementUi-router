<template>
  <div class="article" ref="modeRef" style="display:none;">
    <h2>新建文章</h2>
    <div class="radio">
      <el-radio v-model="radio" label="1">备选项</el-radio>
      <el-radio v-model="radio" label="2">备选项</el-radio>
    </div>
    <div class="fwb">
      <div id="toolbar"></div>
      <div id="editor-container">
        <div id="toolbar-container" class="toolbar"></div>
        <div id="text-container" class="text">
          <img src="@/assets/logo.png" alt="">
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Editor from 'wangeditor'
export default {
  name: 'ModeOrder',
  data () {
    return {
      radio: '1',
      editor: null
    }
  },
  methods: {
    cancel () {
      // 点击影藏这个模态框
      this.$refs.modeRef.style.display = 'none'
    },
    modify () {
      // 点击传给列表的数据包括对应的id,钱,运费
      this.$bus.$emit('money', [this.id, this.money, this.modify1])
      // 隐藏模态框
      this.$refs.modeRef.style.display = 'none'
    },
    createEditor () {
      this.editor = new Editor('#toolbar-container', '.text')
      this.editor.onchange = html => {}
      // this.editor.config.zIndex = 1000
      this.editor.create()
    }
  },
  created () {
    // 接受开关与删除后的数据给其list赋值
    this.$bus.$on('flag5', val => {
      console.log(1111)
      if (val[0]) {
        this.$refs.modeRef.style.display = 'block'
      }
      this.list = val[1]
      this.id = val[1].id
    })
  },
  mounted () {
    this.createEditor()
  }
}
</script>

<style scoped  lang="less">
.article {
  position: fixed;
  top: 100px;
  margin-left: -475px;
  left: 50%;
  width: 950px;
  background: white;
  z-index: 8;
  .fwb {
    width: 90%;
    margin: 0 auto;
  }
  #editor-container{
    margin-top: 0;
  }
  h2 {
    padding: 8px 0;
    font-size: 18px;
    color: white;
    font-weight: 500;
    background: #409eff;
  }
  .radio {
    height: 70px;
    display: flex;
    align-items: center;
    justify-content: space-around;
  }
}
#toolbar {
  position: fixed;
  top: 10px;
  left: 0;
  width: 100%;
  height: 50px;
  z-index: 1001;
  background-color: #f5f5f5;
}

#editor-container {
  margin-top: 100px;
  padding: 20px;
}
.text{
  height: 300px;
}
</style>
