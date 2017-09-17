<template>
  <div id="cartoon">
		<CartoonNav></CartoonNav>
		<keep-alive>
			<router-view></router-view>
		</keep-alive>

  </div>
</template>

<script>
import CartoonNav from './CartoonNav'
	export default {
	  	components:{CartoonNav}
	}
</script>

<style lang="scss" scoped>

</style>
