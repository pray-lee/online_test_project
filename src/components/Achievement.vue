<template>
  <div class="achievement" v-if="grade != ''">
    <h1>答题成就</h1>
    <div class="content">
      <div class="item qingtong" :class="{active: activeArray[0]}"></div>
      <div class="item huangjin" :class="{active: activeArray[1]}"></div>
      <div class="item baijin" :class="{active: activeArray[2]}"></div>
      <div class="item zuanshi" :class="{active: activeArray[3]}"></div>
      <div class="item wangzhe" :class="{active: activeArray[4]}"></div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'achievement',
  props: ['grade'],
  data() {
    return {
      showGrade: '',
      activeArray: []
    }
  },
  methods: {

  },
  mounted() {
    let count = parseInt(this.grade)
    for(let i = 0; i < count; i++){
      this.activeArray.push('active')
    }
  }
}
</script>
<style scoped>
.achievement{
  padding-bottom: .6rem;
  background: #fff
}
h1{
  height: 1.306667rem /* 98/75 */;
  line-height:1.306667rem;
  font-size: .4rem;
  padding:0 .3rem 0 .3rem;
  color: #333
}
.content{
  display:flex;
  justify-content: space-between;
  flex-wrap:wrap
}
.item{
  flex: 0 0 auto;
  width: 2.133rem;
  height: 2.133rem /* 77/75 */;
  margin: 0 .15rem
}
.item.qingtong.active{
  background:url(../assets/images/1.png) center center no-repeat;
  background-size: 2.133rem 2.133rem;
}
.item.huangjin.active{
  background:url(../assets/images/2.png) center center no-repeat;
  background-size: 2.133rem 2.133rem;
}
.item.baijin.active{
  background:url(../assets/images/3.png) center center no-repeat;
  background-size: 2.133rem 2.133rem;
}
.item.zuanshi.active{
  background:url(../assets/images/4.png) center center no-repeat;
  background-size: 2.133rem 2.133rem;
}
.item.wangzhe.active{
  background:url(../assets/images/5.png) center center no-repeat;
  background-size: 2.133rem 2.133rem;
}
.item.qingtong{
  background:url(../assets/images/noactive/1.png) center center no-repeat;
  background-size: 2.133rem 2.133rem;
}
.item.huangjin{
  background:url(../assets/images/noactive/2.png) center center no-repeat;
  background-size: 2.133rem 2.133rem;
}
.item.baijin{
  background:url(../assets/images/noactive/3.png) center center no-repeat;
  background-size: 2.133rem 2.133rem;
}
.item.zuanshi{
  background:url(../assets/images/noactive/4.png) center center no-repeat;
  background-size: 2.133rem 2.133rem;
}
.item.wangzhe{
  background:url(../assets/images/noactive/5.png) center center no-repeat;
  background-size: 2.133rem 2.133rem;
}
</style>
