<template>
	<div id="putaway">
		<p><b>{{Putaway.title}}</b><span>{{Putaway.introduction}}</span></p>
		<ul>
			<li v-for="item in Putaway.dataList">
				<img :src="item.verticalImages" alt="">
				<span>{{item.chapterUpdateInfo}}</span>
				<span>{{item.name}}</span>
			</li>
		</ul>

		<div class="Img" v-for="item in ImgObj2.dataList">
			<img :src="item.bannerImages" alt="">
		</div>

		<p><b>{{Like.title}}</b><span>{{Like.introduction}}</span></p>
		<ul>
			<li v-for="item in Like.dataList">
				<img :src="item.verticalImages" alt="">
				<span>{{item.chapterUpdateInfo}}</span>
				<span>{{item.name}}</span>
			</li>
		</ul>
	</div>
</template>

<script>
	export  default {
		props:['Putaway','ImgObj2','Like']
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
	#putaway{
		margin-bottom:54px;
		ul{
			display: flex;
			flex-wrap:wrap;
			margin-bottom:20px;
			li{
				width:33.3%;
				border:1px solid rgba(200, 200,200,0.1);
				display: flex;
				flex-direction:column;
				padding: 4px;
				font-size:12px;
				span{
					text-align:center;
					word-break: break-all;
					display:-webkit-box;
					-webkit-line-clamp:1;
					-webkit-box-orient: vertical;
					overflow: hidden;
				}
				img{
					height:160px;
				}

			}
		}
		.Img{
			margin-bottom:20px;
		}
	}
</style>