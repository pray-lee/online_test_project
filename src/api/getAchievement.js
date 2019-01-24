import axios from 'axios'
import config from './config'
export default function (token,userId) {
  return new Promise((resolve, reject) => {
    axios.get(`${config.baseUrl}/testonline/testUser/detail?token=${token}&id=${userId}`)
      .then(res => {
        resolve(res.data.data)
      })
  })
}
