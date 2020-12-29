<p align="center">
  <a href="https://travis-ci.org/ElemeFE/element">
    <img src="https://travis-ci.org/ElemeFE/element.svg?branch=master">
  </a>
  <a href="LICENSE">
    <img src="https://img.shields.io/badge/License-MIT-yellow.svg">
  </a>
</p>

> A Vue.js 2.0 UI Toolkit for Web.

部分的ElementUi 组件
<ul>
  <li>date-picker</li>
  <li>scrollbar</li>
</ul>

## Install
```shell
npm install diamond2221-ui -S
```

## Quick Start
``` javascript
import Vue from 'vue'
import 'diamond2221-ui/lib/theme-chalk/index.css'
import DiamondUi from 'diamond2221-ui'

Vue.use(DiamondUi)

// or
import {
  DatePicker,
  Scrollbar
  // ...
} from 'diamond2221-ui'

Vue.component(DatePicker.name, DatePicker)
Vue.component(Scrollbar.name, Scrollbar)
```

## Browser Support
Modern browsers and Internet Explorer 10+.

## LICENSE
[MIT](LICENSE)
