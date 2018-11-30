<template v-if="state.homeData">
  <div class="mask">
    <div class="maskImg">
      <img class="yanxuan" src="//yanxuan.nosdn.127.net/53df1ead033706dcd7da9a91c8977b83.jpg" />
      <img class="app" src="//yanxuan.nosdn.127.net/143424244e87fb8eed45c6984c769a63.jpg" />
    </div>
    <img class="footerImg" src="//yanxuan.nosdn.127.net/06a2d444a39e1dfe621b7f0d317de7b4.jpg" />
    <router-link class="maskTo" to="/msite" >继续使用触屏版浏览</router-link>
  </div>
</template>

<script>

  export default {
    mounted () {
      this.$store.dispatch('getHomeData')
    }
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  @import '../../common/stylus/mixins.styl'
  .mask
    width 7.5rem
    height 13.34rem
    background #EEEEEE
    position relative
    .maskImg
      width 7.5rem
      height 7rem
      padding-top 1.86rem
      .yanxuan
        width 7.5rem
        height 3.86rem
      .app
        width 7.5rem
        height 3.27rem
    .footerImg
      width 7.5rem
      height 4.32rem
    .maskTo
      width 3.38667rem
      height .4rem
      left 3.14667rem
      top 11.11rem
      position absolute
      display block
      font-size 0.16rem
      line-height 1.5
      color #211F24

</style>
