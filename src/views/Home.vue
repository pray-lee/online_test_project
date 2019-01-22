<template>
  <div class="home">
    <SportType :subjectArr="subjectArr" :levelArr="levelArr"></SportType>
  </div>
</template>
<script>
// @ is an alias to /src
import Listener from '../util/listener'
import SportType from '@/components/SportType.vue'
import getAllModel from '../api/getAllModel'
export default {
  name: 'home',
  data() {
    return {
      subjectArr: [],
      levelArr: []
    }
  },
  components: {
    SportType
  },
  created () {
    this.init()
  },
  methods: {
    async init() {
      this.subjectArr = await getAllModel(Listener.token)
      let mid = 0
      this.subjectArr.forEach(item => {
        item.mid = mid++
      })
      this.levelArr = [{id:1, name: '简单'}, {id:2, name: '中等'}, {id: 3, name: '困难'}]
      Listener.subjectArr = this.subjectArr
      Listener.levelArr = this.levelArr
    }
  }
}
</script>
