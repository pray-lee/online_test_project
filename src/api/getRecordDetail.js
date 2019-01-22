import axios from 'axios'
import config from './config'
export default function ({token, id}) {
  return new Promise((resolve, reject) => {
    axios.get(`${config.baseUrl}/testonline/testScoreRandom/detail?token=${token}`, {
      params: {
        id: id
      }
    })
      .then(res => {
        resolve(res.data.data)
      })
  })
}
