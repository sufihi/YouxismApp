<template>
  <div id="special">
		<div class="sun">
			<ul>
				<li v-for="item in SpecialSun">
					<img :src="item.image" alt="">
				</li>
			</ul>
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
				SpecialSun:[]
			}
		},
	  created(){
	        this.$http.get('/api/ReSpecial').then((response)=>{
	            response=response.data;
	            if(response.errno==0){
	                this.SpecialList=response.data.data;
	                this.SpecialSun=response.data.sun;
	            }
	        })
		}
	}
</script>

<style lang="scss" scoped>
	#special{
		.sun{
			padding:5px;
			margin-bottom:20px;
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