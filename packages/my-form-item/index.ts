// 导入组件，组件必须声明name
import MyFormItem from './src/MyFormItem.vue';

// 为组件提供install安装方法，供按需引入
MyFormItem.install = (Vue: any) => {
    Vue.component('MyFormItem', MyFormItem)
}

// 默认导出组件
export default MyFormItem;
