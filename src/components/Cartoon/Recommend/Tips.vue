<template>
	<div id="tips">
		<p><b>{{Tips.title}}</b><span>{{Tips.introduction}}</span></p>
		<ul>
			<li v-for="item in Tips.dataList">
				<div class="left">
					<img :src="item.verticalImages" alt="">
				</div>
				<div class="right">
					<span class="first"><b>{{item.name}}</b></span>
					<span class="second">
						<span>{{item.authorName}}/</span>
						<span>{{item.chapterUpdateInfo}}</span>
					</span>
					<span class="three">{{item.categoryLabel}}</span>
					<span class="four">{{item.introduction}}</span>
				</div>
			</li>
		</ul>
	</div>
</template>
<script>
	export default {
		props:['Tips']
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
	#tips{
		margin-bottom:54px;
		ul li{
			display: flex;
			flex-direction: rows;
			margin-top: 1px;
			background: white;
			.left{
				width: 42%;
				padding:8px;
				// display:flex;
			}
			.right{
				width: 58%;
				display:flex;
				flex-direction:column;
				font-size: 18px;
				padding-top: 10px;
				span{
					font-size:14px;
					margin-top:20px;
				}
				.first{
					font-size:16px;
				}
				.second{
					color:gray;	
				}
				.three{
			
				}
				.four{
					word-break: break-all;
					display:-webkit-box;
					-webkit-line-clamp:2;
					-webkit-box-orient: vertical;
					overflow: hidden;
				}
			}
		}
	}
</style>