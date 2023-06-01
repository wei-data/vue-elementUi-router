<template>
  <div class="elements">
    <!-- 内容 -->
    <h3 class="title">内容</h3>
    <div class="container">
      <div class="left">
        <MyTree></MyTree>
      </div>
      <div class="right">
        <ColumnName></ColumnName>
        <ColumnList></ColumnList>
      </div>
    </div>
  </div>
</template>

<script>
import MyTree from './tree.vue'
import ColumnName from '@/components/Library/ContentName.vue'
import ColumnList from '@/components/Library/ColumnList.vue'
export default {
  name: 'elementsA',
  components: {
    ColumnList,
    // 侧边栏
    MyTree,
    // 列表
    ColumnName
  },
  data () {
    return {

    }
  }
}
</script>

<style lang="less" scoped>
.elements {
  .title {
    padding: 20px 0 10px;
    background: white;
  }

  .container {
    display: flex;
    height: 444px;
    background: white;
    // justify-content: space-between;
    .left{
      width: 150px;
    }
  }
}
.right{
  width: 100%;
}
</style>
