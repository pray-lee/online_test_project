<template>
  <div class="home">
    <SportType :subjectArr="subjectArr" :levelArr="levelArr" :grade="grade"></SportType>
  </div>
</template>
<script>
// @ is an alias to /src
import Listener from '../util/listener'
import SportType from '@/components/SportType.vue'
import getAllModel from '../api/getAllModel'
import getAchievement from '../api/getAchievement'
export default {
  name: 'home',
  data() {
    return {
      subjectArr: [],
      levelArr: [],
      grade: ''
    }
  },
  components: {
    SportType
  },
  created () {
    this.init()
    this.getGrade()
  },
  methods: {
    async init() {
      // 获取运动类型
      this.subjectArr = await getAllModel(Listener.token)
      let mid = 0
      this.subjectArr.forEach(item => {
        item.mid = mid++
      })
      this.levelArr = [{id:1, name: '简单'}, {id:2, name: '中等'}, {id: 3, name: '困难'}]
      Listener.subjectArr = this.subjectArr
      Listener.levelArr = this.levelArr
    },
    async getGrade() {
      // 获取用户等级
      let userData = await getAchievement(Listener.token, Listener.userId)
      this.grade = userData.grade
    }
  }
}
</script>
