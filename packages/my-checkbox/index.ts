// 导入组件，组件必须声明name
import MyCheckbox from './src/MyCheckbox.vue';

// 为组件提供install安装方法，供按需引入
MyCheckbox.install = (Vue: any) => {
    Vue.component('MyCheckbox', MyCheckbox)
}

// 默认导出组件
export default MyCheckbox;
