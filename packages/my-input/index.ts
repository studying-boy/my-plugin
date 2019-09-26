// 导入组件，组件必须声明name
import MyInput from './src/MyInput.vue';

// 为组件提供install安装方法，供按需引入
MyInput.install = (Vue: any) => {
    Vue.component('MyInput', MyInput)
}

// 默认导出组件
export default MyInput;
