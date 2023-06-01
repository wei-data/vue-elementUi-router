<template>
  <div class="name">
<!--    内容 ——> 栏目名称  -->
    <el-row>
      <el-col :span="4">
        <p>栏目名称</p>
      </el-col>
      <el-col :span="9">
        <el-input
          placeholder="请输入内容"
          v-model="input"
          :disabled="true">
        </el-input>
      </el-col>
      <el-col :span="7">
        <el-select v-model="value" placeholder="请选择">
          <el-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value">
          </el-option>
        </el-select>
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="16" :offset="1">内容列表</el-col>
      <el-col :span="3"><el-button type="primary">添加</el-button></el-col>
      <el-col :span="3"><el-button>批量移除</el-button></el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  name: 'ColumnName',
  data () {
    return {
      input: '',
      options: [],
      value: ''
    }
  }
}
</script>

<style scoped>
p{
  text-align: center;
}
</style>
