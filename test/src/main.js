// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './app.vue'
import router from './router'
import iView from 'iview'
/*  使用 CSS */
import 'iview/dist/styles/iview.css'
import axios from 'axios'
import VueAxios from 'vue-axios'
import Element from 'element-ui'

// Vue.use(VueRouter);
Vue.use(VueAxios, axios)
Vue.use(Element)
Vue.use(iView)
Vue.config.debug = true

router.afterEach(() => {
})

Vue.config.productionTip = false

/* 讀取條 */
iView.LoadingBar.config({
  color: '#2d8cf0',
  failedColor: '#ff9900',
  height: 6
})

// const app = Vue(App).use(router)
// app.mount('#app')

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
