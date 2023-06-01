<template>
  <div class="fromField" ref="from" v-if="flag">
    <div class="block">
      <h3>批量收录</h3>
      <el-tabs tab-position="left" class="tab" style="width: 100%">
        <el-tab-pane label="用户管理">
          <el-tree
          :data="data"
          show-checkbox
          node-key="id"
          default-expand-all
          :expand-on-click-node="false"
          :render-content="renderContent">
          </el-tree>
        </el-tab-pane>
        <el-tab-pane label="配置管理">
          <el-tree
            :data="data"
            show-checkbox
            node-key="id"
            default-expand-all
            :expand-on-click-node="false"
            :render-content="renderContent">
          </el-tree>
        </el-tab-pane>
        <el-tab-pane label="角色管理">
          <el-tree
            :data="data"
            show-checkbox
            node-key="id"
            default-expand-all
            :expand-on-click-node="false"
            :render-content="renderContent">
          </el-tree>
        </el-tab-pane>
        <el-tab-pane label="定时任务补偿">
          <el-tree
            :data="data"
            show-checkbox
            node-key="id"
            default-expand-all
            :expand-on-click-node="false"
            :render-content="renderContent">
          </el-tree>
        </el-tab-pane>
      </el-tabs>
      <el-button @click="cancel">取消</el-button>
      <el-button type="primary">确认</el-button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'RecordBox',
  data () {
    const data = [{
      id: 1,
      label: '一级 1',
      children: [{
        id: 4,
        label: '二级 1-1',
        children: [{
          id: 9,
          label: '三级 1-1-1'
        }, {
          id: 10,
          label: '三级 1-1-2'
        }]
      }]
    }, {
      id: 2,
      label: '一级 2',
      children: [{
        id: 5,
        label: '二级 2-1'
      }, {
        id: 6,
        label: '二级 2-2'
      }]
    }, {
      id: 3,
      label: '一级 3',
      children: [{
        id: 7,
        label: '二级 3-1'
      }, {
        id: 8,
        label: '二级 3-2'
      }]
    }]
    const data1 = [{
      id: 1,
      label: '牛逼',
      children: [{
        id: 4,
        label: '二级 1-1',
        children: [{
          id: 9,
          label: '三级 1-1-1'
        }, {
          id: 10,
          label: '三级 1-1-2'
        }]
      }]
    }, {
      id: 2,
      label: '一级 2',
      children: [{
        id: 5,
        label: '二级 2-1'
      }, {
        id: 6,
        label: '二级 2-2'
      }]
    }, {
      id: 3,
      label: '一级 3',
      children: [{
        id: 7,
        label: '二级 3-1'
      }, {
        id: 8,
        label: '二级 3-2'
      }]
    }]
    const data2 = [{
      id: 1,
      label: '一级 1',
      children: [{
        id: 4,
        label: '二级 1-1',
        children: [{
          id: 9,
          label: '三级 1-1-1'
        }, {
          id: 10,
          label: '三级 1-1-2'
        }]
      }]
    }, {
      id: 2,
      label: '一级 2',
      children: [{
        id: 5,
        label: '二级 2-1'
      }, {
        id: 6,
        label: '二级 2-2'
      }]
    }, {
      id: 3,
      label: '一级 3',
      children: [{
        id: 7,
        label: '二级 3-1'
      }, {
        id: 8,
        label: '二级 3-2'
      }]
    }]
    const data3 = [{
      id: 1,
      label: '一级 1',
      children: [{
        id: 4,
        label: '二级 1-1',
        children: [{
          id: 9,
          label: '三级 1-1-1'
        }, {
          id: 10,
          label: '三级 1-1-2'
        }]
      }]
    }, {
      id: 2,
      label: '一级 2',
      children: [{
        id: 5,
        label: '二级 2-1'
      }, {
        id: 6,
        label: '二级 2-2'
      }]
    }, {
      id: 3,
      label: '一级 3',
      children: [{
        id: 7,
        label: '二级 3-1'
      }, {
        id: 8,
        label: '2222'
      }]
    }]
    return {
      data: JSON.parse(JSON.stringify(data)),
      data1: JSON.parse(JSON.stringify(data1)),
      data2: JSON.parse(JSON.stringify(data2)),
      data3: JSON.parse(JSON.stringify(data3)),
      flag: false
    }
  },
  methods: {
    renderContent (h, { node, data, store }) {
      return (
        <span class="custom-tree-node">
            <span>{node.label}</span>
            <span>
              <el-button size="mini" type="text" on-click={() => this.append(data)}>Append</el-button>
              <el-button size="mini" type="text" on-click={() => this.remove(node, data)}>Delete</el-button>
            </span>
          </span>)
    },
    from () {
      // console.log(this.flag)
      if (this.flag) {
        console.log(1)
        this.$refs.from.style.display = 'block'
      } else {
        this.$refs.from.style.display = 'none'
      }
    },
    cancel () {
      this.flag = false
    }
  },
  created () {
    this.$bus.$on('flag1', val => {
      console.log(val)
      this.flag = val
      this.from()
    })
  }
}
</script>

<style scoped lang="less">
.fromField {
  position: fixed;
  z-index: 5;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  background: rgba(0, 0, 0, 0.1);

  .block {
    position: absolute;
    background: white;
    top: 50%;
    left: 50%;
    margin-top: -250px;
    margin-left: -250px;
    height: 500px;
    width: 500px;
  }
}
/deep/.el-button--text{
  display: none;
}
h3 {
  height: 48px;
  width: 100%;
  background: #3399ff;
  font-size: 24px;
  line-height: 48px;
  font-weight: 500;
  color: white;
}
.tab{
  /deep/.el-tabs--left .el-tabs__header.is-left{
    width: 30%;
  }
}
.el-tabs{
  height: 400px;
}
.el-tree{
  margin-top: 30px;
}
/deep/.el-tabs__nav-scroll{
  height: 400px;
}
/deep/[data-v-27eaf24e] .el-tabs--left, .el-tabs--right[data-v-27eaf24e]{
  height: 80%!important;
}
/deep/.tab{
  height: 400px!important;
}
</style>
