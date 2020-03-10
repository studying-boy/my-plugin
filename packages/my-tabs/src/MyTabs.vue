<template>
  <div class="tabs-container" :class="direction === 'row' ? 'tabs-row' : 'tabs-col'">
    <div class="tabs">
      <span class="tab-item" v-for="(item, index) in tabs" :key="index" :class="{'active': index === tabActiveIndex}" @click="changeTab(item)">{{ item }}</span>
    </div>
    <slot></slot>
  </div>
</template>

<script lang="ts">
  import {Vue, Component, Prop, Emit, Model, Watch} from 'vue-property-decorator';

  @Component({
    name: 'MyTabs',
  })
  export default class MyTabs extends Vue {
    @Prop() tabs: Array;
    @Prop({
      default: 'row'
    })
    direction: string;

    @Model('change')
    tabActive: string

    @Emit('change')
    emitChange(newValue: any): void {
    }

    get tabActiveIndex(): number {
      for(const index in this.tabs) {
        if( this.tabs[index] === this.tabActive) {
          return Number(index);
        }
      }
      return 0;
    }

    changeTab(item) {
      this.emitChangeTab(item);
    }

    @Emit('changeTab')
    emitChangeTab(newValue: any): void {
    }
  }
</script>

<style lang="scss" rel="stylesheet/scss" scoped>
  .tabs-container {
    .tabs {
      display: flex;
      .tab-item {
        display: flex;
        width: 100px;
        padding: 10px;
        box-sizing: border-box;
        justify-content: center;
        border: 1px solid #eee;
        cursor: pointer;
        &.active {
          background: skyblue;
          color: #fff;
        }
      }
    }
  }

  .tabs-col {
    display: flex;
    .tabs {
      flex-direction: column;
      ~ div {
        flex: 1;
        margin-left: 20px;
      }
    }
  }
</style>