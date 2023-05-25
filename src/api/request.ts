import axios, {
  AxiosInstance,
  AxiosError,
  AxiosRequestConfig,
  AxiosResponse,
  InternalAxiosRequestConfig
} from 'axios'
import { ResultData } from './interface'
import { AxiosCanceler } from './helper/axiosCancel'
import { message } from 'antd'

const axiosCanceler = new AxiosCanceler()

const config = {
  // 默认地址请求地址，可在 .env 开头文件中修改
  baseURL: process.env.USER_BASE_URL || '',
  // 设置超时时间（10s）
  timeout: 1000 * 30,
  // 跨域时候允许携带凭证
  withCredentials: true,
}

class HttpRequest {
  service: AxiosInstance
  public constructor(config: AxiosRequestConfig) {
    this.service = axios.create(config)

    this.service.interceptors.request.use(
      (config: InternalAxiosRequestConfig) => {
        // * 将当前请求添加到 pending 中
        axiosCanceler.addPending(config)
        return config
      },
      (error: AxiosError) => {
        return Promise.reject(error)
      },
    )
    this.service.interceptors.response.use(
      (response: AxiosResponse) => {
        const { data, config } = response
        axiosCanceler.removePending(config)
        if (data?.code !== '200') { //TODO: 根据状态码进行相应的处理
          message.error(data?.msg)
          return Promise.reject(data)
        }
        return data
      },
      async (error: AxiosError) => {
        const { response } = error
        // 请求超时单独判断，请求超时没有 response
        if (error.message.indexOf('timeout') !== -1)
          message.error('请求超时，请稍后再试')
        if (response) message.error(response.status) //TODO: 根据状态码进行相应的处理
        // 服务器结果都没有返回(可能服务器错误可能客户端断网) 断网处理:可以跳转到断网页面
        if (!window.navigator.onLine) window.location.hash = '/500'
        return Promise.reject(error)
      },
    )
  }
  // * 常用请求方法封装
  get<T>(url: string, params?: object, _object = {}): Promise<ResultData<T>> {
    return this.service.get(url, { params, ..._object })
  }
  post<T>(url: string, params?: object, _object = {}): Promise<ResultData<T>> {
    return this.service.post(url, params, _object)
  }
  put<T>(url: string, params?: object, _object = {}): Promise<ResultData<T>> {
    return this.service.put(url, params, _object)
  }
  delete<T>(url: string, params?: any, _object = {}): Promise<ResultData<T>> {
    return this.service.delete(url, { params, ..._object })
  }
}

export default new HttpRequest(config)
