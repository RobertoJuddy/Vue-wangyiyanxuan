<template>
  <div class="app">
    <CommonHeader>
        <i class="iconfont icon-shouye" slot="left" @click="GoMsite"></i>
        <div slot="middle" class="headerText"></div>
        <span slot="search"><i class="iconfont icon-search"></i></span>
        <span slot="caigou"><i class="iconfont icon-caigou"></i></span>
    </CommonHeader>
    <div class="shadowMaticContainer">
      <div class="main">
        <ShadowSwiper />
        <ShadowScroll />
        <div>
          <Split>
            <span class="text" slot="left">严选推荐</span>
          </Split>
          <Recommend :data="dataTopic.recommend" v-if="dataTopic.recommend"/>
          <ShadowMaticNews :items="dataTopic.recommend" v-if="dataTopic.recommend"/>
        </div>
        <div>
          <Split>
            <span class="text" slot="left" style="left:-1.1rem">十点一刻</span>
          </Split>
          <ShadowMaticScroll />
        </div>
        <div>
          <Split>
            <span class="text" slot="left" style="left:-1.1rem">严选LOOk</span>
          </Split>
          <ShadowLook :data="dataTopic.yxLook" v-if="dataTopic.yxLook"/>
        </div>
        <div>
          <Split>
            <span class="text" slot="left" style="left:-1.1rem; background:#F4F4F4">更多精彩</span>
          </Split>
          <MoreSplended />
        </div>
      </div>
    </div>
  </div>

</template>

<script>
  import {mapState} from 'vuex'
  import BScroll from 'better-scroll'
  import ShadowSwiper from '../../components/ShadowSwiper/ShadowSwiper'
  import ShadowScroll from "../../components/ShadowScroll/ShadowScroll";
  import Recommend from "../../components/Recommend/Recommend";
  import ShadowMaticNews from "../../components/ShadowMaticNews/ShadowMaticNews";
  import ShadowMaticScroll from "../../components/ShadowMaticScroll/ShadowMaticScroll";
  import ShadowLook from "../../components/ShadowLook/ShadowLook";
  import MoreSplended from "../../components/MoreSplended/MoreSplended";
  export default {
   mounted () {
     this.$store.dispatch('getDataTopic')
   },
    components : {
      MoreSplended,
      ShadowLook,
      ShadowMaticScroll,
      ShadowMaticNews,
      Recommend,
      ShadowScroll,
      ShadowSwiper
    },
    computed : {
      ...mapState(['dataTopic'])
    },
    watch : {
     dataTopic () {
       this.$nextTick(()=>{
         new BScroll('.shadowMaticContainer' ,{
           scrollX : true,
           click : true
         })
       })
     }
    },
    methods : {
      GoMsite () {
        this.$router.replace('/msite')
      }
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

    .shadowMaticContainer
      width 7.5rem
      height 100%

      .main
        width 7.5rem
        margin-top .8798rem
        padding-bottom 2rem



</style>
