<template>
    <div id="category">
		<ul>
			<li v-for="item in ReCatrgory.categoryList">
				<img :src="item.images" alt="">
				<span>{{item.cname}}</span>
			</li>
		</ul>
    </div>
</template>

<script>
	export default {
		data(){
			return {
				ReCatrgory:[]
			}
		},
	  	created(){
	        this.$http.get('/api/ReCategory').then((response)=>{
	            response=response.data;
	            if(response.errno==0){
	                var datalist=response.data.data;
	                for(var i=0;i<datalist.length;i++){
	                	var ReCatrgory = datalist[0];
	                }
	                    this.ReCatrgory=ReCatrgory
	            }
	        })
		}
	}
</script>

<style lang="scss" scoped>
	#category{
		margin-bottom:54px;
		ul{
			display: flex;
			flex-wrap:wrap;
			
		}
	}
	li{
		width:50%;
		border:1px solid rgba(200, 200,200,0.1);
		padding: 4px;
		font-size:12px;
		height:100px;
		img{
			width:50%;
			vertical-align:middle;
		}
	}
	span{
		display:inline-block;
		padding-left:15px;
		margin-bottom:30px;
		font-size:14px;
	}
</style>