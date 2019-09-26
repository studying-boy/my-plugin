// 导入组件，组件必须声明name
import MyRadioGroup from './src/MyRadioGroup.vue';

// 为组件提供install安装方法，供按需引入
MyRadioGroup.install = (Vue: any) => {
    Vue.component('MyRadioGroup', MyRadioGroup)
}

// 默认导出组件
export default MyRadioGroup;
