<template>
	<div id="collect">
		<p><b>{{Collect.title}}</b><span>{{Collect.introduction}}</span></p>
		<ul>
			<li v-for="item in Collect.dataList">
				<div class="left">
					<img :src="item.verticalImages" alt="">
				</div>
				<div class="right">
					<span class="first"><b>{{item.name}}</b></span>
					<span class="second">作者:&nbsp;{{item.authorName}}</span>
					<span class="three">类型:&nbsp;{{item.categoryLabel}}</span>
					<span>{{item.chapterUpdateInfo}}</span>
				</div>
			</li>
		</ul>
	</div>
</template>

<script>
	export default {
		props:['Collect']

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
	#collect{
		margin-bottom:20px;
		ul li{
			display: flex;
			flex-direction: rows;
			margin-top: 1px;
			background: white;

			.left{
				width: 35%;
				padding:8px;
				border-bottom:1px solid #E87D7D;
			}
			.right{
				width: 45%;
				display:flex;
				flex-direction:column;
				font-size: 18px;
				padding-top: 10px;
				border-bottom:1px solid #E87D7D;
				span{
					font-size:14px;
					margin-top:15px;
				}
				.first{
					font-size:16px;
				}
				.second{
					color:gray;	
				}
				.three{
			
				}
			}
		}
	}
</style>