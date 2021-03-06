// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import echarts from 'echarts'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import './assets/normalize.css'
import BaiduMap from 'vue-baidu-map'

Vue.use(ElementUI)
Vue.use(BaiduMap, {
  ak: 'DiBKGxOxB7i2G8LVfRcQOF6AID1y1NPG'
})

Vue.config.productionTip = false
Vue.prototype.$echarts = echarts

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
