<template>
  <div id="app">
    <router-view/>
  </div>
</template>
<script>
import getQueryParams from './util/getQueryString'
import Listener from './util/listener'
export default {
  name: 'App',
  created () {
    let type = getQueryParams('type')
    Listener.token = getQueryParams('token')
    if (type == 1) {
      this.$router.push({ path: '/' })
    } else {
      this.$router.push({ path: '/record' })
    }
  }
}
</script>
