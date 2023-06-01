<template>
<!--  栏目 -->
  <div class="content">
    <div class="column">
        <h2>栏目</h2>
        <eleList></eleList>
        <el-input
          placeholder="请输入"
          suffix-icon="el-icon-zoom-in"
          v-model="input">
        </el-input>
    </div>
    <div class="btnNew"><el-button type="primary" @click="flagA">新建</el-button></div>
    <LibraryList></LibraryList>
    <Dialog v-if="flag" @flagB="flagC"></Dialog>
  </div>
</template>

<script>
import eleList from '@/components/Library/eleList.vue'
import LibraryList from '@/components/Library/LibraryList.vue'
import Dialog from '@/components/Library/dialog.vue'

export default {
  name: 'ColumnList',
  components: {
    eleList,
    LibraryList,
    Dialog
  },
  data () {
    return {
      flag: false,
      input: ''
    }
  },
  methods: {
    flagA () {
      this.flag = true
    },
    flagC (val) {
      this.flag = val
    }
  }
}
</script>

<style scoped>
.column {
  display: flex;
  background: white;
  padding: 30px 0;
  width: 100%;
}
h2 {
  font-weight: 600;
  font-size: 20px;
  width: 70px;
}
.el-input{
  width: 250px;
}
.btnNew {
  display: flex;
  justify-content: right;
  background: white;
  padding-bottom: 10px;
}
</style>
