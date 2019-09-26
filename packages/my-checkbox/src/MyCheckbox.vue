/*
整体思路：
单独使用：
selfValue绑定的是从父元素传过来的propValue，修改的时候只需要取反。
组内使用：
整体绑定的是一个从根元素传过来的propValueArr，每个checkbox单独绑定一个selfValue，selfValue每次经过修改后，反馈给根元素添加或者删除该checkbox选中的值。
*/

<template>
  <label class="checkbox-container"
         :class="[{'is-checked': isChecked}, {'is-disabled': isDisabled}, {'is-switch': isSwitch}]">
    <input type="checkbox" class="checkbox-base" :value="val" v-model="selfValue" :disabled="isDisabled"
           @click="handleClick"/>
    <span class="checkbox-box">
      <span class="checkbox-inner"></span>
    </span>
    <span class="checkbox-label">{{isChecked}}</span>
    <slot></slot>
  </label>
</template>

<script lang="ts">
  import {Component, Prop, Vue, Emit, Model} from 'vue-property-decorator';

  @Component({
    name: 'MyCheckbox',
    mounted() {
    }
  })
  export default class MyCheckbox extends Vue {
    @Prop() label: string;                                          // 文字展示
    @Prop({
      default: true
    }) val: string;                                                 // 选中的值
    @Prop({
      default: false
    }) disabled: boolean;                                           // 是否能使用
    @Prop({
      default: false
    }) isSwitch: boolean;

    @Model('change')
    propValue: boolean;                                             // 父组件传过来绑定的值

    /* 动态属性 */
    get isGroup(): boolean {                                                 // 是否在组里
      return this.$parent.$options['_componentTag'] === 'MyCheckboxGroup';
    }

    get isDisabled(): boolean {
      return this.$parent.disabled || this.disabled;
    }

    get isChecked() {
      const {isGroup, propValue} = this;
      if (!isGroup) {
        return propValue;
      } else {
        const {val, $parent: {propValueArr: selectItems}} = this;
        return selectItems.some(item => item === val);
      }
    }

    /*
      判断当前值是否在组内
       1. 是，返回最外层的数组
       2. 否，返回父组件传过来的值
    */
    get selfValue(): any {                                          // 当前组件的值
      return this.isGroup ? this.$parent.propValueArr : this.propValue;
    }

    /*
       判断当前值是否在组内
       1. 是，判断是否已经选中
          1) 是，则调用组的方法，将当前值从数组中删除
          2）否，则调用组的方法，将当前值添加到数组中
       2. 否，将新值返回给组
    */
    set selfValue(newValue) {
      const {isGroup, isChecked} = this;
      if (isGroup) {
        isChecked ? this.$parent.deleteItem(newValue) : this.$parent.selectItem(newValue);
      } else {
        this.emitChange(newValue);
      }
    }

    /*
       判断是否在组内
       1. 在组内的话，将绑定值设置为当前按钮的值，执行set方法，将新值传递给组。
       2. 单独使用，直接将绑定值取反即可。
     */
    handleClick() {
      const {isDisabled, isGroup, selfValue, val} = this;
      if (!isDisabled) {
        this.selfValue = isGroup ? val : !selfValue;
      }
    }

    // 只在 isGroup 为 false 起作用
    @Emit('change')
    emitChange(newValue: any): void {
      console.log(newValue);
    }
  }
</script>

<style lang="scss" rel="stylesheet/scss" scoped>
  .checkbox-container {
    cursor: pointer;
    /* 隐藏原生checkbox */
    .checkbox-base {
      position: absolute;
      opacity: 0;
      &:checked + .checkbox-box .checkbox-inner {
        border-left: 1px solid red;
        border-bottom: 1px solid red;
      }
      &:checked + .checkbox-box ::after {
        content: "";
        position: absolute;
        left: -29%;
        top: -37%;
        opacity: 0;
        width: 19px;
        height: 19px;
        border-radius: 50%;
        background: rgba(255, 100, 100, .2);
        animation: ripple .2s ease-out;
      }
    }
    .checkbox-box {
      display: inline-block;
      width: 20px;
      height: 20px;
      margin-right: 5px;
      border: 1px solid #ccc;
      border-radius: 4px;
      vertical-align: top;
      .checkbox-inner {
        position: relative;
        top: 10%;
        left: 10%;
        display: block;
        width: 80%;
        height: 40%;
        border: 0;
        transform: rotate(-55deg);
      }
    }
  }

  @keyframes ripple {
    0% {
      opacity: 1;
      transform: scale(0.0);
    }
    100% {
      opacity: 1;
      transform: scale(1.8);
    }
  }

  /* 禁用状态 */
  .checkbox-container.is-disabled {
    user-select: none;
    cursor: not-allowed;
    opacity: 0.5;
  }

  /* switch状态 */
  .is-switch.checkbox-container {
    position: relative;
    display: inline-block;
    width: 50px;
    border-radius: 20px;
    background: greenyellow;
    .checkbox-base {
      &:checked + .checkbox-box {
        left: 50%;
        background: yellow;
      }
    }
    .checkbox-box {
      position: absolute;
      left: 0;
      width: 50%;
      height: 150%;
      border-radius: 50%;
      background: #fff;
      transform: translateY(-16.7%);
      .checkbox-inner {
        display: none;
      }
    }
    &-label {

    }
  }
</style>