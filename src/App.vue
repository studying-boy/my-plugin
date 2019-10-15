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
    <MyInput placeholder="你在说什么" v-model="inputVal"></MyInput>
    <MyButton label="提交" @click="show" :isLoading="isLoading"></MyButton>
    <hr>
    <MyForm class="register-form" v-model="formResult" :validItemArr="validItemArr">
      <MyFormItem label="姓名" :validFunc="checkName" name="name">
        <MyInput v-model="formResult['name']"></MyInput>
      </MyFormItem>
      <MyFormItem label="密码" :validFunc="checkPassword" name="password">
        <MyInput v-model="formResult['password']" type="password"></MyInput>
      </MyFormItem>
      <MyFormItem label="手机号" :validFunc="checkPhone" name="phone">
        <MyInput v-model="formResult['phone']"></MyInput>
        <MyButton label="获取验证码" @click="getSmsCode" :disabled="!formResult.phoneResult"></MyButton>
      </MyFormItem>
      <MyFormItem label="短信验证码" :validFunc="checkSmsCode" name="smsCode">
        <MyInput v-model="formResult['smsCode']"></MyInput>
      </MyFormItem>
      <MyFormItem label="留言" name="mark">
        <MyInput v-model="formResult['mark']"></MyInput>
      </MyFormItem>
      <MyButton label="提交" @click="commit" :isLoading="isLoading" :disabled="!formResult.isValid"></MyButton>
    </MyForm>
  </div>
</template>

<script lang="ts">
  import {Component, Vue, Watch} from "vue-property-decorator";

  @Component({
    name: "app",
    components: {
      // MyButton,
    },
    mounted() {
    }
  })
  export default class App extends Vue {
    radioValue: any = "";
    radioList: any = "2";
    checkboxValue: any = true;
    checkboxList: Array<any> = ["2", "3"];
    inputVal: string = "";
    isLoading: boolean = false;
    formResult: object = {
      isValid: false
    };
    validItemArr: Array = ['name', 'password', 'phone', 'smsCode'];

    @Watch('inputVal')
    consoleInput(newValue) {
    }

    show(): void {
      if (this.isLoading == true) {
        return;
      }
      this.isLoading = true;
      setTimeout(() => {
        console.log("checkbox:               " + this.checkboxValue);
        console.log("checkboxList:               " + this.checkboxList);
        console.log("radio:                       " + this.radioValue);
        console.log("radioList:                       " + this.radioList);
        console.log("input:                       " + this.inputVal);
        console.log(this.formResult);
        this.isLoading = false;
      }, 1000)
    };

    checkName(val) {
      if(!val) {
        return '请输入姓名'
      } else if(val === '111') {
        return '';
      }
      return '请输入正确的姓名';
    };
    checkPassword(val) {
      if(!val) {
        return '请输入密码'
      } else if(val === '111') {
        return '';
      }
      return '请输入正确的密码';
    };
    checkPhone(val) {
      if(!val) {
        return '请输入手机号'
      } else if(val === '111') {
        return '';
      }
      return '请输入正确的手机';
    };
    checkSmsCode(val) {
      if(!val) {
        return '请输入短信验证码'
      } else if(val === '111') {
        return '';
      }
      return '请输入正确的短信验证码';
    };
    getSmsCode() {
      alert('成功发送验证码');
    }

    commit() {
      if (this.formResult.isValid) {
        this.isLoading = true;
        setTimeout(() => {
          console.log(this.formResult);
          this.isLoading = false;
        }, 1000)
      }
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

  hr {
    margin: 50px;
  }

  .register-form {
    width: 800px;
    margin: 0 auto;
    padding: 50px;
    box-sizing: border-box;
    background: #eee;
  }
</style>
