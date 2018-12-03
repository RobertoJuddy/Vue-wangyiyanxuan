<template>
  <div class="CategoryScroll">
    <div class="CategoryRightInfo" v-for="(data, dataItem) in dataNav.categoryList" :key = dataItem v-if="dataItem === index">
      <div class="CategoryImg">
        <img v-lazy=data.bannerUrl />
      </div>
      <div class="CategoryText">
        <span class="recommend">{{data.name}}</span>
        <span class="classify">分类</span>
      </div>
      <div class="CategoryMain">
        <ul class="CategoryMainList">
          <li v-for="(item, itemIndex) in data.subCateList" :key = itemIndex>
            <img v-lazy=item.wapBannerUrl />
            <span class="CategoryTitle">{{item.name}}</span>
          </li>
        </ul>
      </div>
    </div>
  </div>

</template>

<script>
  import Pubsub  from 'pubsub-js'
  import {mapState} from 'vuex'
  export default {
  data () {
    return {
      index : 0
    }
  },
    props : {
      Info : Array
    },
    mounted () {
      Pubsub.subscribe('msg',  (msg , index)=> {
          console.log(index)
          this.index = index
      })
    },
    computed : {
      ...mapState(['dataNav']),
    },

  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  @import '../../common/stylus/mixins.styl'
 .CategoryScroll
   width 100%
   /*height 6.75rem*/

  .CategoryRightInfo
    width 5.28rem
    padding 0.3rem 0.3rem 0.21rem 0.3rem
    box-sizing border-box
    .CategoryImg
      width 5.28rem
      height 1.92rem
      margin-left -0.6rem
      img
        width 5.28rem
        height 1.73rem
    .CategoryText
      width 5.28rem
      height 1.08rem
      text-align center
      .recommend
        width 0.96rem
        height 0.31rem
        font-size .2rem
        text-align center
        margin-left -0.8rem
      .classify
        width 0.96rem
        height 0.31rem
        font-size .2rem
        text-align center
        margin-right 0.5rem
    .CategoryMain
      width 5.28rem
      .CategoryMainList
        width 100%
        margin-left -0.3rem
        li
          width 1.44rem
          height 2rem
          display flex
          flex-direction column
          justify-content center
          float left
          margin-right .3rem
          img
            width 1.44rem
            height 1.44rem
            border-radius 50%
          span
            width 1.44rem
            height 0.75rem
            font-size .16rem
            text-align center

</style>
