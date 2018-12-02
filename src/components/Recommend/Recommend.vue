<template>
  <div>
    <div class="Recommend" v-if="data" >
      <img class="RecommendImg" :src=data.Item[0].picUrl />
      <span class="RecommendText">{{data.Item[0].typeName}}</span>
    </div>
    <div class="nickInfo" >
      <span class="nickName">{{data.Item[0].nickname}}</span>
      <span class="nickPrice">{{data.Item[0].priceInfo}}元起</span>
      <span class="nickDescript">{{data.Item[0].subTitle}}</span>
    </div>
  </div>
</template>

<script>
  export default {
    props : {
      data : Object
    }
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  @import '../../common/stylus/mixins.styl'
  .Recommend
    width 6.88rem
    height 3.86rem
    position relative
    .RecommendImg
      width 100%
      height 100%
    .RecommendText
      display block
      width 1.61rem
      height 0.38rem
      background white
      color black
      border-radius 0.2rem
      font-size 0.14rem
      text-align: center
      line-height 0.38rem
      position absolute
      left 0.5rem
      top 0.5rem

  .nickInfo
    width 6.9rem
    height 1.22rem
    position relative
    .nickName
      font-size 0.4rem
      position absolute
      left 0.3rem
      top 0.3rem
    .nickPrice
      font-size 0.4rem
      position absolute
      right 0.3rem
      top 0.3rem
    .nickDescript
      width 6.5rem
      height 0.33rem
      font-size 0.3rem
      position absolute
      left 0.3rem
      bottom 0.05rem
      color grey

</style>
