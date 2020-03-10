// 导入组件，组件必须声明name
import MySelect from './src/MySelect.vue';

// 为组件提供install安装方法，供按需引入
MySelect.install = (Vue: any) => {
    Vue.component('MySelect', MySelect)
}

// 默认导出组件
export default MySelect;
