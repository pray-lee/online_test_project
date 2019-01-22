<template>
  <div class="question-main">
    <div class="title" v-if="type===1" v-html="title+'<p>（单选）</p>'"></div>
    <div class="title" v-else v-html="title+'<p>（多选）</p>'"></div>
    <div class="question" v-for="(option, index) in options">
      <div class="check-wrapper" v-if="type===1">
        <input type="radio" :id="option.optionId" :value="option.optionId" :name="qkey" @change="$emit('change', {type:1,value:option.optionId})">
        <label :for="option.optionId"></label>
      </div>
      <div class="check-wrapper" v-if="type===2">
        <input type="checkbox" :id="option.optionId" :value="option.optionId" :name="qkey" @change="$emit('change', {type:2,value:option.optionId})">
        <label :for="option.optionId"></label>
      </div>
      <div class="content" v-html="option.optionName"></div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'Question',
  props:['title', 'options', 'qkey', 'type']
}
</script>
<style scoped>
.question-main{
  padding:0 .4rem /* 30/75 */;
  padding-top:1.546667rem /* 116/75 */;
  padding-bottom:0.846667rem /* 116/75 */;
  background:#fff;
  border-radius: .2rem /* 10/75 */;
}
.question-main .title{
  width: 100%;
  font-size: .45rem;
  margin-bottom: .8rem /* 60/75 */;
  word-break: break-all
}
.question{
  position:relative;
  border-radius: 1.166667rem /* 80/75 */;
  box-shadow: 1px 2px 10px 2px rgba(96,177,255,.3);
  font-size: .48rem;
  margin-bottom: .3rem;
}
.check-wrapper{
  width: .466667rem /* 35/75 */;
  height: .466667rem /* 40/75 */;
  position:absolute;
  left:.5rem;
  top:50%;
  transform: translateY(-50%);
}
.question input{
  position:absolute;
  left:0;
  top:0;
  width: 100%;
  height: 100%;
  opacity: 0;
}
.content{
  padding: .2rem 0;
  margin-left: 1.3rem;
  margin-right: .8rem
}
.title > :nth-child(2){
  display:none
}
.title > :last-child{
  color: #00b4fb
}
.content p{
  margin-left: 1.333333rem /* 100/75 */
}
.content > :last-child{
  display:none
}
.question label{
  display:block;
  width:100%;
  height: 100%;
  position:absolute;
  left:0;
  top:0;
  border-radius:50%;
  border: .023333rem /* 1/75 */ solid #ccc
}
.question input:checked + label{
  border:0;
  background:#00b4fb;
}
.question input:checked + label::after{
  content: '';
  display:block;
  width:.153333rem /* 10/75 */;
  height: .153333rem;
  border-radius:50%;
  border:0;
  background:#fff;
  position:absolute;
  left:50%;
  top:50%;
  transform: translate(-50%, -50%);
}
</style>

