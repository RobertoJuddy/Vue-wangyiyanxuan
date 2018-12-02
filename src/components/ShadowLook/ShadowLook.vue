<template>
  <div class="ShadowLook">
    <div class="ShadowLookImg">
      <img :src=data.picUrl />
    </div>
    <div class="ShadowLookInfo">
      <img :src=data.avatar />
      <span class="ShadowLookText">{{data.content}}</span>
    </div>

  </div>
</template>

<script>
  import {mapState} from 'vuex'
  export default {
    props : {
      data : Object
    }
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  @import '../../common/stylus/mixins.styl'
  .ShadowLook
    width 7.5rem
    height 9rem
    .ShadowLookImg
      width 7.5rem
      height 7.5rem
      img
        width 100%
        height 100%
    .ShadowLookInfo
      width 6.9rem
      height 0.48rem
      display flex
      align-items center
      margin-top 0.3rem
      img
        width 0.48rem
        height 0.48rem
        border-radius 50%
        margin-right 0.2rem
      .ShadowLookText
        width 0.91rem
        height 0.24rem
        font-size 0.14rem
        white-space nowrap
        overflow hidden
        text-overflow ellipsis

</style>
