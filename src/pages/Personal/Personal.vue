<template>
  <div class="Personal">
    <CommonHeader>
      <span slot="left"><i class="iconfont icon-shouye"></i></span>
      <div slot="middle" class="headerText"></div>
      <span slot="search"><i class="iconfont icon-search"></i></span>
      <span slot="caigou"><i class="iconfont icon-caigou"></i></span>
    </CommonHeader>
  </div>

</template>

<script>

  export default {
    name: "Personal",

  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  @import '../../common/stylus/mixins.styl'
  .Personal
    width 100%
    height 100%





</style>
