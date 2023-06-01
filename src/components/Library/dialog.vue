<template>
  <!-- 对话框 -->
  <el-dialog
    class="NewDialog"
    title="新建"
    :visible.sync="NewlyVisible2"
    width="30%"
    center
  >
    <!--          所属页面-->
    <div class="OwningPage">
      <span>所属页面*</span>
      <el-input
        placeholder="请输入内容"
        v-model="OwningVal"
        :disabled="true"
      >
      </el-input>
    </div>
    <div
      class="title"
      style="margin: 20px 0; justify-content: space-around"
    >
      <el-radio v-model="radio" label="1">新建一级栏目</el-radio>
      <el-radio v-model="radio" label="2">新建子栏目</el-radio>
    </div>
    <div class="ColNum">
      <span>栏目编号：</span>
      <el-input v-model="input" placeholder="请输入内容"></el-input>
    </div>
    <div class="ColNum">
      <span>一级栏目名称*</span>
      <el-input v-model="input" placeholder="请输入内容"></el-input>
    </div>
    <!--              封面摘要-->
    <div class="cover" style="margin: 10px 0">
      <span>封面摘要</span>
      <div class="upload">
        <el-upload
          action="/file/Upload?module=EQ"
          accept="image/jpeg,image/jpg,image/png"
          :limit="1"
          :on-change="handleLimit"
          list-type="picture-card"
          :on-success="handleSuccess"
          :on-remove="handleRemove"
        >
          <i class="el-icon-plus"></i>
        </el-upload>
      </div>
    </div>
    <div class="ColNumSelect">
      <span>栏目状态*</span>
      <Multiple></Multiple>
    </div>
    <div class="ColNumSelect">
      <span>收录内容类型*</span>
      <Multiple></Multiple>
    </div>
    <div class="ColNumSelect">
      <span>关联内容方式*</span>
      <Multiple></Multiple>
    </div>
    <div class="ColNumSelect">
      <span>栏目下的内容自动打标签 (最多添加3个) *</span>
      <Multiple></Multiple>
      <span class="newlabel">新建标签</span>
    </div>
    <!--              创建按钮-->
    <div class="createBtn">
      <el-button @click="ChangeNewlyFalse">取消</el-button>
      <el-button type="primary" @click="ChangeNewlyFalse">创建</el-button>
    </div>
  </el-dialog>

</template>

<script>
import Multiple from '@/components/Library/Multiple.vue'
export default {
  name: 'dialogA',
  components: {
    Multiple
  },
  data () {
    return {
      NewlyVisible2: '',
      OwningVal: '',
      radio: '1',
      input: '',
      flag: false
    }
  },
  methods: {
    // 图片上传方法
    handleRemove (file, fileList) {
      console.log(file, fileList)
      this.eqObj.uploadDisabled = false
      this.$forceUpdate()
    },
    handleSuccess (response) {
      if (response.success) {
        this.eqForm.image = response.filepath
      }
    },
    handleLimit (file, fileList) {
      if (fileList.length >= 1) {
        this.eqObj.uploadDisabled = true
        this.$set(this.eqObj, 'uploadDisabled', true)
      } else {
        this.eqObj.uploadDisabled = false
        this.$set(this.eqObj, 'uploadDisabled', false)
      }
      this.$forceUpdate()
    },
    ChangeNewlyFalse () {
      this.$emit('flagB', this.flag)
    }
  }
}
</script>

<style scoped lang="less">
.createBtn {
  width: 150px;
  margin: 0 auto;
}

// 所属页面
   .OwningPage,
   .ColNum {
     display: flex;
     flex-direction: row;
     justify-content: space-between;
     align-items: center;
     margin: 20px 0;

.el-input {
  width: 550px;
}
}
//tupian
  .cover {
    display: flex;
    align-items: center;
span {
  margin: 0 0 0 5px;
}
.upload {
  margin-left: 40px;
}
}
// 下拉多选框
   .ColNumSelect {
     display: flex;
     align-items: center;
     margin: 20px 0;
span {
  display: inline-block;
  width: 60px;
}
::v-deep .el-select {
  width: 200px;
  margin-left: 40px;
}
}
</style>
