<template>
  <div class="article">
    <el-tabs :tab-position="tabPosition">
      <el-tab-pane>
        <span slot="label">
          <span class="span-box">
            <span class="iconfont icon-wenzhang"></span>
            <el-tooltip
              class="item"
              effect="dark"
              content="2"
              placement="bottom-start"
            >
              <span class="btn-bell-badge">
                <span class="num">文章</span>
              </span>
            </el-tooltip>
          </span>
        </span>
        <div class="content">
          <Search></Search>
          <CreationMode></CreationMode>
          <Tag></Tag>
          <div class="convenient">
            <p>已选择 <span>{{num}}</span>项</p><span class="empty" @click="empty">清空</span>
          </div>
        </div>
          <List ref="list"></List>
      </el-tab-pane>
      <el-tab-pane label="视频">
        <span slot="label">
          <span class="span-box">
            <span class="iconfont icon-shipinzhibo"></span>
            <el-tooltip
              class="item"
              effect="dark"
              content="2"
              placement="bottom-start"
            >
              <span class="btn-bell-badge">
                <span class="num">视频</span>
              </span>
            </el-tooltip>
          </span>
        </span>
        <div>
          视频
        </div>
      </el-tab-pane>
      <el-tab-pane label="海报">
        <span slot="label">
          <span class="span-box">
            <span class="iconfont icon-xuanchuanhaibao"></span>
            <el-tooltip
              class="item"
              effect="dark"
              content="2"
              placement="bottom-start"
            >
              <span class="btn-bell-badge">
                <span class="num">海报</span>
              </span>
            </el-tooltip>
          </span>
        </span>
        <div>
          海报
        </div>
      </el-tab-pane>
    </el-tabs>
    <RecordBox></RecordBox>
  </div>
</template>

<script>
import Search from '@/components/Home/Search.vue'
import CreationMode from '@/components/Home/CreationMode.vue'
import Tag from '@/components/Home/Tag.vue'
import List from '@/components/Home/List.vue'
import RecordBox from '@/components/Home/Record.vue'
export default {
  name: 'ContentArticle',
  components: {
    RecordBox,
    CreationMode,
    Search,
    Tag,
    List
  },
  data () {
    return {
      tabPosition: 'left',
      num: 0,
      flag: false
    }
  },
  mounted () {
    this.$bus.$on('num', val => {
      this.num = val
      console.log(this.$refs)
    })
  },
  methods: {
    empty () {
      this.num = 0
      this.$refs.list.toggleSelection()
    }
  }
}
</script>

<style scoped lang="less">
.article {
  height: 800px;
  width: 98%;
  margin: 16px;
  background: #ffffff;
}
/deep/.el-tabs__active-bar{
  background: 0;
}
/deep/.el-tabs--left .el-tabs__nav-wrap.is-left::after, .el-tabs--left .el-tabs__nav-wrap.is-right::after, .el-tabs--right .el-tabs__nav-wrap.is-left::after, .el-tabs--right .el-tabs__nav-wrap.is-right::after {
  height: 90%;
  top: 5%;
}
/deep/.el-tabs__nav-wrap.is-left{
  padding-top: 20px;
  box-sizing: border-box;
}
.icon-xuanchuanhaibao{
  font-size: 12px;
}
.iconfont{
  margin-right: 5px;
}
.convenient {
  height: 26px;
  line-height: 26px;
  margin: 30px 10px;
  border: 1px solid #f8d197;
  border-radius: 3px;
  display: flex;
  padding: 0 22px;
  background: #fdf6ea;
  p {
    font-size: 12px;
    color: #a8a5a4;
    span{
      color: orange;
    }
  }
  .empty {
    color: #409eff;
    cursor: pointer;
    margin: 0 20px;
  }
  box-sizing: border-box;
}
/deep/.el-tabs--left .el-tabs__header.is-left{
  float: none;
  height: 100%;
}
/deep/.el-tabs--left, .el-tabs--right{
  display: flex;
  //height: 880px;
  height: 100%
}
/deep/.el-tabs__content {
  padding: 0 20px
}
</style>
