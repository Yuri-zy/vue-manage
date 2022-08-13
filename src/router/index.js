import Vue from 'vue'
import VueRouter from 'vue-router'

const Main = () => import('@/views/Main.vue')
const Home = () => import('@/views/home/Home.vue')
const User = () => import('@/views/user/User.vue')

// 1.安装插件
Vue.use(VueRouter)

// 2.创建router
const routes = [
    {
        path: '/',
        // redirect: '/main',
        name: 'Main',
        component: Main,
        children: [
            {
                path: '/home',
                name: 'home',
                component: Home
            },
            {
                path: '/user',
                component: User
            }
        ]
    },
]

const router = new VueRouter({
    routes,
    mode: 'history'
})

export default router