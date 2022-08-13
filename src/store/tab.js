export default {
    state: {
        isCollapse: false
    },
    mutations: {
        isCollapse(state) {
            state.isCollapse = !state.isCollapse
        }
    }
}