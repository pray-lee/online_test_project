import axios from 'axios'
import config from './config'
import Listener from '../util/listener'
export default function ({token, subjectId, difficulty}) {
  Listener.subject_id = null
  Listener.subjectArr.forEach(item => {
    if(item.mid === subjectId){
      Listener.subject_id = item.subject_id
    }
  })
  return new Promise((resolve, reject) => {
    axios.get(`${config.baseUrl}/testonline/paper/random/beginTest?token=${token}`, {
      params: {
        num: 10,
        difficulty: difficulty,
        subjectId: Listener.subject_id,
        // model: '1,2'
      }
    })
      .then(res => {
        resolve(res.data.data)
      })
  })
}
