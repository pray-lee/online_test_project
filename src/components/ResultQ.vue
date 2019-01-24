<template>
  <div id="resultQ">
    <div class="title" v-html="question.body"></div>
    <div class="answer">
      <p>正确答案：{{question.answer}}</p>
      <p>你的答案：{{question.userAnswer}}</p>
      <p v-if="question.answer !== question.userAnswer" style="color:#d52037">（错误）</p>
      <p v-else style="color:#00bd92">（正确）</p>
    </div>
    <div class="options" v-for="(option, index) of question.options" :key="option.optionId" v-html="'<p>' + orderArr[index] + '.&nbsp;</p>' + option.optionName">
    </div>
  </div>
</template>
<script>
export default {
  name: 'ResultQ',
  props:['question'],
  data() {
    return {
      orderArr: ['A','B', 'C', 'D', 'E', 'F']
    }
  }
}
</script>
<style>
#resultQ{
  padding:.3rem .426667rem /* 32/75 */;
  color: #333;
  font-size: .32rem;
  line-height: .666667rem /* 50/75 */;
  border-bottom: .013333rem /* 1/75 */ solid #ccc;
}
#resultQ .title{
  /*height: .693333rem !* 52/75 *!;*/
  line-height: .693333rem /* 52/75 */;
  font-size: .35rem;
  font-weight: bold
}
.answer{
  display:flex;
  justify-content: flex-start;
}
.answer p{
  margin-right: .8rem /* 60/75 */;
}
  .options > :last-child{
    display:none
  }
  .options p{
    display:inline-block
  }
</style>

