import jsonp from 'common/js/jsonp'
import Axios from 'axios'
import {commonParam, options} from './config'

// export function getRecommend () {
//   const url = 'https://c.y.qq.com/musichall/fcgi-bin/fcg_yqqhomepagerecommend.fcg'

//   const data = Object.assign({}, commonParam, {
//     platform: 'h5',
//     uin: 0,
//     needNewCode: 1
//   })

//   return jsonp(url, data, options)
// }

export function getRecommend () {
  const url = '/api/getRecommend'

  return Axios.get(url)
}
