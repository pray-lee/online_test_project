<template>
  <div class="big-button">
    <a class="button" href="#">
      {{title}}
    </a>
  </div>
</template>
<script>
export default {
  name: 'BigButton',
  props: ['title']
}
</script>
<style scoped>
.button{
  display:block;
 margin:0 auto;
 width: 9.466667rem /* 710/75 */;
 height: 1.066667rem /* 80/75 */;
 text-align:center;
 color: #fff;
 font-size: .36rem;
 line-height:1.066667rem /* 80/75 */;
 background: linear-gradient(#00a4fe, #00d7f3);
 border-radius:.6rem /* 30/75 */
}
</style>

