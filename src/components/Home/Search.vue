<template>
  <div class="search">
    <h3>搜索</h3>
    <el-row type="flex" class="row-bg">
      <el-input
        placeholder="请输入内容"
        v-model="input"
        clearable>
      </el-input>
      <el-button type="primary" @click="search">搜索</el-button>
    </el-row>
  </div>
</template>

<script>
export default {
  name: 'SearchComponent',
  data () {
    return {
      input: '',
      list: []
    }
  },
  methods: {
    async request () {
      const { data } = await this.$http.get('JSON/tsconfig.json')
      this.list = data.data
    },
    search () {
      const val = this.list.filter(item => item.id === Number(this.input))
      this.$bus.$emit('search', val)
    }
  },
  mounted () {
    this.request()
  }
}
</script>

<style scoped lang="less">
.search {
  height: 30px;
  margin:36px 16px 0;
  padding-bottom: 18px;
  border-bottom: 1px solid #f3f3f3;
  display: flex;
  align-items: center;
  h3 {
    font-size: 14px;
    font-weight: 600;
  }
  >div{
    margin-left: 10%;
  }
  .el-input {
    width: 328px;
  }
  .el-button {
    padding: 6px 10px;
    height: 30px;
    font-size: 12px;
    //border: 0;
    //line-height: 26px;
    border-top-left-radius: 0;
    border-bottom-left-radius: 0;
  }
}
/deep/.el-input__inner {
  height: 30px;
  line-height: 24px;
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
}
</style>
