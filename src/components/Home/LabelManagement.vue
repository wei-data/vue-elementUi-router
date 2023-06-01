<template>
  <div class="management" ref="modeRefOne">
    <h2>单素材标签管理</h2>
    <el-form ref="form" label-width="80px">
      <el-form-item label="内容ID">1000000429</el-form-item>
      <el-form-item label="内容名称">华夏专刑康</el-form-item>
      <el-form-item label="内容类型">文章</el-form-item>
      <el-form-item label="缩略图"><img src="@/assets/logo.png" alt=""></el-form-item>
      <el-form-item label="设置标签"><textarea style="resize: none;" name="" id="" cols="40" rows="3"></textarea></el-form-item>
    </el-form>
    <p class="bqk"><a>标签库</a></p>
    <div class="new">
      <h3><b>+新增标签</b></h3>
      <p>试一试滑动加载更多标签哟！！</p>
    </div>
    <el-button @click="cancel">取消</el-button>
    <el-button type="primary" @click="modify">保存</el-button>
  </div>
</template>

<script>

export default {
  name: 'ModeOrder',
  data () {
    return {
      // 运费
      modify1: '',
      // 数据
      list: [],
      // 金钱
      money: '',
      // 对应的id
      id: 0
    }
  },
  methods: {
    cancel () {
      // 点击影藏这个模态框
      this.$refs.modeRefOne.style.display = 'none'
    },
    modify () {
      // 点击传给列表的数据包括对应的id,钱,运费
      this.$bus.$emit('money', [this.id, this.money, this.modify1])
      // 清空输入框
      this.money = ''
      // 运费
      this.modify1 = ''
      // 隐藏模态框
      this.$refs.modeRefOne.style.display = 'none'
    }
  },
  created () {
    // 接受开关与删除后的数据给其list赋值
    this.$bus.$on('flagOne', val => {
      if (val) {
        this.$refs.modeRefOne.style.display = 'block'
      }
      this.list = val[1]
      this.id = val[1].id
    })
  }
}
</script>

<style scoped  lang="less">
.new {
  margin: 10px 90px;
  box-sizing: border-box;
  border: 1px dashed #cccccc;
  height: 90px;
  h3 {
    text-align: left;
    padding: 10px 0 0 10px;
    b {
      background: #409eff;
      color: white;
      border-radius: 20px;
      padding: 5px 10px;
      font-weight: 500;
      font-size: 14px;
    }
  }
  p {
    text-align: center;
    font-size: 12px;
    color: #8b8d8f;
  }
}
/deep/.el-form-item{
  margin-bottom: 0;
}
.management {
  width: 600px;
  height: 500px;
  display: none;
  box-shadow: 5px 5px 20px ;
  position: fixed;
  top: 50%;
  left: 50%;
  background: #f2f2f2;
  margin-left: -300px;
  margin-top: -250px;

  h2 {
    padding: 8px 0;
    font-size: 18px;
    color: white;
    font-weight: 500;
    background: #409eff;
  }
}
/deep/.el-input__inner {
  height: 30px;
  width: 221px;
  margin: 0 15px;
  padding-left: 10px;
  box-sizing: border-box;
}
/deep/.el-input{
  width: 221px!important;
  padding-left: 0!important;
  margin: 0 10px!important;
}
/deep/.el-input__inner {
  margin: 0;
}
.el-form {
  padding: 20px 90px 0;
  box-sizing: border-box;
}
img {
  height: 35px;
  width: 35px;
}
/deep/.el-form-item__content{
  text-align: left;
  margin-left: 120px!important;
}
.bqk {
  width: 100%;
  text-align: right;
  padding: 0 90px;
  box-sizing: border-box;
  a {
    color: #409eff;
    font-size: 12px;
  }
}
</style>
