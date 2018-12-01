<template>
  <div class="PublishContainer">
    <ul class="containerList">
      <li v-for="(newItem , index) in homeData.newItemList" :key="index">
        <img :src="newItem.primaryPicUrl" />
        <span class="name">新品</span>
        <span class="much">{{newItem.name}}</span>
        <span class="type">{{newItem.simpleDesc}}</span>
        <span class="price">{{newItem.retailPrice}}￥</span>
      </li>
    </ul>
  </div>
</template>


<script>
  import BScroll from 'better-scroll'
  import {mapState} from 'vuex'
  export default {
    computed : {
      ...mapState(['homeData'])
    },
    watch : {
      homeData () {
        this.$nextTick(()=>{
          new BScroll ('.PublishContainer',{
            scrollX : true,
            click : true
          })
        })
      }
    }
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  @import '../../common/stylus/mixins.styl'
  .PublishContainer
    width 100%
    display flex
    .containerList
      display flex
      justify-content flex-start
      li
        width 2.8rem
        height 4.8rem
        position: relative
        img
          width 2.8rem
          height 2.8rem
        .name
          font-size 0.14rem
          color white
          background: orange
          padding 0.1rem
          box-sizing border-box
          position: absolute
          left 0.3rem
          top 3rem
        .much
          font-size 0.14rem
          position: absolute
          left 0.3rem
          top 3.6rem
          white-space nowrap
          overflow hidden
          text-overflow ellipsis
          width 1.5rem
        .type
          font-size 0.14rem
          position: absolute
          left 0.3rem
          top 4rem
          white-space nowrap
          overflow hidden
          text-overflow ellipsis
          width 1.5rem
          color grey
        .price
          font-size 0.14rem
          position: absolute
          left 0.3rem
          top 4.4rem
          color red

</style>
