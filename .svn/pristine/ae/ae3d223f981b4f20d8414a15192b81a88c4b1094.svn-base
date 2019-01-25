import axios from 'axios'
import config from './config'
export default function (token) {
  return new Promise((resolve, reject) => {
    axios.get(`${config.baseUrl}/testonline/subject/listAllModel?token=${token}`)
      .then(res => {
        resolve(res.data.data)
      })
  })
}
