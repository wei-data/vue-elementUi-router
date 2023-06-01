<template>
  <div class="logIn">
    <el-form :model="ruleForm" status-icon :rules="rules" placeholder="请输入内容" ref="ruleForm" label-width="100px" class="demo-ruleForm">
      <el-form-item prop="age">
        <el-input v-model="ruleForm.age"  prefix-icon="iconfont icon-touxiang"></el-input>
      </el-form-item>
      <el-form-item prop="checkPass">
        <el-input type="password" v-model="ruleForm.checkPass" autocomplete="off" show-password prefix-icon="iconfont icon-mima"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="submitForm('ruleForm')">LogIn</el-button>
      </el-form-item>
      <el-form-item>
        <el-button type="primary"  @click="centerDialogVisible = true">二维码提交</el-button>
      </el-form-item>
    </el-form>
    <el-dialog
      title="提示"
      :visible.sync="centerDialogVisible"
      width="30%"
      center>
      <img src="../assets/logo.png" alt="">
      <span slot="footer" class="dialog-footer">
      </span>
    </el-dialog>
  </div>
</template>

<script>
export default {
  name: 'LogIn',
  data () {
    const checkAge = (rule, value, callback) => {
      if (!value) {
        return callback(new Error('用户名不能为空'))
      }
      setTimeout(() => {
        if (!/^[\u4e00-\u9fa5a-zA-Z0-9]{1,12}$/.test(value)) {
          callback(new Error('用户名长度需要4到16位'))
        } else {
          callback()
        }
      }, 1000)
    }
    const validatePass2 = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请输入密码'))
      } else {
        if (!/^.*(?=.{6,})(?=.*\d)(?=.*[A-Z])(?=.*[a-z])(?=.*[!@#$%^&*? ]).*$/.test(value)) {
          callback(new Error('包括最少6位数,1个大写字母，1个小写字母，1个数字，1个特殊字符'))
        } else {
          callback()
        }
      }
    }
    return {
      centerDialogVisible: false,
      ruleForm: {
        checkPass: '',
        // 用户名
        age: ''
      },
      rules: {
        checkPass: [
          { validator: validatePass2, trigger: 'blur' }
        ],
        age: [
          { validator: checkAge, trigger: 'blur' }
        ]
      }
    }
  },
  methods: {
    submitForm () {
      if (this.ruleForm.age === '你好乡里别' && this.ruleForm.checkPass === '@Ws20040810') {
        localStorage.setItem('token', this.ruleForm.age)
        this.$router.push({
          name: 'content'
        })
      } else {
        localStorage.removeItem('token')
      }
    }
  }
}
</script>

<style scoped lang="less">
.logIn {
  height: 100vh;
  width: 100%;
  background: #2d3a4b;

  .el-form {
    width: 370px;
    margin: 0 auto;
    padding-top: 200px;
  }

  .el-button {
    width: 100%;
  }
  .el-input {
    margin-bottom: 20px;
  }
  /deep/.el-form-item__content {
    margin-left: 0 !important;
    height: 40px;
  }
  /deep/.el-dialog__body {
    display: flex;
    justify-content: center;
    align-items: center;
  }
}
</style>
