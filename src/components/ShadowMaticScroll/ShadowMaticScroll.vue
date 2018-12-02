<template>
  <div class="ShadowContainer">
    <div class="ShadowMaticContainer">
      <div class="ShadowMacicMain" v-for="(data, index) in dataTopic.tenfifteen" :key="index">
        <div class="days">今日话题</div>
        <div class="life">{{data.title}}</div>
        <div class="tear">{{data.desc}}</div>
        <div class="ShadowImgAll">
          <div class="ShadowImg" >
            <img  src="https://yanxuan.nosdn.127.net/0e6cc440246db5f3ea2e908c16554ec1"/>
          </div>
          <div class="ShadowImg" >
            <img  src="https://yanxuan.nosdn.127.net/0e6cc440246db5f3ea2e908c16554ec1"/>
          </div>

          <span class="person">5</span>
          <span class="ShadowText">人参加话题</span>
        </div>
      </div>
    </div>
  </div>

</template>

<script>
  import {mapState} from 'vuex'
  import BScroll from 'better-scroll'
  export default {
    computed : {
      ...mapState(['dataTopic'])
    },
    watch : {
      dataTopic () {
        this.$nextTick(()=>{
          new BScroll('.ShadowContainer' ,{
            click : true,
            scrollX : true
          })
        })
      }
    }
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  @import '../../common/stylus/mixins.styl'
.ShadowContainer
  display flex
  .ShadowMaticContainer
    display flex
    .ShadowMacicMain
      width 6.9rem
      height 5.27rem
      background url("//yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/tenFifteen-2a1d0ea11b.png")
      background-size 6.59rem 5.27rem
      background-repeat: no-repeat;
      margin-right: 0.4rem;
      text-align: center
      position relative
      .days
        width 100%
        text-align: center
        font-size: 0.2rem
        position absolute
        color grey
        /*left 2.5rem*/
        top 0.5rem
      .life
        width 100%
        font-size 0.4rem
        font-weight bold
        display flex
        justify-content center
        position absolute
        top 1.2rem
      .tear
        width 100%
        font-size 0.25rem
        display flex
        justify-content center
        position absolute
        top 2.1rem
      .ShadowImgAll
        width 5rem
        height 0.75rem
        display flex
        margin-top 2.8rem
        margin-left 1.7rem
        .ShadowImg
          width 0.5rem
          height 0.5rem
          display flex
          margin-right 0.2rem
          img
            width 100%
            height 100%
            border-radius 50%
        .ShadowText
          width 1.2rem
          height 0.31rem
          font-size 0.14rem
          margin-top 0.1rem
          color grey
        .person
          width 0.14rem
          height 0.31rem
          font-size 0.14rem
          margin-top 0.1rem





</style>
