<template>
    <div>
      <!-- swiper -->
      <swiper :options="swiperOption" class="swiper">
        <swiper-slide v-for="item in adsArray"  :key="item.id">
          <img :src="item.images" alt="">
        </swiper-slide>
        <div class="swiper-pagination" slot="pagination"></div>
      </swiper>
    </div>
</template>

<script>
  export default {
    data() {
      return {
        swiperOption: {
          pagination: '.swiper-pagination',
          nextButton: '.swiper-button-next',
          prevButton: '.swiper-button-prev',
          paginationClickable: true,
          spaceBetween: 30,
          centeredSlides: true,
          autoplay: 2500,
          autoplayDisableOnInteraction: false
        },
        adsArray:[]
      }
    },
    created(){
        this.$http.get('/api/RecommendAD').then((response)=>{
            // console.log(response);
            response=response.data;
            if(response.errno==0){
                this.adsArray=response.data.data;
                console.log(this.adsArray)
            }
        })
    }
  }
</script>

<style scoped>
  .swiper{

  }
</style>