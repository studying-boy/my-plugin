<template>
  <div class="input-container">
    <input :type="type"
           :placeholder="placeholder"
           :readonly="readonly"
           v-model="selfVal"
           @blur="handleBlur"
           @click="handleClick"
           class="input"
    > <!-- @focus="handleFocus" @blur="handleBlur"-->
  </div>
</template>

<script lang="ts">
  import {Vue, Component, Prop, Emit, Model, Watch, Inject} from 'vue-property-decorator';

  @Component({
    name: 'MyInput',
    mounted() {
    }
  })
  export default class MyInput extends Vue {
    @Prop() placeholder: string;
    @Prop() type: string;
    @Prop() readonly: boolean;

    @Model('change')
    propVal: string

    get selfVal(): string {
      return this.propVal
    };
    set selfVal(newValue) {
      this.emitChange(newValue);
    }

    handleFocus() {
    }
    handleBlur() {
      this.emitBlur();
    }
    handleClick() {
      this.emitClick();
    }

    @Emit('change')
    emitChange(newValue: any): void {
    }

    @Emit('blur')
    emitBlur(): void {
      if (this.$parent.isNeedCheck) {
        this.$parent.onChangeFormResult(this.selfVal);
      }
    }

    @Emit('click')
    emitClick(): void {
    }
  }
</script>

<style lang="scss" rel="stylesheet/scss" scoped>
  .input-container {
    display: inline-block;
    vertical-align: top;
    .input{
      width: 100%;
      height: 40px;
      padding-left: 10px;
      box-sizing: border-box;
      border: 1px solid #ccc;
      border-radius: 4px;
    }
  }

  /* 表单验证下的样式 */
  .form-item-true, .form-item-false {
    .input {
      outline: none;
    }
  }
  .form-item-true {
    .input {
      border: 1px solid greenyellow;
    }
  }
  .form-item-false {
    .input {
      border: 1px solid red;
    }
  }
</style>