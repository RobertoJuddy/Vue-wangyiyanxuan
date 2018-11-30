<template>
  <div class="swiper-container">
    <div class="swiper-wrapper" >
      <div class="swiper-slide" v-for="(focus, index) in homeData.focusList" :key="index">
        <img :src="focus.picUrl" />
      </div>

    </div>
    <div class="swiper-pagination"></div>
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
          effect : 'fade',
          pagination: {
            el: '.swiper-pagination',
          },
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
    position relative
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
<style  lang="stylus" rel="stylesheet/stylus">
  .swiper-pagination
    width 100%
    height 0.2rem
    position absolute
    bottom: 0
    left: 0
    display flex
    z-index 10
    margin 0 auto
    justify-content center
    .swiper-pagination-bullet
      display block
      width 0.5rem
      height 0.06rem
      background: orange
      margin-right 0.2rem
      opacity 0.5
      &.swiper-pagination-bullet-active
        opacity 1

</style>
