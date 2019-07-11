// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from  'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import axios from 'axios'
import  qs from 'qs'

Vue.config.productionTip = false;
Vue.use(ElementUI);

Vue.prototype.$axios=axios;
Vue.prototype.$http=axios.create({
  baseURL:process.env.BASE_URL,
  headers: {
    'Content-type': 'application/x-www-form-urlencoded'
  }
});
// http请求request发送拦截器 如果是post方法
Vue.prototype.$http.interceptors.request.use(config => {
  if (config.method === 'post') {
    config.data = qs.stringify(config.data, {
      arrayFormat: 'brackets'
    })
  }
  return config;
});
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
