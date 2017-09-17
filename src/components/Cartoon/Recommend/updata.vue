<template>
	<div class="gengxin">
		<p><b>{{updata.title}}</b><span>{{updata.introduction}}</span></p>
		<ul>
			<li v-for="item in updata.dataList">
				<img :src="item.verticalImages" alt="">
				<span>{{item.chapterUpdateInfo}}</span>
				<span>{{item.name}}</span>
			</li>
		</ul>
	</div>
</template>

<script>
	export default {
		props:['updata']
	}
</script>

<style scoped lang="scss">
p{
	height:30px;
	padding-left:10px;
	line-height:30px;
	span{
		font-size:12px;
		margin-left:15px;

	}
}
.gengxin{
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
}

</style>