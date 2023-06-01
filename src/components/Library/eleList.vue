<template>
  <div class="eleList">
<!--  栏目 ——>  上级栏目  -->
    <el-row class="title" :span="24">
      <el-col :span="6">栏目名称</el-col>
      <el-col :span='10'>
        <el-cascader
          v-model="SLOT"
          :options="options"
          :props="{ checkStrictly: true }"
          clearable>
          <template slot-scope="{ node, data }">
            <span>{{ data.value }}</span>
            <span v-if="!node.isLeaf"> ({{ data.children.length }}) </span>
          </template>
        </el-cascader>
      </el-col>
      <el-col :span="4" :offset="2"><el-button  type="primary" @click="search">查询</el-button></el-col>
      <el-col :span="4" :offset="2"><el-button @click="reset">重置</el-button></el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  name: 'eleList',
  data () {
    return {
      SLOT: '',
      options: []
    }
  },
  methods: {
    search () {
      console.log(this.SLOT)
      if (this.SLOT[0] === undefined) {
        console.log('为查询到对应的资料！！！')
      } else {
        // console.log(this.options)
        const SLOT = this.SLOT
        // eslint-disable-next-line array-callback-return
        this.options = this.options.filter(function (item) {
          // console.log(SLOT)
          // if (SLOT.length === 1) {
          return item.value === SLOT[0]
          // } else if (SLOT.length === 2) {
          // console.log(item.value)
          // if (item.value === SLOT[0]) {
          //   // console.log(item.children)
          //   // eslint-disable-next-line array-callback-return
          //   console.log(item.children.filter(item => item.value === SLOT[1]))
          //   return item.children.filter(item => item.value === SLOT[1])
          // }
          // }
        })
        if (SLOT[1] !== undefined) {
          console.log(this.options[0].children)
          this.options = this.options[0].children.filter(item => item.value === SLOT[1])
        } else {
          console.log(this.options)
        }
        console.log(this.options)
        this.$bus.$emit('queryList', this.options)
      }
    },
    reset () {
      this.request()
      this.$bus.$emit('queryList', this.options)
      this.SLOT = ''
    },
    async request () {
      const { data } = await this.$http.get('JSON/LibraryPage.json')
      this.options = data.data
    }
  },
  mounted () {
    this.request()
  }
}
</script>

<style>
.el-row {
  display: flex;
  align-items: center;
}
.eleList {
  width: 100%;
  display: flex;
  /*margin-left: 10%;*/
  justify-content: center;
}
</style>
