<template>
  <div class="achievement">
    <h1>答题成就</h1>
    <div class="content">
      <div class="item qingtong"></div>
      <div class="item huangjin"></div>
      <div class="item baijin"></div>
      <div class="item zuanshi"></div>
      <div class="item wangzhe"></div>
    </div>
  </div> 
</template>
<script>
export default {
  name: 'achievement'
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
  width: 1.373333rem /* 103/75 */;
  height: 1.026667rem /* 77/75 */;
}
.item.qingtong{
  background:url(../assets/images/1.png) center center no-repeat;
  background-size: 1.373333rem 1.026667rem;
}
.item.huangjin{
  background:url(../assets/images/2.png) center center no-repeat;
  background-size: 1.373333rem 1.026667rem;
}
.item.baijin{
  background:url(../assets/images/3.png) center center no-repeat;
  background-size: 1.373333rem 1.026667rem;
}
.item.zuanshi{
  background:url(../assets/images/4.png) center center no-repeat;
  background-size: 1.373333rem 1.026667rem;
}
.item.wangzhe{
  background:url(../assets/images/5.png) center center no-repeat;
  background-size: 1.373333rem 1.026667rem;
}
</style>
