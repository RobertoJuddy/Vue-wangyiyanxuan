<template>
  <div class="app">
    <CommonHeader>
        <span slot="left"><i class="iconfont icon-shouye"></i></span>
        <div slot="middle" class="headerText"></div>
        <span slot="search"><i class="iconfont icon-search"></i></span>
        <span slot="caigou"><i class="iconfont icon-caigou"></i></span>
    </CommonHeader>
    <div class="shadowContainer">
      <div class="main">
        <ShadowSwiper />
        <ShadowScroll />
        <div>
          <Split>
            <span class="text" slot="left">严选推荐</span>
          </Split>
          <Recommend :data="dataTopic.recommend"/>

        </div>
      </div>
    </div>
  </div>

</template>

<script>
  import ShadowSwiper from '../../components/ShadowSwiper/ShadowSwiper'
  import ShadowScroll from "../../components/ShadowScroll/ShadowScroll";
  import Recommend from "../../components/Recommend/Recommend";
  import {mapState} from 'vuex'
  export default {
   mounted () {
     this.$store.dispatch('getDataTopic')
   },
    components : {
      Recommend,
      ShadowScroll,
      ShadowSwiper
    },
    computed : {
      ...mapState(['dataTopic'])
    }
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  @import '../../common/stylus/mixins.styl'
  .app
    width 7.5rem
    height 13.34rem
    padding 0 0.3rem
    box-sizing border-box
    .shadowContainer
      width 7.5rem
      height 100%
      .main
        width 7.5rem
        height 1000rem
        margin-top .8798rem



</style>
