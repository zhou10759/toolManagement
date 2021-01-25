import request from '@/utils/request'
// import qs from "qs"

export function register(data) {
  return request({
    url: '/biio/user/register',
    method: 'POST',
    data
  })
}

export function sendMessage(data) {
  return request({
    url: '/biio/user/sendMessage',
    method: 'POST',
    data
  })
}

export function login(data) {
  return request({
    url: '/biio/user/login',
    method: 'POST',
    data
  })
}

export function getInfo(token) {
  return request({
    url: '/vue-admin-template/user/info',
    method: 'get',
    params: { token }
  })
}

export function logout() {
  return request({
    url: '/vue-admin-template/user/logout',
    method: 'post'
  })
}
