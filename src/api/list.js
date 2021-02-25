import request from '@/utils/request'


export function getCouponById(data) {
    return request({
      url: '/biio/coupon/getCouponById',
      method: 'POST',
      data
    })
  }