<template>
  <div>
    <div class="MoreSplended" v-for="(item, index) in dataTopic.yxWeek" :key="index">
      <div class="MoreSplendedImg">
        <img :src=item.itemPicUrl />
        <div class="MoreSplendedText">
          <span>{{item.subTitle}}</span>
        </div>
      </div>
    </div>
  </div>

</template>

<script>
  import {mapState} from 'vuex'
  export default {
    computed : {
      ...mapState(['dataTopic'])
    }

  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  @import '../../common/stylus/mixins.styl'
  .MoreSplended
    width 6.9rem
    height 5.05rem
    margin-top 0.5rem
    .MoreSplendedImg
      width 6.42rem
      height 3.6rem
      img
        width 100%
        height 100%
    .MoreSplendedText
      width 6.9rem
      height 0.9rem
      margin-top 0.3rem
      position relative
      span
        display block
        width 6.9rem
        height 0.9rem
        line-height 0.9rem
        font-size 0.16rem
        white-space nowrap
        overflow hidden
        text-overflow ellipsis
        position absolute
        top: 0
        bottom: 0
        margin auto 0
</style>
