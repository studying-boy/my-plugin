<template>
  <div class="select-container" tabindex="-1" @blur="closeOption">
    <input class="select" :class="{'is-disabled': disabled}" type="search" v-model="selfShow" :placeholder="placeholder" :disabled="disabled" @focus="showSelectWrapper">
    <div ref="selectWrapper" class="select-wrapper select-hide">
      <div class="select-item" v-for="(item, index) in options" @click="selectOption(item, index)">{{ item + ' ' + index }}</div>
    </div>
  </div>
</template>

<script lang="ts">
  import {Vue, Component, Prop, Emit, Model, Watch, Inject} from 'vue-property-decorator';

  @Component({
    name: 'MySelect.vue',
    mounted() {
      if(this.propVal) {
        this.selfShow = this.options[this.propVal];
      }
      this.$nextTick(() => {
        document.querySelector('body').addEventListener('click', (e) => {
          if (Array.from(e.target.classList).includes('select')) {
            return;
          }
          this.$refs.selectWrapper.classList.add('select-hide');
        })
      })
    },
    destroyed() {
      document.querySelector('body').removeEventListener('click', (e) => {
        console.log(e.target.classList);
        if (Array.from(e.target.classList).includes('select')) {
          return;
        }
        this.$refs.selectWrapper.classList.add('select-hide');
      })
    }
  })
  export default class MyInput extends Vue {
    @Prop() placeholder: string;
    @Prop() disabled: boolean;
    @Prop() options: selectType;

    @Model('change')
    propVal: string

    selfShow: string = '';

    get selfVal(): string {
      return this.propVal
    };
    set selfVal(newValue) {
    }
    showSelectWrapper() {
      this.$refs.selectWrapper.classList.remove('select-hide');
    }
    selectOption(item, index) {
      this.selfShow = item;
      this.$refs.selectWrapper.classList.add('select-hide');
      this.emitChange(index);
    }
    closeOption() {
      this.$refs.selectWrapper.classList.add('select-hide');
    }

    @Emit('change')
    emitChange(newValue): void {

    }
  }
</script>

<style lang="scss" rel="stylesheet/scss" scoped>
  .select-container {
    position: relative;
    display: inline-block;
    vertical-align: top;
    .select {
      width: 200px;
      height: 40px;
      padding: 10px;
      box-sizing: border-box;
      border: 1px solid #ccc;
      border-radius: 4px;
      &.is-disabled {
        cursor: not-allowed;
      }
    }
    .select-wrapper {
      position: absolute;
      top: 50px;
      left: 0;
      width: 100%;
      margin: 0;
      box-sizing: border-box;
      border: 1px solid #ccc;
      border-radius: 4px;
      line-height: 26px;
      font-size: 14px;
      &.select-hide {
        visibility: hidden !important;
      }
      .select-item {
        padding: 10px;
        border-bottom: 1px solid #ccc;
        cursor: pointer;
        &:last-of-type {
          border-bottom: 0;
        }
      }
    }
  }

  /* 表单验证下的样式 */
  .form-item-true, .form-item-false {
    .select {
      outline: none;
    }
  }
  .form-item-true {
    .select {
      border: 1px solid greenyellow;
    }
  }
  .form-item-false {
    .select {
      border: 1px solid red;
    }
  }
</style>