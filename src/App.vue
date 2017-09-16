<template>
  <div id="app">
  	<router-view></router-view>
  	<TabBar></TabBar>
  </div>
</template>

<script>
import TabBar from '@/components/commons/TabBar'
export default {
  name: 'app',
  components:{
    TabBar
  }
}
</script>

<style>
@import url('./assets/reset.css');
#app {

}
</style>
