/* Automatically generated by './build/bin/build-entry.js' */

import Input from '../packages/input/index.js';
import DatePicker from '../packages/date-picker/index.js';
import Button from '../packages/button/index.js';
import Icon from '../packages/icon/index.js';
import Scrollbar from '../packages/scrollbar/index.js';
import locale from 'diamond2221-ui/src/locale';

const components = [
  Input,
  DatePicker,
  Button,
  Icon,
  Scrollbar
];

const install = function(Vue, opts = {}) {
  locale.use(opts.locale);
  locale.i18n(opts.i18n);

  components.forEach(component => {
    Vue.component(component.name, component);
  });

  Vue.prototype.$ELEMENT = {
    size: opts.size || '',
    zIndex: opts.zIndex || 2000
  };
};

/* istanbul ignore if */
if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue);
}

export default {
  version: '1.0.11',
  locale: locale.use,
  i18n: locale.i18n,
  install,
  Input,
  DatePicker,
  Button,
  Icon,
  Scrollbar
};
