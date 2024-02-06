import request from '@/utils/request'
import { call } from 'runjs/lib/script'

// 获取上传图片token
export function getToken(params) {
  return request({
    url: '/upload/token',
    method: 'post',
    params
  })
}
