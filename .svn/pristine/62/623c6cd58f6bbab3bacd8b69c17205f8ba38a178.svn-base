<template>
  <div class="hello">
    <div class="home-option-area">
      <h1 style="text-align:right" @click="goRecord">评测记录 ></h1>
    </div>
    <div class="home-option-area">
      <h1>运动类型</h1>
      <div id="sportType" v-if="subjectArr && subjectArr.length > 0">
        <div v-for="item in subjectArr" :key="item.mid" :class="{active: item.mid === subjectCount}" @click="activate(item.mid)">{{item.subject_name}}</div>
      </div>
    </div>
    <div id="line"></div>
    <div class="home-option-area">
      <h1>试题难度</h1>
      <div id="level" v-if="levelArr && levelArr.length > 0">
        <div v-for="item in levelArr" :key="item.id" @click="activate1(item.id)" :class="{active: item.id === levelCount}">{{item.name}}</div>
      </div>
    </div>
    <div id="line"></div>
    <Achievement v-if="grade" :grade="grade"></Achievement>
      <BigButton title="开始评测" class="start" @click.native="getTestData"></BigButton>
  </div>
</template>

<script>
  import Achievement from '@/components/Achievement'
  import BigButton from '@/components/BigButton'
  import Listener from '../util/listener.js'
  import getTest from '../api/getTest'
  export default {
    name: 'SportType',
    components: { Achievement, BigButton },
    props: ['subjectArr', 'levelArr', 'grade'],
    data() {
      return {
        subjectCount:0,
        levelCount:1
      }
    },
    mounted() {
      Listener.subject_id = this.subjectCount
      Listener.level_id = this.levelCount
    },
    methods: {
      activate(mid) {
        this.subjectCount = mid;
        Listener.subject_id = this.subjectCount
      },
      activate1(mid) {
        this.levelCount = mid
        Listener.level_id = this.levelCount
      },
      async getTestData() {
        let data = {token: Listener.token, subjectId: Listener.subject_id, difficulty: Listener.level_id}
        Listener.data = await getTest(data)
        this.$router.push({path: '/game'})
      },
      goRecord() {
        this.$router.push({path: '/record'})
      }
    }
  }
</script>

<style scoped>
  #line {
    height: .133333rem /* 10/75 */;
    background: #f5f5f5
  }

  .start {
    margin-top: 1.333333rem /* 100/75 */
  }

  .home-option-area {
    background: #fff
  }

  h1 {
    height: 1.306667rem /* 98/75 */;
    line-height: 1.306667rem;
    font-size: .4rem;
    padding: 0 .3rem 0 .3rem;
    color: #333
  }

  #sportType, #level {
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-start;
    padding: 0 .4rem /* 30/75 */
  }

  #sportType div, #level div {
    width: 2.773333rem /* 208/75 */;
    height: .866667rem /* 65/75 */;
    line-height: .866667rem /* 65/75 */;
    border: .013333rem /* 1/75 */ solid #00b4fb;
    color: #00b4fb;
    border-radius: .15rem;
    background: #e5f7fe;
    margin:0 .125rem;
    margin-bottom: .4rem;
    font-size: .32rem;
    flex: 0 0 auto;
    text-align: center;
    white-space: initial;
  }

  #sportType div.active, #level div.active{
    background: #00b4fb;
    color: #fff
  }
</style>
