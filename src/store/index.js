import Vue from 'vue'
import Vuex from 'vuex'
import tab from './tab'
import user from './user'

// 1.安装插件
Vue.use(Vuex)

// 2.创建store对象
const store = new Vuex.Store({
    modules: {
        tab,
        user
    },
    state: {
    },
    mutations: {
    }
})

// 3.挂载到Vue实例上
export default store
