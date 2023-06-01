<template>
  <el-pagination
    @size-change="handleSizeChange"
    @current-change="handleCurrentChange"
    :current-page="currentPage"
    background
    :page-sizes="[10, 20, 30, 40]"
    :page-size="pageSize"
    layout="total, sizes, prev, pager, next, jumper"
    :total="40">
  </el-pagination>
</template>

<script>
export default {
  name: 'StatementPage',
  methods: {
    handleSizeChange (val) {
      console.log(`每页 ${val} 条`)
    },
    handleCurrentChange (val) {
      console.log(`当前页: ${val}`)
    }
  },
  data () {
    return {
      currentPage: 1,
      pageSize: 2,
      currPage: 1,
      tableData: []
    }
  }
}
</script>

<style scoped>

</style>
