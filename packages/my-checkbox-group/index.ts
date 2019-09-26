// 导入组件，组件必须声明name
import MyCheckboxGroup from './src/MyCheckboxGroup.vue';

// 为组件提供install安装方法，供按需引入
MyCheckboxGroup.install = (Vue: any) => {
    Vue.component('MyCheckboxGroup', MyCheckboxGroup)
}

// 默认导出组件
export default MyCheckboxGroup;
