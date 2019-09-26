<template>
    <div class="radio-group-container" :class="[{'is-disabled': disabled}, {'is-btn-group': isBtnGroup}]" name="checkbox-group">
      <slot></slot>
    </div>
</template>

<script lang="ts">
    import { Vue, Prop, Component, Model, Emit, Watch } from 'vue-property-decorator'

    @Component({
    })
    export default class MyRadioGroup extends Vue{
        @Prop({
            default: false
        }) disabled: boolean;
        @Prop({
            default: false
        }) isBtnGroup: boolean;
        @Model('change', {

        })
        propValueArr: any;

        @Watch('propValueArr')
        onChangePropValueArr(newValue) {
            this.emitChange(newValue);
        }

        @Emit('change')
        emitChange(newValue: any): void {

        }
    }
</script>

<style lang="scss" rel="stylesheet/scss" scoped>
    .radio-container + .radio-container {
        margin-left: 20px;
    }

    .is-btn-group{
      .radio-container + .radio-container {
        margin-left: 0px;
      }
    }

    .radio-group-container.is-disabled {
      user-select: none;
      cursor: not-allowed;
      opacity: 0.5;
    }
</style>