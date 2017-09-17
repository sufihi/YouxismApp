<template>
    <div id="recommend">
		<RecommendAD></RecommendAD>
		<updata :updata="updata"></updata>
		<ZhuanTi :ImgObj="ImgObj"  :ZhuanTi="ZhuanTi"></ZhuanTi>
		<Tips :Tips="Tips"></Tips>
		<Collect :Collect="Collect"></Collect>
		<Putaway :Putaway="Putaway" :ImgObj2="ImgObj2" :Like="Like"></Putaway>
    </div>
</template>

<script>
import RecommendAD from './RecommendAD'
import updata from './updata'
import ZhuanTi from './ZhuanTi'
import Tips from './Tips'
import Collect from './Collect'
import Putaway from './Putaway'



	export default {
	  	components:{RecommendAD,updata,ZhuanTi,Tips,Collect,Putaway},
	  	data(){
	  		return {
	  			updata:[],//更新
	  			ImgObj:[],//图片
	  			ZhuanTi:[],//专题
	  			Tips:[],//小编推荐
	  			Collect:[],//每周收藏
	  			Putaway:[],//最新上架
	  			ImgObj2:[],
	  			Like:[]
	  		}
	  	},
		created(){
	        this.$http.get('/api/RecommendList').then((response)=>{
	            response=response.data;
	            if(response.errno==0){
	                var datalist=response.data.data;
	                for(var i=0;i<datalist.length;i++){
	                }
		                this.updata=datalist[0];
		                this.ImgObj=datalist[1];
		                this.ZhuanTi=datalist[2];
		                this.Tips=datalist[3];
		                this.Collect=datalist[4];
		                this.Putaway=datalist[5];
		                this.ImgObj2=datalist[6];
		                this.Like=datalist[7];
	            }
	        })
		}
	}
</script>

<style scoped lang="scss">

</style>