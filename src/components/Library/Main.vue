<template>
  <div class="content">
    <el-table :data="tableData1" style="width: 100%">
      <el-table-column label="组件名称" prop="name">
        <template slot-scope="scope">
          <el-radio v-model="radio" :label="tableData1[scope.$index].name">{{ tableData1[scope.$index].name }}</el-radio>
        </template>
      </el-table-column>
      <el-table-column label="组件id" prop="id"></el-table-column>
      <el-table-column label="组件类型" prop="types"></el-table-column>
      <el-table-column label="组件介绍" prop="className">
      </el-table-column>
    </el-table>
    <router-view></router-view>
  </div>
</template>

<script>

export default {
  name: 'MyMain',
  data () {
    return {
      flag: false,
      radio: '栏目',
      tableData: [{
        date: '银保业务员版首页',
        id: '5',
        pageId: '2'
      }],
      tableData1: [
        {
          name: '栏目',
          id: 1,
          types: 1,
          className: '页面栏目简介'
        }, {
          name: '内容',
          id: 2,
          types: 1,
          className: '页面内容组件'
        }, {
          name: '轮播图',
          id: 3,
          types: 1,
          className: '轮播图组件'
        }
      ],
      tableData2: []
    }
  },
  methods: {
    handleSizeChange (val) {
      console.log(`每页 ${val} 条`)
    },
    handleCurrentChange (val) {
      console.log(`当前页: ${val}`)
    }
  },
  watch: {
    radio: {
      handler (new1, old) {
        console.log(this.radio)
        if (new1 === '轮播图') {
          this.$router.push('/Home/LibraryPage/CarouselMap').catch(() => {
          })
        } else if (new1 === '内容') {
          this.$router.push('/Home/LibraryPage/ContentList').catch(() => {
          })
        } else if (new1 === '栏目') {
          this.$router.push('/Home/LibraryPage/Column').catch(() => {
          })
        }
      },
      immediate: true
    }
  }
}
</script>

<style lang="less" scoped>
.content {
  text-align: left;

  .title {
    margin: 20px 0 10px;
  }
}

</style>
