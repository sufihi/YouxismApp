<template>
  <div id="cartoonNav">
		<div class="navTop"></div>
		<div class="navFoot">
			<ul>
				<li v-for="item in datalist" @click="pushTo(item)">
					{{item.title}}
				</li>
		    </ul>
		</div>
  </div>
</template>

<script>
	export default {
	  	data(){
	  		return {
	  			datalist:[
	  				{
						name:'recommend',
						path:'/cartoon/recommend',
						title:'推荐'
					},
					{
						name:'special',
						path:'/cartoon/special',
						title:'专题'
					},
					{
						name:'category',
						path:'/cartoon/category',
						title:'类别'
					}
	  			]
	  		}
	  	},
	  	methods:{
			pushTo(val){
				this.$router.push(val.path)
			}
		}
	}
</script>

<style scoped lang="scss">
	#cartoonNav{
		width:100%;
		height:80px;
		background: #DA5151;
	}
	.navTop{
		width:100%;
		height: 50%;
	}
	.navFoot{
		width: 100%;
		height: 50%;
		ul{
			display: flex;

			li{
				display: flex;
				flex:1;
				justify-content:center;
				line-height:40px;
				font-size:16px;
				color:#F2F0F0;
			}
		}
	}
	
</style>