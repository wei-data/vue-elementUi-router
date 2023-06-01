<template>
  <el-form :label-position="labelPosition" label-width="80px" :model="formLabelAlign">
    <el-form-item label="创建方式" class="top">
        <el-radio-group v-model="radio1" size="small">
          <el-radio-button label="全部"></el-radio-button>
          <el-radio-button label="管理端上传" ></el-radio-button>
          <el-radio-button label="用户端上传"></el-radio-button>
        </el-radio-group>
    </el-form-item>
    <el-row :gutter="24">
    <el-form-item label="已收录">
      <el-col :span="6">
        <p>页面</p>
        <el-select v-model="text"  @change="changCity();changCity1()" placeholder="请选择">
          <el-option
            v-for="item in arr"
            :key="item.sheng"
            :label="item.sheng"
            :value="item.sheng">
          </el-option>
        </el-select>
      </el-col>
      <el-col :span="6">
      <p>一级栏目</p>
      <el-select v-model="text1" @change="changCity();changCity1()" placeholder="请选择">
        <el-option
          v-for="item in cityAll"
          :key="item.city"
          :label="item.city"
          :value="item.city">
        </el-option>
      </el-select>
      </el-col>
      <el-col :span="6">
      <p>二级栏目</p>
      <el-select v-model="text2" placeholder="请选择">
        <el-option
          v-for="item in nameAll"
          :key="item.name"
          :label="item.name"
          :value="item.name">
        </el-option>
      </el-select>
      </el-col>
      <el-col :span="6">
        <el-button type="primary">查询</el-button>
        <el-button>重置</el-button>
      </el-col>
    </el-form-item>
    </el-row>
    <el-form-item label="标签">
      <el-popover
        placement="bottom"
        width="400"
        trigger="click">
        <el-input v-model="input" placeholder="请输入内容"></el-input>
        <el-input
          placeholder="请输入内容"
          suffix-icon="el-icon-search"
          slot="reference"
          v-model="input">
        </el-input>
      </el-popover>
    </el-form-item>
  </el-form>
</template>

<script>
export default {
  name: 'CreationMode',
  data () {
    return {
      input: '',
      labelPosition: 'right',
      formLabelAlign: {
        name: '',
        region: '',
        type: ''
      },
      radio1: '全部',
      // 页面
      text: '',
      // 栏目一
      text1: '',
      // 栏目二
      text2: '',
      // 数据一级栏目
      cityAll: [],
      // 数据二级级栏目
      nameAll: [],
      // 总数据
      arr: []
    }
  },
  mounted () {
    this.request()
    this.changCity()
    this.changCity1()
  },
  methods: {
    async request () {
      const { data } = await this.$http.get('JSON/query.json')
      console.log(data)
      this.arr = data.data
    },
    changCity () {
      // ...............................................................
      // 我先定义一个变量为this，因为需要获取一开始的this，为了让this指向不会错误
      const me = this
      let item
      // ...............................................................
      // 循环拿出数据选择的省份的数据
      me.arr.forEach(val => {
        if (val.sheng === me.text) {
          // ...............................................................
          // 拿出数据
          item = val
          console.log(item)
        }
      })
      // ...............................................................
      // 当有数据时就能执行下列代码如果没有赋值就为undefined不执行
      if (item) {
        // ...............................................................
        // 给拿出的市的数据赋给city数组
        this.cityAll = item.citys
        // ...............................................................
        // 选择之后默认弹出第零项的市份
        console.log(item.citys[0])
        // this.text1 = item.citys[0].city
      }
    },
    changCity1 () {
      const me = this
      let item
      me.cityAll.forEach(function (value) {
        console.log(me.text1)
        if (value.city === me.text1) {
          item = value
        }
      })
      if (item) {
        this.nameAll = item.names
        // this.text2 = item.names[0].name
      }
    }
  }
}
</script>

<style scoped lang="less">
/deep/.el-form-item__content{
  display: flex;
}
/deep/.el-radio-button--small .el-radio-button__inner{
  font-size: 12px;
  padding: 5px 12px;
}
.el-form-item {
  display: flex;
  align-items: center;
  margin-bottom: 15px;
}

/deep/.el-radio-button__orig-radio:checked+.el-radio-button__inner {
  background: transparent;
  color: #409eff;
  box-sizing: content-box;
}
.el-select {
  height: 30px;
  line-height: 30px;
  /deep/.el-input--suffix .el-input__inner {
    height: 30px;
    line-height: 30px;
  }
}
/deep/.el-input__icon{
  line-height: 30px;
}
p{
  margin: 0 5px 0 5px ;
  width: 70px;
}
/deep/.el-form-item__content {
  display: flex;
  align-items: center;
}
/deep/.el-input__inner{
  line-height: 30px;
  height: 30px;
}
.top{
  margin-top: 20px;
}
.el-col{
  display: flex;
}
/deep/.el-form-item__content{
  margin-left: 10px!important;
}
.el-col {
  display: flex;
  align-items: center;
}
</style>
