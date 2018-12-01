<template>
  <div class="split">
    <slot name="left"></slot>
    <slot name="right"></slot>

  </div>
</template>

<script>
  export default {
    name: "Split"
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  @import '../../common/stylus/mixins.styl'
  .split
    height 1.1rem
    background: #FFFFFF
    position: relative
    .text
      width 80%
      height 1.1rem
      display block
      font-size 0.3rem
      text-align center
      line-height 1.1rem
      position: absolute
      left 0
      right 0
      top 0
      bottom 0
      margin auto
    .icon
      width 1rem
      height 1rem
      display block
      position: absolute
      right 2rem
      top: 0
      bottom: 0;
      margin auto 0
      text-align: center
      line-height 1rem
      .iconfont
        width 1rem
        height 1rem
        display block
        font-size 0.6rem






</style>
