// 二次封装axios 拦截器

import axios from 'axios'
import config from '../config/index'
import Cookies from 'js-cookie';
// 设置从配置文件中获取 BaseUrl
const baseUrl = config.BaseUrl;

class HttpRequst {
  constructor(baseUrl) {
    this.baseUrl = baseUrl;
  }
  // 公共配置
  getInsideConfig () {
    const config = {
      baseURL: this.baseUrl
    }
    return config
  }
  // 请求拦截
  interceptors (instance) {
    instance.interceptors.request.use(function (config) {
      // 在发送请求之前将token存入请求头
      if(Cookies.get("token")) config.headers['Authorization'] = Cookies.get("token");
      return config;
    }, function (error) {
      // 对请求错误做些什么
      return Promise.reject(error);
    });

    // 响应拦截
    instance.interceptors.response.use(function (response) {
      // 对响应数据做点什么
      return response.data;
    }, function (error) {
      console.log(error);
      // 对响应错误做点什么
      return Promise.reject(error);
    });
  }

  // 具体选项
  request (options) {
    // 请求
    // /api/getList  /api/getHome
    const instance = axios.create();
    // 技巧
    // /api // api1
    options = { ...(this.getInsideConfig()), ...options }
    this.interceptors(instance)
    return instance(options)
  }

  //并发请求
}

export default new HttpRequst(baseUrl)