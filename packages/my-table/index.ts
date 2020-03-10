// 导入组件，组件必须声明name
import MyTable from "./src/MyTable.vue";

// 为组件提供install安装方法，供按需引入
MyTable.install = (Vue: any) => {
  Vue.component("MyTable", MyTable);
};

// 默认导出组件
export default MyTable;
