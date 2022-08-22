import router from "@/router"
import Cookies from "js-cookie"

export default {
    state: {
        isCollapse: false,
        tabsList: [
            {
                path: '/',
                name: 'home',
                label: '首页',
                icon: 'home'
            }
        ],
        currentMenu: null,
        menu: [],
    },
    mutations: {
        isCollapse(state) {
            state.isCollapse = !state.isCollapse
        },
        selectMenu(state, payload) {
            if (payload.name !== 'home') {
                state.currentMenu = payload
                const result = state.tabsList.findIndex(item => item.name === payload.name)
                if (result === -1) {
                    state.tabsList.push(payload)
                }
            } else {
                state.currentMenu = null
            }
        },
        closeTag(state, payload) {
            const result = state.tabsList.findIndex(item => item.name === payload.name)
            state.tabsList.splice(result, 1)
        },
        setMenu(state, payload) {
            state.menu = payload
            Cookies.set('menu', JSON.stringify(payload))
        },
        addMenu(state, payload) {
            if (!Cookies.get('menu')) {
                return
            }
            const menu = JSON.parse(Cookies.get('menu'))
            state.menu = menu
            const menuArray = []
            menu.forEach(item => {
                if (item.children) {
                    item.children = item.children.map(item => {
                        item.component = () => import(`@/views/${item.url}`)
                        return item
                    })
                    menuArray.push(...item.children)
                } else {
                    item.component = () => import(`@/views/${item.url}`)
                    menuArray.push(item)
                }
            })
            // 路由的动态添加
            menuArray.forEach(item => {
                router.addRoute('main', item)
            })
        }
    }
}