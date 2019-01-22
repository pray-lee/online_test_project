import axios from 'axios'
import config from './config'
export default function ({token, postData}) {
  return new Promise((resolve, reject) => {
    axios.post(`${config.baseUrl}/testonline/paper/random/submit?token=${token}`, postData)
      .then(res => {
        resolve(res.data.data)
      })
  })
}
