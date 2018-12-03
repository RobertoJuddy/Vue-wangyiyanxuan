<template>
  <div class="Personal">
    <div class="PersonalHeader">
      <div class="PersonalHeaderLeft">
        <img src="//yanxuan.nosdn.127.net/8945ae63d940cc42406c3f67019c5cb6.png" />
        <div class="userInfo">
          <span class="phone" v-if="local">{{local.name?local.name:local.phone}}</span>
          <span class="phone" v-else @click="$router.replace('/login')">请登录</span>
          <span class="normal">普通会员</span>
        </div>
      </div>
      <div class="PersonalHeaderRight" >
        <i class="iconfont icon-erweima"></i>
        <div class="VIP">
          <i class="iconfont icon-lightningbshandian"></i>
          <div class="SuperVIP">
            <span class="SuperVIPText">超级会员</span>
            <div class="Immediately">
              <span class="ImmediatelyText">立即调用</span>
              <i class="iconfont icon-right-circle"></i>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="PersonalContent" v-if="local">
      <ul class="PersonalList">
        <li v-for="(item, index) in info" :key="index">
          <div class="iconfontMain">
            <i class="iconfont" :class=item.icon></i>
          </div>

          <span class="PersonalText">{{item.name}}</span>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
  import {mapState} from 'vuex'
  export default {
    data () {
      return {
        info : [
          {name : '我的订单', icon: 'icon-jian'},
          {name : '周六一起拼', icon: 'icon-rili'},
          {name : '售后服务', icon: 'icon-shouhoufuwu'},
          {name : '邀请返利', icon: 'icon-yaoqing'},
          {name : '优惠券', icon: 'icon-youhuiquan'},
          {name : '我的红包', icon: 'icon-wodehongbao'},
          {name : '优先购', icon: 'icon-gouwu'},
          {name : '礼品卡', icon: 'icon-qiapian'},
          {name : '积分中心', icon: 'icon-jifen'},
          {name : '会员俱乐部', icon: 'icon-huiyuan-'},
          {name : '地址管理', icon: 'icon-dizhi'},
          {name : '账号安全', icon: 'icon-anquan'},
          {name : '帮助与客服', icon: 'icon-kefu'},
          {name : '意见反馈', icon: 'icon-yijian'},
        ],
      }
    },
   methods : {
     GoMsite () {
       this.$router.replace('/msite')
     }
   },

    computed : {
      ...mapState(['local'])
    }


    }

</script>
<style scoped lang="stylus" rel="stylesheet/stylus">
  @import '../../common/stylus/mixins.styl'
  .Personal
    width 7.5rem
    height 100%
    .PersonalHeader
      width 7.5rem
      height 2.7rem
      background #C0A368
      position relative
      .PersonalHeaderLeft
        width 5.1rem
        height 1.41rem
        display flex
        align-items center
        justify-content space-around
        position absolute
        top 0
        bottom 0
        margin auto 0
        img
          width 1.41rem
          height 1.41rem
          border-radius 50%
        .userInfo
          width 3.38rem
          height 0.79rem
          display flex
          flex-direction column
          .phone
            width 3.38rem
            height 0.43rem
            font-size 0.18rem
            color white
          .normal
            width 1.11rem
            height 0.31rem
            font-size 0.18rem
            color white
      .PersonalHeaderRight
        width 2.1rem
        height 2.7rem
        position: absolute
        right 0
        .icon-erweima
          width 0.63rem
          height 0.63rem
          font-size .4rem
          position: absolute
          right: 0
          top: 0.3rem
        .VIP
          width 2.03rem
          height 0.84rem
          background #444444
          border-top-left-radius: .85333rem;
          border-bottom-left-radius: .85333rem;
          position absolute
          top 1rem
          .icon-lightningbshandian
            font-size 0.5rem
            position absolute
            left 0
            top 0.15rem
          .SuperVIP
            width 1.34rem
            height 0.82rem
            background #444444
            display flex
            flex-direction column
            justify-content center
            position absolute
            right: 0
            top: 0
            .SuperVIPText
              widht 10.4rem
              height 0.36rem
              font-size 0.14rem
              color #EDE7DB
            .Immediately
              width 1.34rem
              height 0.27rem
              display flex
              .ImmediatelyText
                width 1rem
                height 0.22rem
                color #EDE7DB
                font-size 0.14rem
              .icon-right-circle
                font-size 0.12rem
    .PersonalContent
      widht 7.5rem
      height 9.4rem
      .PersonalList
        widht 7.5rem
        height 9.4rem
        li
          width 2.49rem
          height 1.81rem
          float left
          display flex
          flex-direction column
          justify-content space-around
          align-items center
          .iconfontMain
            width 0.5rem
            height 0.5rem
            .iconfont
              font-size 0.7rem
              width 0.5rem
              height 0.5rem
              margin-left -0.11rem
          .PersonalText
            width 2.48rem
            height 0.24rem
            font-size 0.14rem
            text-align: center

</style>

