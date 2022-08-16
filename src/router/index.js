import Vue from 'vue'
import VueRouter from 'vue-router'

const Main = () => import('@/views/Main.vue')
// const Home = () => import('@/views/home/Home.vue')
// const User = () => import('@/views/user/User.vue')
// const MallManage = () => import('@/views/mall/MallManage.vue')
// const PageOne = () => import('@/views/other/PageOne.vue')
// const PageTwo = () => import('@/views/other/PageTwo.vue')
const Login = () => import('@/views/login/Login.vue')

// 1.安装插件
Vue.use(VueRouter)

// 2.创建router
const routes = [
    {
        path: '/',
        redirect: '/home',
        name: 'main',
        component: Main,
        children: [
            // {
            //     path: '/home',
            //     name: 'home',
            //     component: Home
            // },
            // {
            //     path: '/user',
            //     name: 'user',
            //     component: User
            // },
            // {
            //     path: '/mall',
            //     name: 'mall',
            //     component: MallManage
            // },
            // {
            //     path: '/page1',
            //     name: 'page1',
            //     component: PageOne
            // },
            // {
            //     path: '/page2',
            //     name: 'page2',
            //     component: PageTwo
            // }
        ]
    },
    {
        path: '/login',
        name: 'login',
        component: Login
    }
]

const router = new VueRouter({
    routes,
    mode: 'history'
})

export default router