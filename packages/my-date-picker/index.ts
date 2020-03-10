// 导入组件，组件必须声明name
import MyDatePicker from "./src/MyDatePicker.vue";

// 为组件提供install安装方法，供按需引入
MyDatePicker.install = (Vue: any) => {
  Vue.component("MyDatePicker", MyDatePicker);
};

// 默认导出组件
export default MyDatePicker;
