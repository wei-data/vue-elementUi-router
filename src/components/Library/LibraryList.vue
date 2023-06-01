<template>
  <div class="box">
<!--  栏目  ——>  栏目列表-->
    <el-table
      :data="tableData"
      style="width: 100%;margin-bottom: 20px;"
      row-key="id"
      border
      :tree-props="{children: 'children', hasChildren: 'hasChildren'}">
      <el-table-column
        prop="value"
        label="栏目名称"
        width="150">
      </el-table-column>
      <el-table-column
        label="图标"
        width="20">
      </el-table-column>
      <el-table-column
        prop="id"
        label="栏目id">
      </el-table-column>
      <el-table-column
        label="栏目标签">
      </el-table-column>
      <el-table-column
        prop="id"
        label="排序">
      </el-table-column>
      <el-table-column
        prop="state"
        label="可见状态">
      </el-table-column>
      <el-table-column
        label="上级栏目">
      </el-table-column>
      <el-table-column
        prop="correlation"
        label="关联内容方式">
      </el-table-column>
      <el-table-column
        prop="updater"
        label="更新人">
      </el-table-column>
      <el-table-column
        prop="date"
        label="更新时间">
      </el-table-column>
      <el-table-column
        prop="date1"
        label="更新时间">
      </el-table-column>
      <el-table-column
        label="操作">
        <template slot-scope="scope">
          <el-button
            type="text"
            size="small"
            @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
          <el-button
            size="small"
            type="text"
            @click="handleDelete(scope.$index, scope.row)">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
  name: 'LibraryList',
  data () {
    return {
      tableData: [],
      x: 1
    }
  },
  methods: {
    async request () {
      const { data: { data: list } } = await this.$http.get('JSON/LibraryPage.json')
      console.log(list)
      this.tableData = list
    },
    handleEdit (index, row) {
      console.log(index, row)
    },
    handleDelete (index, row) {
      console.log(index, row)
      this.tableData = this.tableData.filter(item => item.id !== row.id)
    }
  },
  mounted () {
    this.request()
    this.$bus.$on('queryList', val => {
      console.log(val)
      this.tableData = val
    })
  }
}
</script>

<style scoped>
.box{
  overflow-y:auto;
  height:380px;
  background: white;
  scrollbar-width: none;
}
.box::-webkit-scrollbar {
  display: none; /* Chrome Safari */
}

/deep/.el-table--border .el-table__cell, .el-table__body-wrapper .el-table--border.is-scrolling-left~.el-table__fixed{
  border-right:0;
}
/deep/.el-table--border{
  margin-bottom: 0!important;
}

</style>
