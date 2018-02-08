import {
  getRequest,
  postRequest
} from '../utils/wxRequest'

let env = '-test' // -dev 或者 -test

const getHomeList = (data) => getRequest('home', data)
const getRootCtegoryList = (data) => getRequest('classifyList', data)
const getChildGoodsCatetoryList = (data) => getRequest('classifyList', data)

module.exports = {
  getHomeList,
  getRootCtegoryList,
  getChildGoodsCatetoryList
}
