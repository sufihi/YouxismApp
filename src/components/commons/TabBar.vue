<template>
	<div id="tabbar">
		<ul>
			<li v-for="item in tabList" @click="pushTo(item)">
				{{item.title}}
			</li>
		</ul>
	</div>
</template>

<script>
	export default{
		data(){
			return{
				tabList:[
					{
						name:'cartoon',
						path:'/cartoon',
						title:'漫画'
					},
					{
						name:'fiction',
						path:'/fiction',
						title:'小说'
					},
					{
						name:'community',
						path:'/community',
						title:'社区'
					},
					{
						name:'ranking',
						path:'/ranking',
						title:'书架'
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

<style scoped>
	#tabbar{
		position: fixed;
		width: 100%;
		bottom: 0px;
		right: 0px;
		left: 0px;
		height: 54px;
		background: #F2F0F0;
	}
	ul{
		display: flex;
		line-height: 54px;
		text-align: center;
		font-size: 18px;
	}
	li{
		flex: 1;
		border-top: 1px solid #DDDBDB;
		color: gray;
	}
</style>