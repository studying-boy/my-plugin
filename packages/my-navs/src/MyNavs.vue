<template>
  <div class="navs-container" :class="direction === 'row' ? 'navs-row' : 'navs-col'">
    <div class="navs">
      <span class="nav-item" v-for="(item, index) in navTitleArr" :key="index" :class="{'active': item === navActive}" @click="changeNav(item)">{{ item }}</span>
    </div>
    <router-view></router-view>
  </div>
</template>

<script lang="ts">
  import {Vue, Component, Prop, Emit, Model, Watch} from 'vue-property-decorator';

  @Component({
    name: 'MyNavs',
  })
  export default class MyNavs extends Vue {
    @Prop() routeObj: object;
    @Prop({
      default: 'row'
    })
    direction: string;
    get routeAddress(): string {
      return this.$route.path;
    };

    @Model('change')
    navActive: string

    @Emit('change')
    emitChange(newValue: any): void {
    }

    @Watch('routeAddress') // 监听地址栏是否变化
    onChangeRouteAddress(newValue) {
      console.log(newValue);
      for( const key in this.routeObj ) {
        console.log(this.routeObj[key]);
        if(this.routeObj[key] === newValue) {
          this.emitChangeNav(key);
        }
      }
    }

    get navTitleArr(): Array<string> {
      return Object.keys(this.routeObj);
    };

    changeNav(item) {
      this.emitChangeNav(item);
      this.$router.push(this.routeObj[item]);
    }

    @Emit('change')
    emitChangeNav(newValue: any): void {
    }
  }
</script>

<style lang="scss" rel="stylesheet/scss" scoped>
  .navs-container {
    .navs {
      display: flex;
      .nav-item {
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

  .navs-col {
    display: flex;
    .navs {
      flex-direction: column;
      ~ div {
        flex: 1;
        margin-left: 20px;
      }
    }
  }
</style>