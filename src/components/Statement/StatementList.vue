<template>
  <el-table
    :data="tableData.slice((currentPage - 1) * pageSize, currentPage*pageSize)"
    style="width: 100%">
    <el-table-column
      prop="date"
      label="序号"
      width="100">
    </el-table-column>
    <el-table-column
      prop="name"
      label="文章标题"
      width="500">
    </el-table-column>
    <el-table-column
      prop="address"
      label="文章导入日期">
    </el-table-column>
    <el-table-column
      prop="name"
      label="转发量"
      width="280">
    </el-table-column>
    <el-table-column
      prop="address"
      label="阅读量">
    </el-table-column>
  </el-table>
</template>

<script>
export default {
  name: 'StatementList',
  data () {
    return {
      pageSize: 5,
      currPage: 1,
      currentPage: 1,
      tableData: [{
        date: '2016-05-02',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
      }, {
        date: '2016-05-04',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1517 弄'
      }, {
        date: '2016-05-01',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1519 弄'
      }, {
        date: '2016-05-03',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1516 弄'
      }]
    }
  }
}
</script>

<style scoped>
/deep/th{
  background: #eef1f6!important;
}
.el-table{
  margin: 50px 0;
}
</style>
