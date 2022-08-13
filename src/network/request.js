import axios from "axios"
import config from "@/config"

const baseUrl = process.env.NODE_ENV === 'development' ? config.baseUrl.dev : config.baseUrl.pro

class HttpRequest {
    constructor(baseUrl) {
        this.baseUrl = baseUrl
    }

    getInsideConfig() {
        const config = {
            baseUrl: this.baseUrl,
            headers: {}
        }
        return config
    }

    interceptors(instance) {
        // 添加请求拦截器
        axios.interceptors.request.use(config => {
            // 在发送请求前做些什么
            return config
        }, err => {
            // 对请求错误做些什么
            return Promise.reject(error)
        })
        // 添加响应拦截器
        axios.interceptors.response.use(response => {
            // 对数据响应做什么
            return response
        }, error => {
            // 对响应错误做些什么
            return Promise.reject(error)
        })
    }

    request(options) {
        const instance = axios.create({})
        options = { ...this.getInsideConfig(), ...options }
        this.interceptors(instance)
        return instance(options)
    }
}

export default new HttpRequest(baseUrl)