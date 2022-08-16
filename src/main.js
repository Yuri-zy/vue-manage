import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'
import '@/network/mock'

import '@/assets/less/index.less'

// 按需引入
// import { Button, Container } from 'element-ui'
// 全局引入
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

Vue.config.productionTip = false

// Vue.use(Button)
// Vue.use(Container)
Vue.use(ElementUI)

Vue.prototype.$axios = axios

router.beforeEach((to, from, next) => {
  store.commit('getToken')
  const token = store.state.user.token
  if (!token && to.name !== 'login') {
    next({ name: 'login' })
  } else if (token && to.name === 'login') {
    next({ name: 'home' })
  } else {
    next()
  }
})

new Vue({
  router,
  store,
  render: h => h(App),
  created() {
    store.commit("addMenu", router)
  }
}).$mount('#app')
