<template>
  <div class="wrap" >
    <div class="header">
      <div class="headerTop">
        <h2>网易严选</h2>
        <input type="text" placeholder="搜索商品，共1111件好商品"/>
        <span class="iconItem"><i class="iconfont icon-search"></i></span>
      </div>
      <div class="wrapper" >
        <ul class="navList" ref="ulList">
          <li @click="ChangeIsShow(index)" v-for="(type,index) in types" :key="index">
            <span class="navItem" :class="{active : currentIndex === index}">{{type.name}}</span>
          </li>
        </ul>
      </div>
    </div>
    <div class="container">
      <div class="main">
        <Swiper />
        <div class="serve">
          <div class="serveItem" v-for="(police , index) in homeData.policyDescList" :key="index">
            <img :src="police.icon" class="imgServe" />
            <span>{{police.desc}}</span>
          </div>
        </div>
        <div class="split">
          <Split >
            <span class="text" slot="left">品牌制造商直供</span>
            <span class="icon" slot="right"><i class="iconfont icon-right"></i></span>
          </Split>
          <DirectSupply />
        </div>

        <div class="firstPublish">
          <div class="new">新品首发</div>
          <button>查看全部</button>
        </div>
        <PublishSwiper />

        <div class="m-site" v-if="homeData.saleIndexVO">
          <img :src="homeData.saleIndexVO.picUrl"/>
        </div>
        <Split >
          <span class="text" slot="left">专题精选</span>
          <span class="icon" slot="right"><i class="iconfont icon-right"></i></span>
        </Split>
        <ProjectSelection />
        <MainScroll />
        <MsiteFooter />

      </div>
    </div>

  </div>
</template>

<script>
  import {mapState} from 'vuex'
  import BScroll from 'better-scroll'
  import Swiper from "../../components/swiper/swiper";
  import DirectSupply from '../../components/DirectSupply/DirectSupply'
  import PublishSwiper from '../../components/PublishSwiper/PublishSwiper'
  import ProjectSelection from "../../components/ProjectSelection/ProjectSelection";
  import MainScroll from "../../components/MainScroll/MainScroll";
  import MsiteFooter from "../../components/MsiteFooter/MsiteFooter";
  export default {
    data () {
      return {
        types :[
          {name:'居家'},
          {name:'配件'},
          {name:'服装'},
          {name:'电器'},
          {name:'洗护'},
          {name:'饮食'},
          {name:'餐厨'},
          {name:'婴童'},
          {name:'文体'},
          {name:'特色'}
        ],
        currentIndex :0 //被点击的nav索引
      }
    },
    mounted () {
      const ul = this.$refs.ulList
      const liWidth = 77
      const count = this.types.length
      const width = liWidth  * count  + 'px'
      ul.style.width = width
    },
    computed: {
      ...mapState(['homeData'])
    },
    methods:{
      ChangeIsShow(index){
        this.currentIndex = index
      },
    },
    watch : {
      homeData () {
        this.$nextTick(()=>{
            new BScroll ('.container',{
              click : true
            })
        }),
        this.$nextTick(()=>{
          new BScroll ('.wrapper',{
            scrollX : true,
            click : true
          })
        })
      }
    },
    components: {
      MsiteFooter,
      MainScroll,
      ProjectSelection,
      Swiper,
      DirectSupply,
      PublishSwiper
    }
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  @import '../../common/stylus/mixins.styl'
  .wrap
    width 100%
    height 13.34rem
    overflow hidden
    .header
      width 100%
      height 1.5rem
      position fixed
      background-color: white
      top 0
      z-index 10
      .headerTop
        width 100%
        height 0.9rem
        display flex
        justify-content space-around
        align-items center
        position relative
        h2
          margin-left -0.1rem
          font-weight bold
          font-size 0.36rem
        input
          width 5.24rem
          height 0.6rem
          border-radius 0.3rem
          padding-left 1.07rem
          box-sizing border-box
          background #EDEDED
          font-size 0.24rem
        .iconItem
          position: absolute
          left 2.7rem
          top -0.24rem
          .iconfont
            font-size 0.3rem


      /*头部导航*/
      .wrapper
        width 7.5rem
        height 0.5rem
        .navList
          width 7.5rem
          height 0.6rem
          display flex
          align-items flex-start
          padding 0 0.1rem
          li
            width 1.54rem
            height 0.6rem
            display flex
            align-items center
            justify-content center
            .navItem
              height 0.6rem
              font-size 0.14rem
              line-height 0.6rem
              position relative
              padding 0 0.16rem
              &.active
                color red
                &::after
                  display: block
                  content ""
                  width 100%
                  height 0.03rem
                  position absolute
                  left 0
                  bottom 0.1rem
                  background red



    .container
      width 100%
      height 100%
      .main
        width 7.5rem
        position: relative
        margin-top 1.5rem
        padding-bottom 2rem
        .serve
          width 100%
          height 0.72rem
          display flex
          justify-content space-around
          align-items center
          .serveItem
            width 2.27rem
            height 0.36rem
            .imgServe
              width 0.32rem
              height 0.32rem
              float left
            span
              height 0.32rem
              display block
              font-size 0.14rem
              margin-top 0.04rem



        .firstPublish
          width 7.5rem
          height 2.6rem
          background: #F1F7FD
          display flex
          flex-direction column
          justify-content space-around
          align-items center
          color #8BA0B6
          .new
            width 3.8rem
            height 0.72rem
            font-size 0.54rem
            background #F1F7FD
            text-align: center
            margin-top 0.5rem
          button
            width 2.4rem
            height 0.56rem
            background: #D8E5F1
            border none
            outline none
            margin-bottom 0.5rem

        .m-site
          width 7.5rem
          height 3rem
          img
            width 100%
            height 100%
</style>
