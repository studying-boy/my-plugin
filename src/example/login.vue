<template>
  <div class="box">
    1111111111111111111111111111
  </div>
</template>

<script lang="ts">
  import {Vue, Component, Prop, Emit, Model, Watch} from "vue-property-decorator";

  @Component({
    name: "login"
  })
  export default class login extends Vue {

  }
</script>

<style lang="scss" rel="stylesheet/scss" scoped>
  .box {
    width: 100%;
    height: 30px;
    background: red;
  }
</style>