<template>
  <div class="footer">
    <ul class="footerList">
      <li @click="$router.replace('/msite')" :class="{active:$route.path === '/msite'}">
        <span class="iconfont icon-shouye"></span>
        <span class="footerText">首页</span>
      </li>
      <li @click="$router.replace('/shadowmatic')" :class="{active:$route.path === '/shadowmatic'}">
        <span class="iconfont icon-jian"></span>
        <span class="footerText">识物</span>
      </li>
      <li @click="$router.replace('/category')" :class="{active:$route.path === '/category'}">
        <span class="iconfont icon-baoguofahuo"></span>
        <span class="footerText">分类</span>
      </li>
      <li @click="$router.replace('/cartshop')" :class="{active:$route.path === '/cartshop'}">
        <span class="iconfont icon-caigou"></span>
        <span class="footerText">购物车</span>
      </li>
      <li @click="$router.replace('/personal')" :class="{active:$route.path === '/personal'}">
        <span class="iconfont icon-yonghu"></span>
        <span class="footerText">个人中心</span>
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    name: "Footer"
  }
</script>

<style  scoped lang="stylus" rel="stylesheet/stylus">
  @import '../../common/stylus/mixins.styl'
  .footer
    width 100%
    height 49px
    position fixed
    bottom 0
    left 0
    z-index 3
    background: white
    .footerList
      width 100%
      height 100%
      display flex
      justify-content space-around
      align-items center
      li
        width 48px
        height 67px
        text-align: center
        &.active
          color red
        .iconfont
          width 40px
          height 40px
          display block
          font-size 20px
          text-align center
          line-height 40px
          margin 0 auto
        .footerText
          font-size 12px
          margin-top -6px
          display block





</style>
