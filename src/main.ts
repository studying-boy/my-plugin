import Vue from 'vue';
import App from './App.vue';

// 导入组件库
import MyButton from '../packages/my-button';
import MyCheckbox from '../packages/my-checkbox/index';
import MyRadio from '../packages/my-radio/index';
import MyRadioGroup from '../packages/my-radio-group/index';
import MyCheckboxGroup from '../packages/my-checkbox-group/index';
import MyInput from '../packages/my-input/index';
import MyFormItem from '../packages/my-form-item/index';
import MyForm from '../packages/my-form/index';

// 注册组件库
Vue.use(MyButton as any);
Vue.use(MyCheckbox as any);
Vue.use(MyRadio as any);
Vue.use(MyRadioGroup as any);
Vue.use(MyCheckboxGroup as any);
Vue.use(MyInput as any);
Vue.use(MyFormItem as any);
Vue.use(MyForm as any);

Vue.config.productionTip = false;

new Vue({
  render: (h) => h(App),
}).$mount('#app');


