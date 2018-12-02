<template>
  <div class="Category">
    <ul class="CategoryList">
      <li :class="{active : isShow === index}" v-for="(data, index) in dataNav.categoryList"
          :key="index"
          @click="changeIshow(index)"
      >{{data.name}}</li>
    </ul>
  </div>
</template>

<script>
  import Pubsub  from 'pubsub-js'
  import {mapState} from 'vuex'
  export default {
    data () {
      return {
        isShow : 0,
      }
    },
    computed : {
      ...mapState(['dataNav','index'])

    },
    methods : {
      changeIshow (index) {
        this.isShow = index
        Pubsub.publish('msg', index)
      }
    }

  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  @import '../../common/stylus/mixins.styl'
  .Category
    width 1.63rem
    .CategoryList
      width 1.62rem
      border-right 0.02rem solid #EDEDED
      li
        width 1.62rem
        height 0.5rem
        font-size 0.25rem
        text-align: center
        line-height 0.5rem
        margin 0.358rem 0
        &.active
          border-left 0.03rem solid red
          font-size 0.34rem
          color red

</style>
