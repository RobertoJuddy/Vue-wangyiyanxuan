<template>
  <div class="shadowScrollContainer">
    <ul class="shadowScrollList">
      <li v-for="(item ,index) in dataTopic.column" :key="index">
        <img :src=item.picUrl>
        <span class="shadowScrollText">{{item.title}}</span>
        <span class="shadowTopText">{{item.articleCount}}</span>
      </li>

    </ul>
  </div>
</template>

<script>
  import BScroll from 'better-scroll'
  import {mapState} from 'vuex'
  export default {
    computed : {
      ...mapState(['dataTopic'])
    },
    watch : {
      dataTopic () {
        this.$nextTick(() =>{
          new BScroll('.shadowScrollContainer', {
            scrollX :true,
            click : true
          })
        })
      }
    }
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  @import '../../common/stylus/mixins.styl'
  .shadowScrollContainer
    display flex
    padding 0.28rem 0.3rem
    box-sizing border-box
    .shadowScrollList
      display flex
      li
        width 1.64rem
        height 2.1rem
        margin-right 0.2rem
        position relative
      img
        width 1.64rem
        height 1.64rem
      .shadowScrollText
        width 1.64rem
        height 0.24rem
        font-size 0.14rem
        position absolute
        left: 0.5rem
        top: 1.8rem
      .shadowTopText
        width 1.64rem
        height 0.32rem
        background #BBB6B2
        color white
        font-size 0.14rem
        position absolute
        left: 0
        top: 0
        text-align: center
</style>
