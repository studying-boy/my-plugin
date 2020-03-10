/* 打包配置文件 */
import MyCheckbox from "../packages/my-checkbox/index";
import MyCheckboxGroup from "../packages/my-checkbox-group/index";

import MyButton from "../packages/my-button/index";
import MyRadio from "../packages/my-radio/index";
import MyRadioGroup from "../packages/my-radio-group/index";
import MyInput from "../packages/my-input/index";
import MyFormItem from "../packages/my-form-item/index";
import MyForm from "../packages/my-form/index";
import MyTabs from "../packages/my-tabs/index";
import MyTabPane from "../packages/my-tab-pane/index";
import MyNavs from "../packages/my-navs/index";
import MySelect from "../packages/my-select/index";
import MyDatePicker from "../packages/my-date-picker/index";
import MyTable from "../packages/my-table/index";

const components = [
  MyCheckbox,
  MyCheckboxGroup,
  MyButton,
  MyRadio,
  MyRadioGroup,
  MyInput,
  MyFormItem,
  MyForm,
  MyTabs,
  MyTabPane,
  MyNavs,
  MySelect,
  MyDatePicker
];

const componentsName: string[] = [
  "MyCheckbox",
  "MyCheckboxGroup",
  "MyButton",
  "MyRadio",
  "MyRadioGroup",
  "MyInput",
  "MyFormItem",
  "MyForm",
  "MyTabs",
  "MyTabPane",
  "MyNavs",
  "MySelect",
  "MyDatePicker"
];

const install = (Vue: any, opts = {}) => {
  components.forEach((component, i) => {
    Vue.component(componentsName[i], component);
  });
};

if (typeof window !== "undefined" && (window as any).Vue) {
  install((window as any).Vue);
}

const API = {
  version: "0.0.0",
  install,
  MyCheckbox,
  MyCheckboxGroup,
  MyButton,
  MyRadio,
  MyRadioGroup,
  MyInput,
  MyFormItem,
  MyForm,
  MyTabs,
  MyTabPane,
  MyNavs,
  MySelect,
  MyDatePicker
};
export {
  MyCheckbox,
  MyCheckboxGroup,
  MyButton,
  MyRadio,
  MyRadioGroup,
  MyInput,
  MyFormItem,
  MyForm,
  MyTabs,
  MyTabPane,
  MyNavs,
  MySelect,
  MyDatePicker
};
export default API;
