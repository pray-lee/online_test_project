<template>
  <div id="record">
    <div class="record-item" v-for="item of list">
      <div class="item-wrapper">
      <p class="score">
        <span>得分：{{item.myScore}}分</span>
        <span style="margin: 0 .3rem">|</span>
        <span>总分：{{item.totalScore}}分</span>
      </p>
      <p class="finish-time">完成时间：{{item.endTime}}</p>
      <div class="showReport" @click="goResult(item.scoreId)">查看报告 > </div>
      </div>
    </div>
  </div>
</template>
<script>
import Listener from '../util/listener'
import getRecordList from '../api/getRecordList'
import getRecordDetail from '../api/getRecordDetail'
export default {
  name: "Record",
  data() {
    return {
      list: []
    }
  },
  created() {
    this.init()
  },
  methods: {
    async init() {
      this.list = await getRecordList({token: Listener.token})
    },
    goResult(id) {
      console.log(this)
      let _this = this;
      (async function() {
        Listener.resultData = await getRecordDetail({token: Listener.token, id: id})
        console.log(Listener.resultData)
        _this.$router.push({path: '/result'})
      })()
    }
  }
};
</script>
<style scoped>
#record {
  background: #fff;
  color: #333;
}
.record-item{
  border-bottom: .013333rem /* 1/75 */ solid #ccc
}
.item-wrapper{
  padding: .3rem .4rem;
  position: relative
}
.showReport{
  position:absolute;
  right:.3rem;
  top:50%;
  transform: translateY(-50%);
  font-size: .35rem;
  font-weight: 200;
  color: #c8c8c8
}
.score {
  font-size: 0.35rem;
  line-height: 0.8rem; /* 30/75 */
}
.finish-time {
  font-size: 0.32rem;
}
</style>


