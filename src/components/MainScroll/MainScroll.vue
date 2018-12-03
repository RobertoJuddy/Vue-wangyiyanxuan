<template>
 <div>
   <div class="living" v-for="(cate ,index) in cateList" :key="index">
     <h3 class="livingText">{{cate.name}}好物</h3>
     <ul class="livingList">
       <li v-for="(item , index) in cate.itemList" :key="index">
         <img v-lazy="item.primaryPicUrl" />
         <span class="livingName">{{item.name}}</span>
         <span class="simpleDesc">{{item.simpleDesc}}</span>
         <span class="livingPrice">￥{{item.retailPrice}}</span>
       </li>
     </ul>
   </div>
 </div>

</template>

<script>
  import {mapGetters} from 'vuex'
  export default {
    computed : {
      ...mapGetters(['cateList'])

    }
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  @import '../../common/stylus/mixins.styl'
  .living
    width 7.5rem
    height 23.5rem
    .livingText
      text-align: center
      font-size 0.3rem
      width 7.5rem
      height 1.2rem
      line-height 1.2rem
      border-top 0.01rem solid grey
    .livingList
      width 7.5rem
      height 23.07rem
      li
        width 3.45rem
        height 5.61rem
        float left
        margin 0 0.124rem
        img
          width 3.45rem
          height 3.45rem
        .livingName
          font-size 0.16rem
          width 3.47rem
          height 0.69rem
          line-height 0.69rem
          text-align center
          display block
          background #F1ECE2
        .simpleDesc
          font-size 0.16rem
          width 3.45rem
          height 0.48rem
          display block
          text-align center
          line-height 0.48rem
        .livingPrice
          font-size 0.2rem
          color red
          display block
          width 1.06rem
          height 0.42rem
          line-height 0.42rem
          margin-left 0.3rem

</style>
