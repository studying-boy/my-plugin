<template>
  <label class="radio-container" :class="[{'is-disabled': isDisabled}]">
    <input type="radio" class="radio-base" :value="val" v-model="selfValue" :disabled="isDisabled"
           @click="handleClick"/>
    <span class="radio-box">
      <span class="radio-inner"></span>
    </span>
    <span class="radio-label">{{label}}</span>
    <slot></slot>
  </label>
</template>

<script lang="ts">
    import {Component, Prop, Vue, Model, Emit} from 'vue-property-decorator';

    @Component({
        name: 'MyRadio',
        mounted() {
        }
    })
    export default class MyRadio extends Vue {
        @Prop() label: string;
        @Prop() val: any;
        @Prop({
            default: false
        }) disabled: boolean;
        @Model('change', {})
        propValue: any;

        get isGroup(): boolean {                                                 // 是否在组里
            return this.$parent.$options['_componentTag'] === 'MyRadioGroup';
        }

        get isDisabled(): boolean {
            return this.$parent.disabled || this.disabled;
        }

        get selfValue(): string {
            return this.isGroup ? this.$parent.propValueArr : this.propValue;
        }

        set selfValue(newValue) {
            this.isGroup ? this.$parent.emitChange(newValue) : this.emitChange(newValue);
        }

        handleClick() {
            !this.isDisabled && (this.selfValue = this.val);
        }

        @Emit('change')
        emitChange(newValue: any): void {

        }
    }
</script>

<style lang="scss" rel="stylesheet/scss" scoped>

  .radio-container {
    cursor: pointer;
    /* 隐藏原生radio */
    .radio-base {
      position: absolute;
      opacity: 0;
      &:checked + .radio-box .radio-inner {
        background: red;
      }
      &:checked + .radio-box ::after {
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
    .radio-box {
      display: inline-block;
      width: 20px;
      height: 20px;
      margin-right: 5px;
      border: 1px solid #ccc;
      border-radius: 50%;
      vertical-align: top;
      .radio-inner {
        position: relative;
        top: 10%;
        left: 10%;
        display: block;
        width: 80%;
        height: 80%;
        border-radius: 50%;
        border: 0;
      }
    }
    .radio-label {
      display: inline-block;
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

  /* 禁用样式 */
  .radio-container.is-disabled {
    user-select: none;
    cursor: not-allowed;
    opacity: 0.5;
  }

  /* 按钮组样式 */
  .is-btn-group {
    .radio-container {
      display: inline-block;
      .radio-base {
        &:checked ~ .radio-label {
          color: #fff;
          background: red;
        }
      }
      .radio-box {
        display: none;
      }
      .radio-label {
        border: 1px solid #ccc;
        border-right: 0;
        padding: 10px 10px;
      }
      &:first-of-type .radio-label {
        border-radius: 20px 0 0 20px;
      }
      &:last-of-type .radio-label {
        border-right: 1px solid #ccc;
        border-radius: 0 20px 20px 0;
      }
    }
  }
</style>