import DmInput from './src/input';

/* istanbul ignore next */
DmInput.install = function(Vue) {
  Vue.component(DmInput.name, DmInput);
};

export default DmInput;
