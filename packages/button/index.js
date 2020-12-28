import DmButton from './src/button';

/* istanbul ignore next */
DmButton.install = function(Vue) {
  Vue.component(DmButton.name, DmButton);
};

export default DmButton;
