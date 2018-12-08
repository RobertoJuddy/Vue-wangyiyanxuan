<template>
  <div class="goTopContainer">
    <span class="goTop" @click="goTop">
      <i class="iconfont icon-goTop"></i>
    </span>
  </div>

</template>

<script>
  export default {
    props : {
      goToTop : Function
    },
   methods : {
     goTop () {
       this.goToTop()
     }
   }
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  @import '../../common/stylus/mixins.styl'
  body
    position: relative
    .goTopContainer
      width 1rem
      height 1rem
      position absolute
      right 0
      bottom 1.2rem
      .goTop
        width 100%
        height 100%
        text-align center
        line-height 1rem
        display block
        .icon-goTop
          font-size 0.8rem
          color #ccc


</style>
