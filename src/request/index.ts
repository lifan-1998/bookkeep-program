import axios, { AxiosError, AxiosInstance, AxiosProxyConfig, AxiosRequestConfig, AxiosResponse, InternalAxiosRequestConfig } from 'axios'
import {useMainStore} from '../store/index'

let useStore = useMainStore()

interface result{
    data: T,
    code: string,
    mag: string
}

// axios的配置
const config = {
    baseURL:'',
    timeout: 50000
}

class request {
    // 创建实例对象，下面的函数可以通过this访问数据
    service: AxiosInstance;
    public constructor(config: AxiosRequestConfig){
        this.service = axios.create(config)
        // 请求拦截  在这边可以对请求的数据进行处理，打开loading
        this.service.interceptors.request.use(
            (config: InternalAxiosRequestConfig) => {
                // 请求头增加token
                config.headers.token = useStore.token
                return config
            },
            (error: AxiosError) => {
                // 返回错误信息
                return Promise.reject(error)

            }
        )

        // 响应拦截 在这边可以对返回数据进行处理，关闭loading
        this.service.interceptors.response.use(
            (response: AxiosResponse) => {
                return response.data
            },
            (error: AxiosError) => {
                // response 是返回的错误状态码
                let { response } = error
                return Promise.reject(error)
            }
        )
    }

    // 封装一些常用方法
    get<T>(url: string, params?: object, _object = {}): Promise<result>{
          return this.service.get(url, { params, ..._object });
    }
    post<T>(url: string, params?: object | string, _object = {}): Promise<result>{
        return this.service.post(url, params, _object)
    }
}

// // 请求拦截器
// request.interceptors.request.use(config => {
//     return config
// })


// // 响应拦截器
// request.interceptors.response.use(
//     (res) => {

//         return res.data
//     }, 
//     (err) => {
//         alert(err) 
//     }
// )


export default new request(config)