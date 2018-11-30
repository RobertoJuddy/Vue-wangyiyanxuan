<template>
  <div class="project">
    <ul class="projectList">
      <li>
        <img src="https://yanxuan.nosdn.127.net/22c06cba5722e5fd0e9561cf5b7b1800.jpg" />
        <div>
          <span class="title">给毛孔来一次深度清洁</span>
          <span class="subtitle">硅胶</span>
        </div>
        <span class="priceInfo">107元起</span>
      </li>
      <li>
        <img src="https://yanxuan.nosdn.127.net/acb59e68201beaaee839d42733332c26.jpg" />
      </li>
      <li>
        <img src="https://yanxuan.nosdn.127.net/22c06cba5722e5fd0e9561cf5b7b1800.jpg" />
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    name: "ProjectSelection"
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  @import '../../common/stylus/mixins.styl'
  .project
    width 100%
    display flex
    .projectList
      display flex
      justify-content flex-start
      li
        height 4.09rem
        width 5.75rem
        background: red
        margin-right 0.4rem
        img
          width 5.75rem
          height 3.19rem
        .title
          font-size 0.15rem
        .subtitle
          font-size 0.14rem
        .priceInfo
          font-size 0.14rem




</style>
