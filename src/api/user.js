import request from '@/utils/request'


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
    url: '/biio/user/getUserInfo',
    method: 'POST'
  })
}

export function getCoupon(token) {
  return request({
    url: '/biio/coupon/getCouponCount',
    method: 'POST'
  })
}

export function logout() {
  return request({
    url: '/vue-admin-template/user/logout',
    method: 'post'
  })
}
