<template>
  <div class="box">
<!--    表格列表-->
    <el-table
      tooltip-effect="dark"
      ref="multipleTable"
      :data="tableData.slice((currPage - 1) * pageSize, currPage*pageSize)"
      max-height="380"
      widht="100%"
      @selection-change="handleSelectionChange">
      <el-table-column
        type="selection"
        width="100">
      </el-table-column>
      <el-table-column
        label="名称"
        prop="name"
        width="300">
      </el-table-column>
      <el-table-column prop="url" label="封面图" width="100" show-overflow-tooltip>
        <template slot-scope="scope"><img :src="tableData[ scope.$index ].url"  style="width: 50px;height:50px;" alt=""/></template>
      </el-table-column>
      <el-table-column
        prop="InclusionPage"
        label="收录页面"
        width="100"
        show-overflow-tooltip>
      </el-table-column>
      <el-table-column
        prop="relevancyPro"
        label="关联产品"
        width="100"
        show-overflow-tooltip>
      </el-table-column>
      <el-table-column
        prop="FirstColumn"
        label="一级栏目"
        width="100"
        show-overflow-tooltip>
      </el-table-column>
      <el-table-column
        prop="twoColumn"
        label="二级栏目"
        width="100"
        show-overflow-tooltip>
      </el-table-column>
      <el-table-column
        prop="tag"
        label="标签"
        width="100"
        show-overflow-tooltip>
      </el-table-column>
      <el-table-column
        prop="page-view"
        label="浏览量"
        width="100"
        show-overflow-tooltip>
      </el-table-column>
      <el-table-column
        label="操作"
        fixed="right"
        width="200">
        <template slot-scope="scope">
          <el-button
            size="mini"
            @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
          <el-button
            size="mini"
            @click="handleDelete(scope.$index, scope.row)">下架</el-button>
          <el-button
            size="mini"
            @click="handleDelete(scope.$index, scope.row)">删除</el-button>
          <el-button
            size="mini"
            @click="handleManagement(scope.$index, scope.row)">标签管理</el-button>
        </template>
      </el-table-column>
    </el-table>
<!--    分页器-->
    <el-pagination
        background
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page="currPage"
        :page-size="pageSize"
        layout="prev, pager, next, jumper"
        :total="tableData.length">
    </el-pagination>
    <Mode></Mode>
    <LabelManagement></LabelManagement>
  </div>
</template>

<script>
import Mode from '@/components/Home/Mode.vue'
import LabelManagement from '@/components/Home/LabelManagement.vue'
export default {
  name: 'ListOrder',
  components: {
    Mode,
    LabelManagement
  },
  data () {
    return {
      tableData: [], // 数据原
      multipleSelection: [],
      pageSize: 10, // 每一页的条数
      currPage: 1, // 默认从几页开始
      // 制作一个开关
      flag: true,
      num: 0
    }
  },
  methods: {
    // 编辑列表
    handleEdit (index, row) {
      console.log(index, row)
      // 点击时把需要的数据传给对应的模态框组件，与一个开关一起传过去
      this.$bus.$emit('flag5', [true, row])
    },
    // 删除/下架按钮
    handleDelete (index, row) {
      // 获取索引与对象
      console.log(index, row)
      // 过滤掉点击的数据，给新的数组赋给data数据
      const arr = this.tableData.filter(item => item.id !== row.id)
      this.tableData = arr
    },
    toggleSelection (rows) {
      if (rows) {
        rows.forEach(row => {
          this.$refs.multipleTable.toggleRowSelection(row)
        })
      } else {
        this.$refs.multipleTable.clearSelection()
      }
    },
    handleSelectionChange (val) {
      // console.log(val)
      this.num = val.length
      this.multipleSelection = val
      this.$bus.$emit('num', this.num)
    },
    handleSizeChange (val) {
      console.log(`每页 ${val} 条`)
      this.pageSize = val
    },
    handleCurrentChange (val) {
      console.log(`当前页: ${val}`)
      this.currPage = val
    },
    handleManagement (index, row) {
      this.$bus.$emit('flagOne', [true, row])
    }
  },
  created () {
    this.$http.get('JSON/tsconfig.json').then(response => {
      // 发起一个json数据的请求到本地的数据
      this.tableData = response.data.data
    })
    this.$bus.$on('search', val => {
      this.tableData = val
    })
  },
  mounted () {
    this.$bus.$on('money', val => {
      // 接收到编辑成功的数据给其对应的值修改到最新数据
      this.tableData.some(item => {
        if (item.id === val[0]) {
          item.price = val[1]
        }
        return true
      })
    })
  }
}
</script>

<style scoped>
.box {
  /*height: 500px;*/
  overflow: hidden;
  padding: 20px 0 20px 5px;
  box-sizing: border-box;
}
/*::v-deep .el-table__body,*/
/*::v-deep .el-table__header{*/
/*  width: 1200px !important;*/
/*}*/
/deep/.el-table__footer-wrapper, .el-table__header-wrapper{
  height: 28px;
  padding: 0;

}
/deep/.el-table__row {
  height: 96px;
  padding-left: 16px;
}
.el-button {
  width: 20px;
  background: none;
  padding: 0;
  border: 0;
  color: #cccccc;

}
/deep/.el-table thead {
  color: black;

}
/deep/[data-v-27eaf24e] .el-tabs--left, .el-tabs--right[data-v-27eaf24e]{
  width: 100%;
}
/deep/.el-table thead th {
  background: #d1dff0;
  height: 28px;
  padding: 0;
  font-size: 12px;
  font-weight: 500;
}
.el-pagination{
  margin-top: 10px;
}
.el-table{
  /*height: 500px;*/
}
</style>
