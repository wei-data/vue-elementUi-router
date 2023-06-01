<template>
<div class="content">
  <el-tabs :tab-position="tabPosition" style="height: 828px">
    <el-tab-pane label="银保业务员版文库页">
      <el-table
      :data="tableData"
      style="width: 100%">
      <el-table-column
        prop="date"
        label="页面名称"
        width="180">
      </el-table-column>
      <el-table-column
        prop="name"
        label="页面id"
        width="180">
      </el-table-column>
      <el-table-column
        prop="address"
        label="页面模板id">
      </el-table-column>
        <el-table-column label="操作">
          <template slot-scope="scope">
            <el-button
              type="primary"
              size="mini"
              @click="handleEdit(scope.$index, scope.row)">
              却换模板
            </el-button>
          </template>
        </el-table-column>
    </el-table>
      <h2>页面组件列表</h2>
      <Main></Main>
    </el-tab-pane>
    <el-tab-pane label="银保业务员版图库页">
      <el-table
        :data="tableData"
        style="width: 100%">
        <el-table-column
          prop="date"
          label="页面名称"
          width="180">
        </el-table-column>
        <el-table-column
          prop="name"
          label="页面id"
          width="180">
        </el-table-column>
        <el-table-column
          prop="address"
          label="页面模板id">
        </el-table-column>
        <el-table-column label="操作">
          <template slot-scope="scope">
            <el-button
              type="primary"
              size="mini"
              @click="handleEdit(scope.$index, scope.row)">
              却换模板
            </el-button>
          </template>
        </el-table-column>
      </el-table>
      <h2>页面组件列表</h2>
      <Main></Main>
    </el-tab-pane>
    <el-tab-pane label="银保业务员版首页">
      <el-table
        :data="tableData"
        style="width: 100%">
        <el-table-column
          prop="date"
          label="页面名称"
          width="180">
        </el-table-column>
        <el-table-column
          prop="name"
          label="页面id"
          width="180">
        </el-table-column>
        <el-table-column
          prop="address"
          label="页面模板id">
        </el-table-column>
        <el-table-column label="操作">
          <template slot-scope="scope">
            <el-button
              type="primary"
              size="mini"
              @click="handleEdit(scope.$index, scope.row)">
              却换模板
            </el-button>
          </template>
        </el-table-column>
      </el-table>
      <h2>页面组件列表</h2>
      <Main></Main>
    </el-tab-pane>
    <el-tab-pane label="银保业银行版文库页">
      <el-table
        :data="tableData"
        style="width: 100%">
        <el-table-column
          prop="date"
          label="页面名称"
          width="180">
        </el-table-column>
        <el-table-column
          prop="name"
          label="页面id"
          width="180">
        </el-table-column>
        <el-table-column
          prop="address"
          label="页面模板id">
        </el-table-column>
        <el-table-column label="操作">
          <template slot-scope="scope">
            <el-button
              type="primary"
              size="mini"
              @click="handleEdit(scope.$index, scope.row)">
              却换模板
            </el-button>
          </template>
        </el-table-column>
      </el-table>
      <h2>页面组件列表</h2>
      <Main></Main>
    </el-tab-pane>
    <el-tab-pane label="银保银行版图库页">
      <el-table
        :data="tableData"
        style="width: 100%">
        <el-table-column
          prop="date"
          label="页面名称"
          width="180">
        </el-table-column>
        <el-table-column
          prop="name"
          label="页面id"
          width="180">
        </el-table-column>
        <el-table-column
          prop="address"
          label="页面模板id">
        </el-table-column>
        <el-table-column label="操作">
          <template slot-scope="scope">
            <el-button
              type="primary"
              size="mini"
              @click="handleEdit(scope.$index, scope.row)">
              却换模板
            </el-button>
          </template>
        </el-table-column>
      </el-table>
      <h2>页面组件列表</h2>
      <Main></Main>
    </el-tab-pane>
    <el-tab-pane label="银保银行版首页">
      <el-table
        :data="tableData"
        style="width: 100%">
        <el-table-column
          prop="date"
          label="页面名称"
          width="180">
        </el-table-column>
        <el-table-column
          prop="name"
          label="页面id"
          width="180">
        </el-table-column>
        <el-table-column
          prop="address"
          label="页面模板id">
        </el-table-column>
        <el-table-column label="操作">
          <template slot-scope="scope">
            <el-button
              type="primary"
              size="mini"
              @click="handleEdit(scope.$index, scope.row)">
              却换模板
            </el-button>
          </template>
        </el-table-column>
      </el-table>
      <h2>页面组件列表</h2>
      <Main></Main>
    </el-tab-pane>
  </el-tabs>
</div>
</template>

<script>
import Main from '@/components/Library/Main.vue'

export default {
  name: 'LibraryPage',
  components: {
    Main
  },
  data () {
    return {
      flag: false,
      tabPosition: 'left',
      tableData: [{
        date: '银保业务员版文库页',
        name: '5',
        address: '2'
      }]
    }
  },
  methods: {
    handleEdit (val, row) {
      console.log(val, row)
    }
  }
}
</script>

<style scoped>
.el-tabs {
  margin: 20px;
  padding: 20px;
  box-sizing: border-box;
  background: white;
}
.content{
  background: #eeeeee;
}
/deep/.el-tabs--left .el-tabs__header.is-left {
  padding: 20px 0;
  box-sizing: border-box;
  width: 200px;
}
.el-button{
  padding: 5px 15px;
}
h2 {
  font-size: 18px;
  color: black;
  text-align: left;
  padding: 50px 0 10px;
}
</style>
