// 导入组件，组件必须声明name
import MyForm from './src/MyForm.vue';

// 为组件提供install安装方法，供按需引入
MyForm.install = (Vue: any) => {
    Vue.component('MyForm', MyForm)
}

// 默认导出组件
export default MyForm;
