<template>
  <div id="app">
    <MyCheckbox label="游泳" v-model="checkboxValue"></MyCheckbox>
    <MyCheckbox label="游泳" v-model="checkboxValue" :isSwitch="true"></MyCheckbox>
    <MyCheckboxGroup v-model="checkboxList" :disabled="true">
      <MyCheckbox label="1" val="1"></MyCheckbox>
      <MyCheckbox label="2" val="2"></MyCheckbox>
      <MyCheckbox label="3" val="3"></MyCheckbox>
    </MyCheckboxGroup>
    <MyRadio label="游泳" v-model="radioValue" :val="true"></MyRadio>
    <MyRadioGroup v-model="radioList" :isBtnGroup="false">
      <MyRadio label="乒乓球" val="1"></MyRadio>
      <MyRadio label="羽毛球" val="2"></MyRadio>
      <MyRadio label="保龄球" val="3"></MyRadio>
    </MyRadioGroup>
    <MyRadioGroup v-model="radioList" :isBtnGroup="true">
      <MyRadio label="乒乓球" val="1"></MyRadio>
      <MyRadio label="羽毛球" val="2"></MyRadio>
      <MyRadio label="保龄球" val="3"></MyRadio>
    </MyRadioGroup>
    <MyInput placeholder="你在说什么"></MyInput>
    <MyButton label="提交" @click="show" :isLoading="isLoading"></MyButton>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component({
    name: 'app',
    components: {
      // MyButton,
    },
    mounted() {
    }
})
export default class App extends Vue {
    radioValue: any = '';
    radioList: any = '2';
    checkboxValue: any = true;
    checkboxList: Array<any> = ['2','3'];
    isLoading: boolean = false;
    show(): void {
      if (this.isLoading == true) {
        return;
      }
      this.isLoading = true;
      setTimeout(() => {
        console.log('checkbox:               ' + this.checkboxValue);
        console.log('checkboxList:               ' + this.checkboxList);
        console.log('radio:                       ' + this.radioValue);
        console.log('radioList:                       ' + this.radioList);
        this.isLoading = false;
      }, 6000)

    }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
