<template>
    <div class="checkbox-group-container" :class="{'is-disabled': disabled}" name="checkbox-group">
        <slot></slot>
    </div>
</template>

<script lang="ts">
    import { Vue, Component, Prop, Emit, Model, Watch } from 'vue-property-decorator';

    @Component({
        name: 'MyCheckboxGroup',
    })
    export default class MyCheckboxGroup extends Vue{
        @Prop() labelArr: array<string>;                               // 展示文字数组
        @Prop() valArr: array<string>;                                 // 选中值数组
        @Prop({
            default: false
        }) disabled: boolean;

        @Model('change', {

        })
        propValueArr: array<any>                                           // 父组件传过来绑定的值

        @Watch('propValueArr')
        onChangePropValueArr(newValue) {
            this.emitInput(newValue);
        }

        // 将新值添加到数组中
        selectItem(item) {
            const { propValueArr } = this;
            this.emitInput([...propValueArr, item]);
        }
        // 将新值从数组中删除
        deleteItem(item) {
            const { propValueArr } = this;
            this.emitInput( propValueArr.filter(selectItem => selectItem !== item))
        }

        @Emit('change')
        emitInput(realArr: array<any>): void {
            console.log(realArr);
        }
    }
</script>

<style lang="scss" rel="stylesheet/scss" scoped>
  .checkbox-group-container.is-disabled {
    user-select: none;
    cursor: not-allowed;
    opacity: 0.5;
  }
</style>