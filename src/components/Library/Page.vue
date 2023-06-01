<template>
  <el-pagination style="margin: 10px 0;" @size-change="handleSizeChange" @current-change="handleCurrentChange"
    :current-page.sync="currPage" :page-sizes="[10, 20, 30, 40]" :page-size="currPage"
    layout="total,sizes,prev, pager, next, jumper" :total="tableData.length">
  </el-pagination>
</template>

<script>
export default {
  name: 'MyPage',
  props: ['MyData'],
  data () {
    return {
      currentPage: 1,
      pageSize: 1,
      currPage: 2,
      tableData: []
    }
  },
  methods: {
    handleSizeChange (val) {
      console.log(val)
      this.pageSize = val
    },
    handleCurrentChange (val) {
      console.log(val)
      this.currPage = val
    }
  }
}
</script>

<style>
.el-pagination{
  padding-top: 30px;
}
</style>
