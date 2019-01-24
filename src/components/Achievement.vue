<template>
  <div class="achievement" v-if="grade != ''">
    <h1>答题成就</h1>
    <div class="content">
      <div class="item qingtong" :class="{active: showGrade==='qingtong'}"></div>
      <div class="item huangjin" :class="{active: showGrade==='huangjin'}"></div>
      <div class="item baijin" :class="{active: showGrade==='baijin'}"></div>
      <div class="item zuanshi" :class="{active: showGrade==='zuanshi'}"></div>
      <div class="item wangzhe" :class="{active: showGrade==='wangzhe'}"></div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'achievement',
  props: ['grade'],
  data() {
    return {
      showGrade: ''
    }
  },
  mounted() {
    switch (this.grade) {
      case '2':
        this.showGrade = 'huangjin'
        break
      case '1':
        this.showGrade = 'qingtong'
        break
      case '3':
        this.showGrade = 'baijin'
        break
      case '4':
        this.showGrade = 'zuanshi'
        break
      case '5':
        this.showGrade = 'wangzhe'
        break
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
  justify-content: space-around
}
.item{
  flex: 0 0 auto;
  width: 1.333rem /* 103/75 */;
  height: 1.333rem /* 77/75 */;
}
.item.qingtong.active{
  background:url(../assets/images/1.png) center center no-repeat;
  background-size: 1.333rem 1.333rem;
}
.item.huangjin.active{
  background:url(../assets/images/2.png) center center no-repeat;
  background-size: 1.333rem 1.333rem;
}
.item.baijin.active{
  background:url(../assets/images/3.png) center center no-repeat;
  background-size: 1.333rem 1.333rem;
}
.item.zuanshi.active{
  background:url(../assets/images/4.png) center center no-repeat;
  background-size: 1.333rem 1.333rem;
}
.item.wangzhe.active{
  background:url(../assets/images/5.png) center center no-repeat;
  background-size: 1.333rem 1.333rem;
}
.item.qingtong{
  background:url(../assets/images/noactive/1.png) center center no-repeat;
  background-size: 1.333rem 1.333rem;
}
.item.huangjin{
  background:url(../assets/images/noactive/2.png) center center no-repeat;
  background-size: 1.333rem 1.333rem;
}
.item.baijin{
  background:url(../assets/images/noactive/3.png) center center no-repeat;
  background-size: 1.333rem 1.333rem;
}
.item.zuanshi{
  background:url(../assets/images/noactive/4.png) center center no-repeat;
  background-size: 1.333rem 1.333rem;
}
.item.wangzhe{
  background:url(../assets/images/noactive/5.png) center center no-repeat;
  background-size: 1.333rem 1.333rem;
}
</style>
