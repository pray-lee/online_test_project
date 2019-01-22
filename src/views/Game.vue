<template>
  <div id="question-wrapper">
    <Count></Count>
    <div class="questions-content" v-if="gameData">
        <Question class="question-area" v-for="(item, index) of gameData" v-show="statusArr[index]" ref="ele" :title="item.body" :options="item.options" :qkey="item.questionId" :type="item.type" @change="receiveValue"></Question>
    </div>
      <BigButton v-if="count==gameData.length-1" title="交卷" class="submit" @click.native="_changeView"></BigButton>
        <BigButton v-else title="下一题" class="submit" @click.native="_changeView"></BigButton>
    <p class="tip">答题进度：{{count+1}}/{{gameData.length}}</p>
  </div>
</template>
<script>
import Question from '@/components/Question.vue'
import BigButton from '@/components/BigButton.vue'
import Count from '@/components/Count.vue'
import Listener from '../util/listener'
import getResult from '../api/getResult'
export default {
  name: 'Game',
  components: {Question, BigButton, Count},
  data() {
    return {
      data: null,
      count: 0,
      statusArr: [],
      answer: '',
      //加一个标志，判断进入答题页面有没有点击过,如果没有，取第一个选项
      isClicked: false,
      postData: {
        subjectId: Listener.subject_id,
        startTime: '',
        endTime: '',
        answerList: [],
        checkboxArr: []
      },
    }
  },
  computed: {
    gameData() {
      return Listener.data
    }
  },
  mounted() {
    this._initQuestionPage()
    this.postData.startTime = this.formateDate(Date.now())
  },
  methods: {
    formateDate(time) {
      var date = new Date(time),
      Y = date.getFullYear() + '-',
      M = (date.getMonth()+1 < 10 ? '0'+(date.getMonth()+1) : date.getMonth()+1) + '-',
      D = date.getDate() + ' ',
      h = date.getHours() + ':',
      m = date.getMinutes() + ':',
      s = date.getSeconds()
      return Y+M+D+h+m+s
    },
    _initQuestionPage(){
      //初始化，默认选中第一题
      this.$refs.ele.forEach(() => {
        this.statusArr.push(0)
      })
      this.statusArr[0] = 1
    },
    _resetClickState() {
      this.isClicked = false
    },
    _changeClickState() {
      this.isClicked = true
    },
    //组装要提交的问题
    _constructOption() {
      //点击保存上一页问题,如果没有点击过，取第一项的答案，点击过，取接收到的项
      let questionId = this.gameData[this.count - 1].questionId
      let userAnswer = []
      if (this.isClicked) {
        userAnswer.push(this.answer)
      } else {
        alert('没选题')
        // if (this.gameData[0])
        //     userAnswer.push(this.gameData[this.count-1].options[0].optionId)
      }
      this.postData.answerList.push({
        questionId: questionId,
        userAnswer: userAnswer
      })
    },
    //点击切换问题选项
    _changeView() {
      alert(this.answer)
      this.statusArr = []
      //计数判断当前点击的是不是最后一个按钮，如果是，显示提交的按钮文字
      this.count++;
      this.$refs.ele.forEach(() => {
        this.statusArr.push(0)
      })
      this._constructOption()
      // 重组完成之后，切换题目
      this.answer = ''
      if (this.count < this.$refs.ele.length) {
        //激活当前问题
        this.statusArr[this.count] = 1
      } else {
        //提交并且跳转
        this.postData.endTime = this.formateDate(Date.now())
        Listener.postData = this.formateSubmitData(this.postData);
        let _this = this;
        (async function() {
          Listener.resultData = await getResult({token:Listener.token, postData:Listener.postData})
          _this.$router.push({path: '/result'})
        })()
      }
      //进入下一页的时候重置点击标志
      this._resetClickState()
    },
    receiveValue(val) {
      //当监听到receiveValue时，说明用户一定点击过当前页面的选项，然后改变标志状态
      this._changeClickState()
      if(val.type === 1){
        this.answer = val.value
      }else{
        if(this.answer.indexOf(val.value) < 0){
          this.answer += val.value + ','
        }
      }
    },
    formateSubmitData(data){
      let obj = {}
      obj.subjectId = data.subjectId;
      obj.startTime = data.startTime;
      obj.endTime = data.endTime;
      obj.answerList = []
      data.answerList.forEach(item => {
        if(typeof item.userAnswer[0] === 'string'){
          item.userAnswer = item.userAnswer[0].split(',')
          item.userAnswer.pop()
          item.userAnswer.forEach(val => {
            val = Number(val)
          })
        }
        obj.answerList.push({
          questionId: item.questionId,
          userAnswer: item.userAnswer
        })
      })
      return obj
    }
  }
}
</script>
<style scoped>
#question-wrapper{
  padding:0 .4rem /* 30/75 */;
  padding-top: 1.44rem /* 108/75 */;
  height: 100vh;
  background:linear-gradient(to bottom, #72cdff, #5ba9ff)
}
.submit{
  margin-top: .4rem /* 30/75 */
}
.question-area{
  margin-top: -1rem
}
.tip{
  margin-top: .8rem /* 30/75 */;
  text-align: center;
  color: #fff;
  font-size: .4rem
}
</style>


