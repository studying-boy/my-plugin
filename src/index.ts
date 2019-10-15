/* 打包配置文件 */
import MyCheckbox from '../packages/my-checkbox/index';
import MyCheckboxGroup from '../packages/my-checkbox-group/index';

import MyButton from '../packages/my-button/index';
import MyRadio from '../packages/my-radio/index';
import MyRadioGroup from '../packages/my-radio-group/index';
import MyInput from '../packages/my-input/index';
import MyFormItem from '../packages/my-form-item/index';
import MyForm from '../packages/my-form/index';

const components = [
    MyCheckbox,
    MyCheckboxGroup,
    MyButton,
    MyRadio,
    MyRadioGroup,
    MyInput,
    MyFormItem,
    MyForm
]

const componentsName: string[] = [
    'MyCheckbox',
    'MyCheckboxGroup',
    'MyButton',
    'MyRadio',
    'MyRadioGroup',
    'MyInput',
    'MyFormItem',
    'MyForm'
]

const install = (Vue: any, opts = {}) => {
    components.forEach((component, i) => {
        Vue.component(componentsName[i], component);
    })
}

if (typeof window !== 'undefined' && (window as any).Vue) {
    install((window as any).Vue);
}

const API = {
    version: '0.0.0',
    install,
    MyCheckbox,
    MyCheckboxGroup,
    MyButton,
    MyRadio,
    MyRadioGroup,
    MyInput,
    MyFormItem,
    MyForm
}
export {
    MyCheckbox,
    MyCheckboxGroup,
    MyButton,
    MyRadio,
    MyRadioGroup,
    MyInput,
    MyFormItem,
    MyForm
}
export default API
