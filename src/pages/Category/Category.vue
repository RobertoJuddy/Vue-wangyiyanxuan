<template>
  <div class="Category">
    <div class="CategoryHeader">
      <i class="iconfont icon-search"></i>
      <input type="text" placeholder="搜索商品, 共9714款好物"/>
    </div>
    <div class="CategoryMain">
      <div class="CategoryLeft">
        <CategoryList />
      </div>
      <div class="CategoryRight"></div>
    </div>
  </div>
</template>

<script>
  import CategoryList from "../../components/CategoryList/CategoryList";
  export default {
    name: "Category",
    components: {CategoryList}
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  @import '../../common/stylus/mixins.styl'
  .Category
    width 7.5rem
    height 13.34rem
    .CategoryHeader
      width 8.1rem
      height 0.89rem
      display flex
      align-items center
      justify-content center
      position relative
      border-bottom 0.03rem solid #EDEDED
      input
        width 6.87rem
        height 0.51rem
        background #EDEDED
        font-size 0.3rem
        text-align center
        margin-right 0.55rem
      .iconfont
        position absolute
        left 1.5rem
        top 0.3rem


</style>
