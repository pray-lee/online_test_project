<template>
  <div id="result" v-if="data">
    <div class="top">
      <p class="score">得分：{{data.myScore}}/{{data.totalScore}}</p>
      <p class="finish-time">完成时间：{{data.endTime}}</p>
    </div>
    <div id="questions-wrapper">
      <h3>答案解析</h3>
      <ResultQ v-for="item of data.questions" :question="item"></ResultQ>
    </div>
    <router-link to="/">
      <BigButton title="继续评测" class="button"></BigButton>
    </router-link>
  </div>
</template>
<script>
import ResultQ from '@/components/ResultQ.vue'
import BigButton from '@/components/BigButton.vue'
import Listener from '../util/listener'
export default {
  name: 'Result',
  components: {ResultQ, BigButton},
  // data() {
  //   return {
  //     data: {}
  //   }
  // },
  computed: {
    data() {
      return Listener.resultData
    }
  }
}
</script>
<style scoped>
#result{
  background:#fff;
  height: 100%;
}
.top{
  padding-top: .8rem /* 30/75 */
}
.top *{
  color:#fff;
  text-align: center;
}
.score{
  font-size: .453333rem /* 34/75 */;
  padding-bottom: .2rem;
}
.finish-time{
  font-size: .35rem
}
.top{
  width:10rem;
  height: 2.96rem /* 222/75 */;
  background:url(../assets/images/result_top.png) center center no-repeat;
  background-size: 10rem 2.96rem
}
#result h3{
  text-align: center;
  font-size: .35rem;
  color:#333;
  height: .733333rem /* 55/75 */;
  line-height: .733333rem /* 55/75 */;
  margin-top: .3rem;
  margin-bottom: .1rem;
}
#questions-wrapper{
  margin-bottom: 1rem;
}
.button{
  margin-bottom: 1rem
}
</style>


