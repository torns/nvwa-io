import request from '@/utils/request'

export default {
  list() {
    return request({
      url: '/v1/projects/admin/',
      method: 'get'
    })
  }
}
