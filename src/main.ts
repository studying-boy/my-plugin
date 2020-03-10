import Vue from "vue";
import App from "./App.vue";

import router from "./router/index.js";
import directive from "./directive/index";
Object.keys(directive).forEach(k => {
  Vue.directive(k, directive[k]);
});

// 导入组件库
import MyButton from "../packages/my-button";
import MyCheckbox from "../packages/my-checkbox/index";
import MyRadio from "../packages/my-radio/index";
import MyRadioGroup from "../packages/my-radio-group/index";
import MyCheckboxGroup from "../packages/my-checkbox-group/index";
import MyInput from "../packages/my-input/index";
import MyFormItem from "../packages/my-form-item/index";
import MyForm from "../packages/my-form/index";
import MyTabs from "../packages/my-tabs/index";
import MyTabPane from "../packages/my-tab-pane/index";
import MyNavs from "../packages/my-navs/index";
import MySelect from "../packages/my-select/index";
import MyDatePicker from "../packages/my-date-picker/index";
import MyTable from "../packages/my-table/index";

// 注册组件库
Vue.use(MyButton as any);
Vue.use(MyCheckbox as any);
Vue.use(MyRadio as any);
Vue.use(MyRadioGroup as any);
Vue.use(MyCheckboxGroup as any);
Vue.use(MyInput as any);
Vue.use(MyFormItem as any);
Vue.use(MyForm as any);
Vue.use(MyTabs as any);
Vue.use(MyTabPane as any);
Vue.use(MyNavs as any);
Vue.use(MySelect as any);
Vue.use(MyDatePicker as any);
Vue.use(MyTable as any);

Vue.config.productionTip = false;

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
