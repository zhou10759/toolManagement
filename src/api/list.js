import request from '@/utils/request'


//兑换券列表
export function findCouponList(data) {
  return request({
    url: '/coupon/findCouponList',
    method: 'POST',
    data
  })
}
//兑换券详情
export function getCouponById(data) {
  return request({
    url: '/coupon/getCouponById',
    method: 'POST',
    data
  })
}
//消费记录
export function consumeLog(data) {
  return request({
    url: '/user/consumeLog',
    method: 'POST',
    data
  })
}
