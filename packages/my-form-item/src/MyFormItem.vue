<template>
  <div class="form-item" :class="[{'form-item-true': selfResult === true}, {'form-item-false': selfResult === false}]">
    <span class="form-item-label" v-if="label">
      <i class="require-icon" v-if="isNeedCheck">*</i>{{ label }}
    </span>
    <div class="form-item-content">
      <slot></slot>
      <span class="errorText">{{ errorText }}</span>
    </div>
  </div>
</template>

<script lang="ts">
  import {Vue, Component, Prop, Emit, Model, Watch} from "vue-property-decorator";

  @Component({
    name: "MyFormItem"
  })
  export default class MyFormItem extends Vue {
    @Prop() label: string;
    @Prop() validFunc: Function;
    @Prop() name: string;

    selfResult: any = '';
    errorText: string = '';
    get selfVal(): any {
      return this.$parent.formResult[this.name];
    }
    get isNeedCheck(): any {
      return this.$parent.validItemArr.some((item) => {
        return item === this.name
      });
    }


    // @Watch('selfVal')
    onChangeFormResult(newValue) {
      // 校验结果，并保存在form对象上，同时判断所有校验是否正确
      this.errorText = this.validFunc(newValue)
      this.selfResult = this.errorText === '';
      this.$parent.formResult[this.name + 'Result'] = this.selfResult;
      this.$parent.validForm();
    }
  }
</script>

<style lang="scss" rel="stylesheet/scss" scoped>
  .form-item {
    display: flex;
    padding-bottom: 30px;
    text-align: left;
    .form-item-label {
      display: inline-block;
      min-width: 100px;
      text-align: right;
      align-self: center;
      .require-icon {
        margin-right: 3px;
        vertical-align: middle;
        color: red;
      }
    }
    .form-item-content {
      position: relative;
      flex: 1;
      margin-left: 10px;
      .errorText {
        position: absolute;
        top: 30px;
        left: 0;
        margin-top: 5px;
        color: red;
      }
    }
  }
</style>