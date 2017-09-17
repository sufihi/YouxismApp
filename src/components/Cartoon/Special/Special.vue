<template>
  <div id="special">
		<div class="sun">
		</div>
		<div class="list">
			<ul>
				<li v-for="item in SpecialList">
					<img :src="item.images" alt="">
				</li>
			</ul>
		</div>
  </div>
</template>

<script>
	export default {
		data(){
			return {
				SpecialList:[],
			}
		},
	  created(){
	        this.$http.get('/api/ReSpecial').then((response)=>{
	            response=response.data;
	            if(response.errno==0){
	                this.SpecialList=response.data.data;
	            }
	        })
		}
	}
</script>

<style lang="scss" scoped>
	#special{
		.sun{
			height:200px;
		}
		.list{
			padding:10px;
			margin-bottom:54px;
			background:#D5D3D3;
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
	}
</style>