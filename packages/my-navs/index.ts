// 导入组件，组件必须声明name
import MyNavs from './src/MyNavs.vue';

// 为组件提供install安装方法，供按需引入
MyNavs.install = (Vue: any) => {
    Vue.component('MyNavs', MyNavs)
}

// 默认导出组件
export default MyNavs;
