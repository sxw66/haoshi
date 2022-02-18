import axios from 'axios'
export const baseURL = process.env.VUE_APP_BASE_URL
console.log(process.env.VUE_APP_BASE_URL)
const axiosInstance = axios.create({
  baseURL,
  timeout: 20000, // 请求超时 20s
})
/** 添加响应拦截器 */
axiosInstance.interceptors.response.use(
  (config) => {
    config.data.code !== 0
    if (config.data.code == 886) {
      storageRemove('Authorization')
      storageRemove('token')
    } else if (config.data.code !== 0) {
      message({ type: 'error', message: config.data.msg })
    } else if (config.data.code == 2) {
      message({ type: 'info', message: config.data.msg })
    } else if (config.data.code == 403) {
      window.vm.$router.push({ name: 403 })
    }
    tryHideFullScreenLoading()
    return config
  },
  (error) => {
    endLoading()
    return Promise.reject(error)
  }
  // message({ type: 'error', message: res.data.msg });
)
// http request 拦截器
axiosInstance.interceptors.request.use(
  (config) => {
    config.headers['Content-Type'] = 'application/json'
    config.headers['language'] = 'aaa'
    const { method } = config
    if (method === 'post') {
      handlerPostContentTypeAndParams(config)
    }
    let token = localStorage.getItem('Authorization')
    if (!config.headers.hasOwnProperty('Authorization') && token) {
      config.headers.Authorization = token.replace(/\"/g, '')
      config.headers.language = sessionStorage.getItem('langeuage')
    }
    showFullScreenLoading()
    return config
  },
  (error) => {
    return Promise.reject(error)
  }
)


/**
 * 封装get方法
 * @param url
 * @param data
 * @returns {Promise}
 */

export function get(url, params = {}) {
  return new Promise((resolve, reject) => {
    axiosInstance
      .get(baseURL + url, {
        params: params
      })
      .then((response) => {
        resolve(response.data)
      })
      .catch((err) => {
        reject(err)
      })
  })
}

/**
 * 封装post请求
 * @param url
 * @param data
 * @param isSimpleParams（默认为简单数据类型） true 简单数据 || false 复杂数据类型
 * @returns {Promise}
 */

export function post(url, data = {}, isSimpleParams = true) {
  return new Promise((resolve, reject) => {
    data.isSimpleParams = isSimpleParams
    axiosInstance.post(baseURL + url, data).then(
      (response) => {
        resolve(response.data)
      },
      (err) => {
        reject(err)
      }
    )
  })
}

/**
 * 封装patch请求
 * @param url
 * @param data
 * @returns {Promise}
 */

export function patch(url, data = {}) {
  return new Promise((resolve, reject) => {
    axiosInstance.patch(baseURL + url, data).then(
      (response) => {
        resolve(response.data)
      },
      (err) => {
        reject(err)
      }
    )
  })
}

/**
 * 封装deletes请求
 * @param url
 * @param data
 * @returns {Promise}
 */

export function deletes(url, data = {}) {
  return new Promise((resolve, reject) => {
    axiosInstance.delete(baseURL + url, data).then(
      (response) => {
        resolve(response.data)
      },
      (err) => {
        reject(err)
      }
    )
  })
}

/**
 * 封装put请求
 * @param url
 * @param data
 * @returns {Promise}
 */

export function put(url, data = {}) {
  return new Promise((resolve, reject) => {
    axiosInstance.put(baseURL + url, data).then(
      (response) => {
        resolve(response.data)
      },
      (err) => {
        reject(err)
      }
    )
  })
}
