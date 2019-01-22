<template>
  <div id="count">{{showCount}}</div>
</template>
<script>
export default {
  name: "Count",
  data() {
    return {
      count: 600,
      showCount: '',
      timer: null
    };
  },
  created () {
    this.showCount = '10 : 00'
  },
  mounted() {
    this.timer = setInterval(() => {
      this.showCount = this.countFn(this.count--);
      if (this.count < 0) {
        clearInterval(this.timer);
      }
    }, 1000);
  },
  methods: {
    countFn(second) {
      const s = second % 60;
      const m = Math.floor(second / 60);
      return `${`00${m}`.slice(-2)} : ${`00${s}`.slice(-2)}`;
    }
  }
};
</script>
<style scoped>
#count{
  position:relative;
  width: 2rem /* 150/75 */;
  height: 2rem;
  margin-left: 3.6rem;
  line-height: 1.6rem;
  border-radius: 50%;
  border: .2rem /* 3/75 */ solid #ccc;
  background:#fff;
  text-align: center;
  font-size: .4rem;
}
</style>


