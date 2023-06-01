// 引入vue
import Vue from 'vue'
import App from './App.vue'
// 引入element ui
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
// 引入路由router
import VueRouter from 'vue-router'
import router from '@/router'
// 引入iconfont字体图标
import iconfont from '../public/iconfont/iconfont.css'
// 引入axios插件
import axios from 'axios'
// 配置公共的前缀地址在        ajax里配置（$ajaxPrefilter()）
// axios.defaults.baseURL=''
// 引入兄弟之间传值的链接
import Bus from '@/components/bus'

// 使用插件
Vue.config.productionTip = false
Vue.use(ElementUI)
Vue.use(VueRouter)
Vue.use(iconfont)

// 原型对象中加入$http方法

Vue.prototype.$http = axios
// 全局配置一个兄弟传值的方法bus
Vue.prototype.$bus = Bus

new Vue({
  render: h => h(App),
  // 配置路由
  router
}).$mount('#app')
