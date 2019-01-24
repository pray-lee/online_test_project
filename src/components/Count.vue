<template>
  <div id="count">
    <div id="gg1" class="gauge" ref="gg1"></div>
  </div>

</template>
<script>
  export default {
    name: 'Count',
    data () {
      return {
        count: 300,
        showCount: '',
        timer: null,
        gg1: null
      }
    },
    created () {
      this.showCount = '05 : 00'
    },
    mounted () {
      this.doInterval()
      this.createCountAnimation()
    },
    methods: {
      createCountAnimation() {
        var dflt = {
          min: 0,
          max: 300,
          donut: true,
          gaugeWidthScale: 0.4,
          counter: true,
          hideInnerShadow: true,
          textRenderer: this.customValue,
          relativeGaugeSize: true,
          levelColors: [
            "#eb0f0f",
            "#eb6c0f",
            "#0fd30a"
          ]
        }
        this.gg1 = new JustGage({
          id: 'gg1',
          value: 300,
          defaults: dflt,
          reverse: true,
        })
      },
      customValue () {
        return this.showCount
      },
      doInterval () {
        this.timer = setInterval(() => {
          this.showCount = this.countFn(this.count--)
          this.gg1.refresh(this.count)
          if (this.count < 0) {
            clearInterval(this.timer)
          }
        }, 1000)
      },
      countFn (second) {
        const s = second % 60
        const m = Math.floor(second / 60)
        return `${`00${m}`.slice(-2)} : ${`00${s}`.slice(-2)}`
      }
    }
  }
</script>
<style scoped>
  #count {
    position: relative;
    width: 2rem /* 150/75 */;
    height: 2rem;
    margin-left: 3.6rem;
    line-height: 1.6rem;
    border-radius: 50%;
    border: .2rem /* 3/75 */ solid #fff;
    background: #fff;
    text-align: center;
    font-size: .4rem;
  }

  #gg1 {
    position:absolute;
    left: 50%;
    top: 50%;
    transform:translate(-50%, -50%);
    width: 3.133rem;
    height: 3.133rem;
  }
</style>


