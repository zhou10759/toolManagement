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

export function getInfo(data) {
  return request({
    url: '/biio/user/getUserInfo',
    method: 'POST',
    data
  })
}

export function getCoupon() {
  return request({
    url: '/biio/coupon/getCouponCount',
    method: 'POST'
  })
}

export function updateUserInfo(data) {
  return request({
    url: '/biio/user/updateUserInfo',
    method: 'POST',
    data
  })
}

export function changePassword(data) {
  return request({
    url: '/biio/user/changePassword',
    method: 'POST',
    data
  })
}

export function logout() {
  return request({
    url: '/vue-admin-template/user/logout',
    method: 'post'
  })
}
