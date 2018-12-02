<template>
  <div>
    <div class="shadowMaticNews" v-for="(item ,index) in items.Item" :key="index" v-if="index>0">
      <div class="left">
        <div class="leftInfo">
          <img :src=item.avatar />
          <div class="name">{{item.nickname}}</div>
        </div>
        <div class="worldCup">{{item.title}}</div>
        <div class="discounts">{{item.subTitle}}</div>
      </div>
      <div class="right">
        <img :src=item.picUrl />
        <span class="RecommendText">{{item.typeName}}</span>
      </div>
    </div>
  </div>

</template>

<script>
  export default {
    props : {
      items : Object
    }
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  @import '../../common/stylus/mixins.styl'
  .shadowMaticNews
    width 6.9rem
    height 3.36rem
    margin-top 0.15rem
    margin-bottom 0.4rem
    padding 0 0.2rem
    box-sizing border-box
    .left
      width 3.58rem
      height 2.86rem
      float left
      .leftInfo
        width 3.08rem
        hegiht 0.48rem
        display flex
        align-items center
        margin-left 0.2rem
        img
          width 0.48rem
          height 0.48rem
          border-radius 50%
        .name
          font-size 0.14rem
      .worldCup
        width 3.08rem
        height 0.42rem
        line-height 0.42rem
        font-size 0.4rem
        white-space nowrap
        overflow hidden
        text-overflow ellipsis
        margin 0.1rem 0 0.2rem 0.2rem
      .discounts
        width 3.08rem
        height 1.7rem
        font-size 0.14rem
        margin-left 0.2rem
        color grey
        /*white-space nowrap*/
        overflow hidden
        /*text-overflow ellipsis*/
    .right
      float right
      width 2.79rem
      height 2.87rem
      position relative
      img
        width 2.79rem
        height 2.79rem
      .RecommendText
        display block
        width 2.01rem
        height 0.38rem
        background white
        color black
        border-radius 0.2rem
        font-size 0.14rem
        text-align: center
        line-height 0.38rem
        position absolute
        left 0.15rem
        top 0.15rem
</style>
