<template>
  <div class="swiper-container">
    <div class="swiper-wrapper" >
      <div class="swiper-slide" v-for="(focus, index) in homeData.focusList" :key="index">
        <img :src="focus.picUrl" />
      </div>
    </div>
  </div>
</template>

<script>
  import Swiper from 'swiper'
  import {mapState} from 'vuex'
  export default {
    mounted () {

      this.$store.dispatch('getHomeData',()=>{
        this.$nextTick(()=>{
          this._initialSwiper()
        })

      })

    },
    computed : {
      ...mapState(['homeData'])
    },
    methods : {
      _initialSwiper() {
        new Swiper('.swiper-container', {
          autoplay: true,//可选选项，自动滑动
          loop : true,
          effect : 'fade'
        })
      }

    }

  }

</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  @import '../../common/stylus/mixins.styl'
  .swiper-container
    width 100%
    height 3.7rem
    .swiper-wrapper
      width 1000%
      height 100%
      .swiper-slide
        width 12.5%
        height 100%
        float left
        img
          width 100%
          height 100%
</style>
