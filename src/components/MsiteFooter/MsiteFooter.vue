<template>
  <div class="msiteFooter">
    <div class="MFooter">
      <button type="submit" class="download">下载APP</button>
      <button type="submit" class="computer">电脑版</button>
      <span class="company">网易公司版权所有 © 1997-</span>
      <span class="year">2018</span>
      <span class="licence">食品经营许可证：JY13301080111719</span>
    </div>
  </div>
</template>

<script>
  export default {
    name: "MsiteFooter"
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  @import '../../common/stylus/mixins.styl'
  .msiteFooter
    width 7.5rem
    height 3.59rem
    .MFooter
      width 7.5rem
      height 2.6rem
      background: #414141
      position: relative
      .download
        width 1.73rem
        height 0.64rem
        color white
        font-size 0.14rem
        background: #414141
        position: absolute
        left 1.4rem
        top 0.55rem
      .computer
        width 1.73rem
        height 0.64rem
        color white
        font-size 0.14rem
        background: #414141
        position: absolute
        left 4rem
        top 0.55rem
      .company
        font-size 0.16rem
        position: absolute
        left 1.6rem
        top 1.5rem
      .year
        font-size 0.16rem
        position: absolute
        left 4.6rem
        top 1.5rem
      .licence
        font-size 0.16rem
        position: absolute
        left 1.4rem
        top 1.88rem


</style>
