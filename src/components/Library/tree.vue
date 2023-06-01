<template>
<!--  内容侧边栏-->
  <el-tree :data="data" :props="defaultProps" @node-click="handleNodeClick"></el-tree>
</template>

<script>
export default {
  name: 'treeBox',
  data () {
    return {
      data: [
        {
          label: '全部',
          children: [
            {
              label: '小白课堂'
            }
          ]
        },
        {
          label: '李晓阳一级',
          children: [
            {
              label: '全部'
            },
            {
              label: '李小杨二级'
            },
            {
              label: '李小杨三级'
            }
          ]
        },
        {
          label: '增援选材',
          children: [
            {
              label: '全部'
            },
            {
              label: '基本法'
            },
            {
              label: '招募工具'
            }
          ]
        },
        {
          label: '基础管理',
          children: [
            {
              label: '全部'
            },
            {
              label: '重点推荐'
            },
            {
              label: '活动量管理'
            }
          ]
        },
        {
          label: '销售支持',
          children: [
            {
              label: '二级 3-1'
            }
          ]
        },
        {
          label: '基础知识',
          children: [
            {
              label: '二级 3-1'
            }
          ]
        },
        {
          label: '典藏版',
          children: [
            {
              label: '二级 3-1'
            }
          ]
        },
        {
          label: '中介测试1',
          children: [
            {
              label: '二级 3-1',
              children: [
                {
                  label: '三级 3-1-1'
                }
              ]
            }
          ]
        }
      ],
      defaultProps: {
        children: 'children',
        label: 'label'
      }
    }
  },
  methods: {
    handleNodeClick (data) {
      console.log(data)
    }
  }
}
</script>

<style></style>
