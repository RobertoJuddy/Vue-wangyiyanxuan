<template>
  <div class="project">
    <ul class="projectList">
      <li v-for="(topic ,index) in homeData.topicList" :key="index">
        <img v-lazy="topic.itemPicUrl" />
        <span class="title">{{topic.title}}</span>
        <span class="subtitle">{{topic.subtitle}}</span>
        <span class="priceInfo">{{topic.priceInfo}}元起</span>
      </li>

    </ul>
  </div>
</template>

<script>
  import {mapState} from 'vuex'
  import BScroll from 'better-scroll'
  export default {
    computed : {
      ...mapState(['homeData'])
    },
    watch : {
      homeData () {
        this.$nextTick(()=>{
          new BScroll ('.project',{
            scrollX : true,
            click : true
          })
        })
      }
    }
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
        background: #F4F4F4
        margin-right 0.4rem
        position relative
        img
          width 5.75rem
          height 3.19rem
        .title
          font-size 0.15rem
          position absolute
          left 0.3rem
          top 3.4rem
        .subtitle
          font-size 0.14rem
          position absolute
          left 0.3rem
          top 3.8rem
          color grey
        .priceInfo
          font-size 0.14rem
          position absolute
          left 4.5rem
          top 3.4rem
          color red
          font-weight bold


</style>
