// 导入组件，组件必须声明name
import MyTabs from './src/MyTabs.vue';

// 为组件提供install安装方法，供按需引入
MyTabs.install = (Vue: any) => {
    Vue.component('MyTabs', MyTabs)
}

// 默认导出组件
export default MyTabs;
