// 导入组件，组件必须声明name
import MyRadio from './src/MyRadio.vue';

// 为组件提供install安装方法，供按需引入
MyRadio.install = (Vue: any) => {
    Vue.component('MyRadio', MyRadio)
}

// 默认导出组件
export default MyRadio;
