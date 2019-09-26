// import MyButton from './my-button/src/MyButton';
// import MyRadio from './my-radio/src/MyRadio';
// import MyRadioGroup from './my-radio-group/src/MyRadioGroup';
import MyCheckbox from '../packages/my-checkbox/index';
import MyCheckboxGroup from '../packages/my-checkbox-group/index';

import MyButton from '../packages/my-button/index';
import MyRadio from '../packages/my-radio/index';
import MyRadioGroup from '../packages/my-radio-group/index';

const components = [
    MyCheckbox,
    MyCheckboxGroup,
    MyButton,
    MyRadio,
    MyRadioGroup
]

const componentsName: string[] = [
    'MyCheckbox',
    'MyCheckboxGroup',
    'MyButton',
    'MyRadio',
    'MyRadioGroup'
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
    MyRadioGroup
}
export {
    MyCheckbox,
    MyCheckboxGroup,
    MyButton,
    MyRadio,
    MyRadioGroup
}
export default API
