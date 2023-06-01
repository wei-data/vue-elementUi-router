<template>
<div>
  <el-button class="button-new-tag" size="small" >新建 +</el-button>
  <el-tag
  :key="tag"
  v-for="tag in dynamicTags"
  closable
  :disable-transitions="false"
  @close="handleClose(tag)"
  @click="showInput">
  {{tag}}
</el-tag>

</div>
</template>

<script>
export default {
  name: 'TagA',
  data () {
    return {
      dynamicTags: ['批量收录', '批量删除收录', '批量添加收录', '批量移动标签', '批量删除', '...'],
      inputVisible: false,
      inputValue: '',
      flag: true
    }
  },
  methods: {
    handleClose (tag) {
      this.dynamicTags.splice(this.dynamicTags.indexOf(tag), 1)
    },
    showInput () {
      console.log(1212)
      this.$bus.$emit('flag1', this.flag)
      // this.flag = !this.flag
    },
    open () {
      this.$confirm('此操作将永久删除该文件, 是否继续?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning',
        center: true
      }).then(() => {
        this.$message({
          type: 'success',
          message: '删除成功!'
        })
      }).catch(() => {
        this.$message({
          type: 'info',
          message: '已取消删除'
        })
      })
    }
  }
}
</script>

<style scoped>
div{
  display: flex;
}
.el-tag {
  margin-left: 10px;
  background: transparent;
  border-color: #d7dcea;
  color: black;
}
.el-button,div[data-v-bb7ceecc]{
  margin-right: 10px;
}
.button-new-tag {
  margin-left: 10px;
  height: 32px;
  line-height: 30px;
  padding-top: 0;
  padding-bottom: 0;
  background: #409eff;
  color: white;
}
.input-new-tag {
  width: 90px;
  margin-left: 10px;
  vertical-align: bottom;
}
/deep/.el-tag .el-icon-close{
  display: none;
}
</style>
