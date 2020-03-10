<template>
  <div id="app">
    <MyNavs v-model="navActive" :routeObj="routeObj">
    </MyNavs>
    <MyTabs v-model="tabActive" :tabs="['checkbox', 'radio', 'input', 'select', 'form', 'datePicker', 'table']"
            @changeTab="handleChangeTab" direction="col">
      <!--多选框-->
      <MyTabPane name="checkbox">
        <MyCheckbox label="游泳" v-model="checkboxValue"></MyCheckbox>
        <MyCheckbox label="游泳" v-model="checkboxValue" :isSwitch="true"></MyCheckbox>
        <MyCheckboxGroup v-model="checkboxList" :disabled="true">
          <MyCheckbox label="1" val="1"></MyCheckbox>
          <MyCheckbox label="2" val="2"></MyCheckbox>
          <MyCheckbox label="3" val="3"></MyCheckbox>
        </MyCheckboxGroup>
      </MyTabPane>
      <!--单选框-->
      <MyTabPane name="radio">
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
      </MyTabPane>
      <!--输入框-->
      <MyTabPane name="input">
        <MyInput placeholder="你在说什么" v-model="inputVal" v-enter-number></MyInput>
      </MyTabPane>
      <!--下拉框-->
      <MyTabPane name="select">
        <MySelect v-model="selectVal" placeholder="你在说什么" :options="options"></MySelect>
      </MyTabPane>
      <!--表单-->
      <MyTabPane name="form">
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
      </MyTabPane>
      <!--时间选择器-->
      <MyTabPane name="datePicker">
        <MyDatePicker v-model="currentDate"></MyDatePicker>
      </MyTabPane>
      <!--表格-->
      <MyTabPane name="table">
        <MyTable :tableData="tableData" :header="['id', '创建时间', '开始时间']" :border="true"></MyTable>
      </MyTabPane>
    </MyTabs>
    <MyButton label="提交" @click="show" :isLoading="isLoading"></MyButton>
    <hr>
  </div>
</template>

<script lang="ts">
  import {Component, Vue, Watch} from "vue-property-decorator";

  interface SelectType {
    [propName: string]: string;
  }
  interface TableItem {
    id: Number;
    createTime: String;
    statsTime: String;
  }

  @Component({
    name: "app",
    components: {
      // MyButton,
    },
    mounted() {
    }
  })
  export default class App extends Vue {
    routeObj: object = {
      "main": "/view/main",
      "404": "/view/404"
    };
    navActive: string = "404";
    tabActive: string = "table";
    radioValue: any = "";
    radioList: any = "2";
    checkboxValue: any = true;
    checkboxList: Array<any> = ["2", "3"];
    inputVal: string = "";
    selectVal: string = "guangzhou";
    options: SelectType = {
      "guangzhou": "广州",
      "shenzhen": "深圳",
      "beijing": "北京"
    };
    isLoading: boolean = false;
    formResult: object = {
      isValid: false
    };
    validItemArr: Array<string> = ["name", "password", "phone", "smsCode"];
    currentDate: String = "2020.2.11";
    tableData: Array<TableItem> = [
      {id: 1, createTime: "2020-02-28", statsTime: "2020-01-15",},
      {id: 1, createTime: "2020-02-28", statsTime: "2020-01-07",},
      {id: 1, createTime: "2020-02-28", statsTime: "2020-01-07",},
      {id: 1, createTime: "2020-02-28", statsTime: "2020-01-06",},
      {id: 1, createTime: "2020-02-28", statsTime: "2020-01-07",},
      {id: 1, createTime: "2020-02-28", statsTime: "2020-01-07",},
      {id: 1, createTime: "2020-02-28", statsTime: "2020-01-16",},
      {id: 1, createTime: "2020-02-28", statsTime: "2020-01-06",},
      {id: 1, createTime: "2020-02-28", statsTime: "2020-01-06",},
      {id: 1, createTime: "2020-02-28", statsTime: "2020-01-06",},
      {id: 1, createTime: "2020-02-28", statsTime: "2020-02-17",}]

    @Watch("inputVal")
    consoleInput(newValue: any) {
    }

    handleChangeTab(val: string) {
      this.tabActive = val;
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
        console.log("select:                       " + this.selectVal);
        console.log(this.formResult);
        this.isLoading = false;
      }, 1000)
    };

    checkName(val: string) {
      if (!val) {
        return "请输入姓名"
      } else if (val === "111") {
        return "";
      }
      return "请输入正确的姓名";
    };

    checkPassword(val: string) {
      if (!val) {
        return "请输入密码"
      } else if (val === "111") {
        return "";
      }
      return "请输入正确的密码";
    };

    checkPhone(val: string) {
      if (!val) {
        return "请输入手机号"
      } else if (val === "111") {
        return "";
      }
      return "请输入正确的手机";
    };

    checkSmsCode(val: string) {
      if (!val) {
        return "请输入短信验证码"
      } else if (val === "111") {
        return "";
      }
      return "请输入正确的短信验证码";
    };

    getSmsCode() {
      alert("成功发送验证码");
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
    color: #2c3e50;
    padding: 30px 200px;
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
