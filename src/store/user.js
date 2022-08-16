import Cookies from "js-cookie"

export default {
    state: {
        token: ''
    },
    mutations: {
        setToken(state, payload) {
            state.token = payload
            Cookies.set('token', payload)
        },
        clearToken(state) {
            state.token = ''
            Cookies.remove('token')
        },
        getToken(state) {
            state.token = state.token || Cookies.get('token')
        }
    }
}