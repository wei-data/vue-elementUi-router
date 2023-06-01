<template>
<!-- 轮播图 -->
  <div class="CarouselMap">
    <div class="title" style="display: flex;justify-content: space-between;">
      <h3>轮播图</h3>
      <el-button type="primary" icon="el-icon-plus">新建</el-button>
    </div>
    <el-table :data="tableData.slice((currPage - 1) * pageSize, currPage * pageSize)" style="width: 100%">
      <el-table-column label="组件名称" prop="name">
        <template slot-scope="scope">
          <el-radio v-model="radio" :label="tableData[scope.$index].name">{{ tableData[scope.$index].name
          }}</el-radio>
        </template>
      </el-table-column>
      <el-table-column label="组件id" prop="id"></el-table-column>
      <el-table-column label="组件类型" prop="types"></el-table-column>
      <el-table-column label="组件介绍" prop="className">
      </el-table-column>
    </el-table>
    <Page :MyData="tableData"></Page>
  </div>
</template>

<script>
import Page from './Page.vue'
export default {
  name: 'CarouselMap',
  components: {
    Page
  },
  data () {
    return {
      tableData: [],
      currPage: 1,
      pageSize: 10
    }
  }
}
</script>

<style lang="less" scoped>
.title {
  background: white;
  padding: 50px 0 10px;
}
.CarouselMap{
  background: white;
}
/deep/.el-tabs__content {
  padding: 0 20px!important;
  box-sizing: border-box;
}
</style>
