// 导入组件，组件必须声明name
import MyButton from './src/MyButton.vue';

// 为组件提供install安装方法，供按需引入
MyButton.install = (Vue: any) => {
    Vue.component('MyButton', MyButton)
}

// 默认导出组件
export default MyButton;
