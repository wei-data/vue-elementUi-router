<template>
  <div>
    <h3>新建文章</h3>
    <el-radio v-model="radio" label="1">备选项</el-radio>
    <el-radio v-model="radio" label="2">备选项</el-radio>
  </div>
</template>

<script>
export default {
  name: 'NewArticle',
  data () {
    return {
      radio: '1'
    }
  }
}
</script>

<style scoped>

</style>
