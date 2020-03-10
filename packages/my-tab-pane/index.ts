// 导入组件，组件必须声明name
import MyTabPane from './src/MyTabPane.vue';

// 为组件提供install安装方法，供按需引入
MyTabPane.install = (Vue: any) => {
    Vue.component('MyTabPane', MyTabPane)
}

// 默认导出组件
export default MyTabPane;
