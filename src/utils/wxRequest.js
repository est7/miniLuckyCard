import wepy from 'wepy'
import tip from './tip'
import {BUILD_TYPE} from './constant'

const apiMall = BUILD_TYPE === 'production' ? 'https://fucardapi.droi.cn' : 'http://10.20.40.138:2234'

const baseUrlWithoutToken = path => `${apiMall}/api/${path}/`

const wxGetRequest = async (initData = {}, url) => {
  tip.loading()
  let data = initData || {}
  let res = await wepy.request({
    url: url,
    method: 'GET',
    data: data,
    header: {'Content-Type': 'application/json'}
  })
  tip.loaded()
  return res
}

const wxPostRequest = async (initData = {}, url) => {
  tip.loading()
  let data = initData || {}
  let res = await wepy.request({
    url: url,
    method: 'POST',
    data: data,
    header: {'Content-Type': 'application/json'}
  })
  tip.loaded()
  return res
}

const getRequest = async (path, data) => {
  return await wxGetRequest(data, baseUrlWithoutToken(path))
}

const postRequest = async (path, data) => {
  return await wxPostRequest(data, baseUrlWithoutToken(path))
}

module.exports = {
  getRequest,
  postRequest
}
