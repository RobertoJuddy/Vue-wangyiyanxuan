<template>
  <div class="Category">
    <div class="CategoryHeader">
      <i class="iconfont icon-search"></i>
      <input type="text" placeholder="搜索商品, 共9714款好物"/>
    </div>
    <div class="CategoryMain">
      <div class="CategoryLeft">
        <CategoryList />
      </div>
      <div class="CategoryScrollMain">
        <div class="CategoryRight">
          <CategoryRight />
        </div>
      </div>

    </div>
  </div>
</template>

<script>
  import {mapState} from 'vuex'
  import CategoryList from "../../components/CategoryList/CategoryList";
  import CategoryRight from "../../components/CategoryRight/CategoryRight";
  import BScroll from 'better-scroll'
  export default {
    computed : {
      ...mapState(['dataNav']),

    },
    components: {
      CategoryRight,
      CategoryList
    },
    // watch : {
    //   dataNav () {
    //     this.$nextTick(()=>{
    //       if(!this.BScroll){
    //         this.BScroll = new BScroll('.CategoryScrollMain' , {
    //           click : true
    //         })
    //       }else {
    //         this.BScroll.refresh()
    //       }
    //
    //       })
    //
    //     }
    //   }
    }

</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  @import '../../common/stylus/mixins.styl'
  .Category
    width 7.5rem
    height 13.34rem
    .CategoryHeader
      width 8.1rem
      height 0.89rem
      display flex
      align-items center
      justify-content center
      position relative
      border-bottom 0.03rem solid #EDEDED
      background white
      z-index 5
      input
        width 6.87rem
        height 0.51rem
        background #EDEDED
        font-size 0.3rem
        text-align center
        margin-right 0.55rem
      .iconfont
        position absolute
        left 1.5rem
        top 0.3rem
    .CategoryMain
      .CategoryLeft
        float left
      .CategoryScrollMain
        height 11.44rem
        .CategoryRight
          float right



</style>
