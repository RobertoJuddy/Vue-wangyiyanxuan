<template>
  <div class="directSupply">
    <ul class="supplyList">
      <li class="one" v-for="(tag, index) in homeData.tagList" :key="index" v-if="index<=3">
        <img :src="tag.picUrl"  class="supplyImg" />
        <span class="tagName">{{tag.name}}</span>
        <span class="tagPrice">{{tag.floorPrice}}元起</span>
      </li>
    </ul>
  </div>
</template>

<script>
  import {mapState} from 'vuex'
  export default {
    computed: {
      ...mapState(['homeData'])
    },
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  @import '../../common/stylus/mixins.styl'
  .directSupply
    width 7.5rem
    .supplyList
      width 7.5rem
      li
        width 3.5rem
        height 2.36rem
        border 0.02rem solid #D2D2D2
        float left
        padding 0.36rem
        box-sizing border-box
        margin-left 0.16rem
        margin-bottom  0.16rem;
        background #F5F5F5
        position relative
        .supplyImg
          width 100%
          height 100%
        .tagName
          font-size 0.16rem
          position absolute
          left 0
          top 0.1rem
        .tagPrice
          font-size 0.16rem
          position absolute
          left 0
          top 0.5rem
</style>
