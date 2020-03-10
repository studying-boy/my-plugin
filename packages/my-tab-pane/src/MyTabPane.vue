<template>
  <div class="tab-pane" :class="{'tab-pane-active': isActive}" v-show="isActive">
    <slot></slot>
  </div>
</template>

<script lang="ts">
  import {Vue, Component, Prop, Emit, Model, Watch} from 'vue-property-decorator';

  @Component({
    name: 'MyTabPane',
  })
  export default class MyTabPane extends Vue {
    @Prop() name: string;
    get isActive() {
      return this.$parent.tabActive === this.name;
    }
  }
</script>

<style lang="scss" rel="stylesheet/scss" scoped>
  .tab-pane {
  }
</style>