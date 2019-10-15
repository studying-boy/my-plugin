<template>
  <div class="btn-container" :class="[{'is-loading':isLoading},{'is-disabled': disabled}]">
    <button @click="handleClick" class="btn" :disabled="disabled">{{ label }}</button>
    <span :class="{'loading':isLoading}"></span>
  </div>
</template>

<script lang="ts">
  import {Vue, Component, Prop, Emit} from "vue-property-decorator";

  @Component({
    name: "MyButton",
    mounted() {
    }
  })
  export default class MyButton extends Vue {
    @Prop() label: string;
    @Prop({
      default: false
    }) disabled: boolean;
    @Prop({
      type: Boolean,
      default: false
    }) isLoading;

    handleClick() {
      this.emitClick();
    }

    @Emit("click")
    emitClick(): void {
    }
  }
</script>

<style lang="scss" rel="stylesheet/scss" scoped>
  .btn-container {
    position: relative;
    display: inline-block;
    width: 150px;
    .btn {
      width: 150px;
      height: 40px;
      padding: 10px 20px;
      box-sizing: border-box;
      background: #fff;
      border: 1px solid #ccc;
      border-radius: 4px;
      outline: none;
      cursor: pointer;
      &.loading-btn {
        opacity: 0.5;
      }
      &:active {
        position: relative;
        top: 3px;
      }
      &:before {
        content: '';
        position: absolute;
        left: 0;
        bottom: 0px;
        width: 100%;
        height: 5px;
        background: skyblue;
        transform: scale(0);
        transition: all 0.3s;
      }
      &:hover:before {
        transform: scale(1);
      }
    }
    .loading {
      position: absolute;
      left: 50%;
      top: 50%;
      width: 20px;
      height: 20px;
      border: 2px solid;
      border-color: #333 #333 transparent;
      border-radius: 50%;
      animation: loading 1s linear infinite;
    }
  }

  @keyframes loading {
    0% {
      transform: translateX(-50%) translateY(-50%) rotate(0deg);
    }
    100% {
      transform: translateX(-50%) translateY(-50%) rotate(360deg);
    }
  }

  .is-loading {
    border: 1px solid #ccc;
    .btn {
      filter: blur(5px);
      &:hover:before {
        transform: scale(0);
      }
    }
  }

  .is-disabled {
    .btn {
      background: #ccc;
      user-select: none;
      cursor: not-allowed;
      &:hover:before {
        transform: scale(0);
      }
    }
  }

</style>