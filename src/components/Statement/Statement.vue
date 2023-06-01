<template>
 <div class="content">
    <div class="main">
      <el-row>
        <el-col :span="7">
          <div class="block">
            <span class="demonstration">时间选择</span>
            <el-date-picker
              v-model="value1"
              type="daterange"
              range-separator="至"
              start-placeholder="开始日期"
              end-placeholder="结束日期">
            </el-date-picker>
          </div>
        </el-col>
        <el-col :span="3">
          <p>分公司</p>
          <el-select v-model="value" placeholder="请选择">
            <el-option
              v-for="item in system"
              :key="item.system"
              :label="item.system"
              :value="item.system">
            </el-option>
          </el-select>
        </el-col>
        <el-col :span="3">
          <p>中支</p>
          <el-select v-model="value" placeholder="请选择">
            <el-option
              v-for="item in system"
              :key="item.system"
              :label="item.system"
              :value="item.system">
            </el-option>
          </el-select>
        </el-col>
        <el-col :span="3">
          <p>所属系统</p>
          <el-select v-model="value" placeholder="请选择">
            <el-option
              v-for="item in system"
              :key="item.system"
              :label="item.system"
              :value="item.system">
            </el-option>
          </el-select>
        </el-col>
        <el-col :span="3" :offset="1">
          <el-button type="primary">查询</el-button>
          <el-button>导出</el-button>
        </el-col>
      </el-row>
      <StatementList></StatementList>
      <StatementPage></StatementPage>
    </div>
 </div>
</template>

<script>
import StatementList from '@/components/Statement/StatementList.vue'
import StatementPage from '@/components/Statement/StatementPage.vue'
export default {
  name: 'StatementContent',
  components: {
    StatementPage,
    StatementList
  },
  data () {
    return {
      value: '',
      value1: '',
      pickerOptions: {
        shortcuts: [{
          text: '最近一周',
          onClick (picker) {
            const end = new Date()
            const start = new Date()
            start.setTime(start.getTime() - 3600 * 1000 * 24 * 7)
            picker.$emit('pick', [start, end])
          }
        }, {
          text: '最近一个月',
          onClick (picker) {
            const end = new Date()
            const start = new Date()
            start.setTime(start.getTime() - 3600 * 1000 * 24 * 30)
            picker.$emit('pick', [start, end])
          }
        }, {
          text: '最近三个月',
          onClick (picker) {
            const end = new Date()
            const start = new Date()
            start.setTime(start.getTime() - 3600 * 1000 * 24 * 90)
            picker.$emit('pick', [start, end])
          }
        }]
      },
      system: [
        { system: '企业号' },
        { system: '银保罗盘' }
      ]
    }
  }
}
</script>

<style scoped lang="less">
.content {
  background: #cccccc;
  padding: 20px;
  box-sizing: border-box;
  .main {
    height: 878px;
    width: 100%;
    background: white;
    padding: 20px;
    box-sizing: border-box;
    span {
      margin: 0 20px;
    }

    .block {
      display: flex;
      justify-content: left;
      align-items: center;

      /deep/ .el-range-editor.el-input__inner {
        display: flex;
        flex: 1;
      }
    }
  }
.el-col{
 display: flex;
  align-items: center;
  p{
    margin: 0 10px;
  }
  .el-select {
    display: flex;
    flex: 1;
  }
}
}
</style>
