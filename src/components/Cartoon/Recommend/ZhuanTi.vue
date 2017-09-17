<template>
	<div id="zhuanti">
		<div v-for="item in ImgObj.dataList">
			<img :src="item.bannerImages" alt="">
		</div>
		<div>
			<p><b>{{ZhuanTi.title}}</b><span>{{ZhuanTi.introduction}}</span></p>
			<ul>
				<li v-for="item in ZhuanTi.dataList">
					<img :src="item.bannerImages" alt="">
				</li>
			</ul>
		</div>
	</div>
</template>

<script>
	export default {
		props:['ImgObj','ZhuanTi']
	}
</script>

<style lang="scss" scoped>
	p{
		height:30px;
		padding-left:10px;
		line-height:30px;
		span{
			font-size:12px;
			margin-left:15px;

		}
	}
	#zhuanti{
		margin-bottom:20px;
		div{
			margin-bottom:20px;
		}
		
		ul{
			display: flex;
			flex-wrap:wrap;
			li{
				width:50%;
				// border:1px solid rgba(200, 200,200,0.1);
				display: flex;
				flex-direction:column;
				padding: 4px;
				font-size:12px;
				img{
					border-radius:8px;
				}

			}
		}
	}
</style>