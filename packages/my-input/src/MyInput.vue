<template>
  <div class="input-container">
    <input type="text" :placeholder="placeholder" :type="type" class="input">
  </div>
</template>

<script lang="ts">
  import {Vue, Component, Prop, Emit, Model, Watch} from "vue-property-decorator";

  @Component({
    name: "MyInput"
  })
  export default class MyInput extends Vue {
    @Prop() placeholder: string;
    @Prop() type: string;
  }
</script>

<style lang="scss" rel="stylesheet/scss" scoped>
  .input-container {
    .input{
      width: 80%;
      height: 30px;
      padding-left: 10px;
      border: 1px solid #ccc;
      border-radius: 4px;
    }
  }
</style>