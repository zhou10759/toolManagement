import request from '@/utils/request'


export function register(data) {
  return request({
    url: '/user/register',
    method: 'POST',
    data
  })
}

export function sendMessage(data) {
  return request({
    url: '/user/sendMessage',
    method: 'POST',
    data
  })
}

export function login(data) {
  return request({
    url: '/user/login',
    method: 'POST',
    data
  })
}

export function getInfo(data) {
  return request({
    url: '/user/getUserInfo',
    method: 'POST',
    data
  })
}

export function getCoupon(data) {
  return request({
    url: '/coupon/getCouponCount',
    method: 'POST',
    data
  })
}

export function consumeCoupon(data) {
  return request({
    url: '/coupon/consumeCoupon',
    method: 'POST',
    data
  })
}

export function updateUserInfo(data) {
  return request({
    url: '/user/updateUserInfo',
    method: 'POST',
    data
  })
}

export function changePassword(data) {
  return request({
    url: '/user/changePassword',
    method: 'POST',
    data
  })
}

export function resetPass(data) {
  return request({
    url: '/user/resetPass',
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
