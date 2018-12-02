<template>
  <div class="swiper-container">
    <div class="swiper-wrapper">
      <div class="swiper-slide" v-for="(ban ,index) in dataTopic.banner" :key="index">
        <img :src=ban.picUrl>
        <div class="content">
          <span class="title">{{ban.subTitle}}</span>
          <span class="subTitle">{{ban.title}}</span>
          <span class="desc">{{ban.desc}}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import Swiper from 'swiper'
  import {mapState} from 'vuex'
  export default {
    computed : {
      ...mapState(['dataTopic'])
    },
    watch : {
      dataTopic () {
        this.$nextTick(()=>{
            new Swiper ('.swiper-container', {
              loop: true,
              slidesPerView : 'auto',
              centeredSlides : true,
              autoplay : true
            })
        })
      }
    }
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  @import '../../common/stylus/mixins.styl'
  .swiper-container
    display flex
    .swiper-wrapper
      display flex
      .swiper-slide
        width 6.48rem
        height 3.6rem
        display flex
        justify-content flex-start
        position relative
        margin 0 0.01rem
        img
          width 6.48rem
          height 3.6rem
          position: absolute
          left 0
          right: 0
          margin 0 -0.4rem
        .content
          width 4.65rem
          height 1.98rem
          position absolute
          z-index 3
          left 0
          top 0
          bottom 0
          right 0
          margin auto
          background white
          display flex
          flex-direction column
          justify-content space-around
          align-items center
          .title
            font-size 0.16rem
            width 0.96rem
            height 0.3rem
          .subTitle
            font-size 0.3rem
            font-weight bold
            width 3rem
            height 0.48rem
          .desc
            font-size 0.16rem
            width 3.36rem
            height 0.36rem
            text-align: center



</style>
