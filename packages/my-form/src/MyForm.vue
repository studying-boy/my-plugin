/*
使用方法：
form：
v-model绑定一个对象，空对象即可，属性可以不用设置。
validItemArr：Array，需要对item进行判断的属性数组

form-item：
name：必填项，根据name来获取绑定对象中的值
validFunc：校验函数
*/

<template>
  <div class="form">
    <slot></slot>
  </div>
</template>

<script lang="ts">
  import {Vue, Component, Prop, Emit, Model, Watch, Provide} from 'vue-property-decorator';

  @Component({
    name: 'MyForm'
  })
  export default class MyForm extends Vue {
    @Prop() validItemArr: string[]; // 需要校验的字段

    @Model('change')
    formResult: object

    @Watch('formResult', {
      deep: true
    })
    onChangeFormResult(newValue) {}

    // 校验整个form的正确性
    validForm() {
      for(const item of this.validItemArr) {
        if(this.formResult[item + 'Result'] !== true) {
          this.formResult.isValid = false;
          return;
        }
        this.formResult.isValid = true;
      }
    };
  }
</script>

<style lang="scss" rel="stylesheet/scss" scoped>
</style>