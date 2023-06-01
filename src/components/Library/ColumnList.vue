<template>
<!--内容  ——>  内容列表-->
  <div>
    <el-table
      :data="tableData"
      style="width: 100%">
      <el-table-column
        prop="date"
        label="日期"
        width="180">
      </el-table-column>
      <el-table-column
        prop="name"
        label="姓名"
        width="180">
      </el-table-column>
      <el-table-column
        prop="address"
        label="地址">
      </el-table-column>
    </el-table>
    <el-pagination
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :current-page="currentPage4"
      :page-sizes="[100, 200, 300, 400]"
      :page-size="100"
      layout="total, sizes, jumper"
      :total="400">
    </el-pagination>
  </div>

</template>

<script>
export default {
  name: 'ColumnList',
  data () {
    return {
      tableData: [],
      currentPage4: 4
    }
  },
  mounted () {
    this.request()
  },
  methods: {
    async request () {
      const list = await this.$http.get('JSON/tsconfig.json')
      console.log(list)
    },
    handleSizeChange (val) {
      console.log(`每页 ${val} 条`)
    },
    handleCurrentChange (val) {
      console.log(`当前页: ${val}`)
    }
  }
}
</script>

<style scoped>

</style>
