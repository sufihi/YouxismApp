<template>
    <div id="recommend">
		<RecommendAD></RecommendAD>
		<updata :updata="updata"></updata>
		<ZhuanTi :ImgObj="ImgObj"  :ZhuanTi="ZhuanTi"></ZhuanTi>
		<Tips :Tips="Tips"></Tips>
    </div>
</template>

<script>
import RecommendAD from './RecommendAD'
import updata from './updata'
import ZhuanTi from './ZhuanTi'
import Tips from './Tips'


	export default {
	  	components:{RecommendAD,updata,ZhuanTi,Tips},
	  	data(){
	  		return {
	  			updata:[],//更新
	  			ImgObj:[],//图片
	  			ZhuanTi:[],//专题
	  			Tips:[]
	  		}
	  	},
		created(){
	        this.$http.get('/api/RecommendList').then((response)=>{
	            response=response.data;
	            if(response.errno==0){
	                var datalist=response.data.data;
	                for(var i=0;i<datalist.length;i++){
	                	var updataList = datalist[0];
	                	var ImgObj = datalist[1];
	                	var ZhuanTi = datalist[2];
	                	var Tips = datalist[3];
	                }
		                this.updata=updataList;
		                this.ImgObj=ImgObj;
		                this.ZhuanTi=ZhuanTi;
		                this.Tips=Tips;

	            }
	        })
		}
	}
</script>

<style scoped lang="scss">

</style>