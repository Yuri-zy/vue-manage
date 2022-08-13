import Vue from 'vue'
import Vuex from 'vuex'
import tab from './tab'

// 1.安装插件
Vue.use(Vuex)

// 2.创建store对象
const store = new Vuex.Store({
    modules: {
        tab
    }
})

// 3.挂载到Vue实例上
export default store
