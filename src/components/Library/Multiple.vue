<template>
  <!--  多选框-->
  <div class="Multiple" :style="Styles">
    <el-select v-model="value" clearable placeholder="请选择">
      <el-option
          v-for="item in options"
          :key="item.value"
          :label="item.label"
          :value="item.value">
      </el-option>
    </el-select>
  </div>
</template>

<script>
export default {
  name: 'MultiPle',
  props: ['one', 'two', 'three', 'four', 'five', 'six', 'seven', 'w'],
  data () {
    return {
      options: [{
        value: this.one,
        label: this.one
      }, {
        value: this.two,
        label: this.two
      }, {
        value: this.three,
        label: this.three
      }, {
        value: this.four,
        label: this.four
      }, {
        value: this.five,
        label: this.five
      }],
      value: '',
      Styles: {
        // 拿到props传过来的值，用this
        width: this.w,
        height: this.h
      }
    }
  }
}
</script>

<style lang="less" scoped>
.Multiple {
  width: 95px;
  height: 32px;

  /deep/.el-input__inner {
    height: 32px;
  }

  /deep/.el-select__caret {
    line-height: 32px;
  }
}
</style>
