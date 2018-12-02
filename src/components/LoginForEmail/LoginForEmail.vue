<template>
  <div class="LoginForPhone">
    <CommonHeader>
      <span slot="left"><i class="iconfont icon-shouye"></i></span>
      <div slot="middle" class="headerText"></div>
      <span slot="search"><i class="iconfont icon-search"></i></span>
      <span slot="caigou"><i class="iconfont icon-caigou"></i></span>
    </CommonHeader>
    <div class="PersonalMain">
      <div class="PersonalMainImgBox">
        <img src="//yanxuan.nosdn.127.net/bd139d2c42205f749cd4ab78fa3d6c60.png" />
        <div class="InputPhone">
          <input type="text" placeholder="邮箱账号"/>
        </div>
        <div class="Input">
          <input type="password" placeholder="密码"/>
        </div>
        <div class="InputProblem">
          <input type="text" placeholder="注册账号"/>
          <span class="authLogin">忘记密码</span>
        </div>
        <div class="PersonalMainPhone" >
          <span class="PhoneLogin" @click="Login">登录</span>
        </div>
        <div class="PersonalMainEmail" @click="goLogin">
          <span class="EmailLogin">其他方式登录</span>
        </div>

      </div>




    </div>
  </div>
</template>

<script>

  export default {
    props : {
      switchToLogin : Function
    },
    methods : {
      goLogin () {
        this.switchToLogin()
      }
    }
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  @import '../../common/stylus/mixins.styl'
  .LoginForPhone
    width 15rem
    height 13.34rem
    .PersonalMain
      width 7.5rem
      height 8.9rem
      margin-top .8798rem
      position relative
      .PersonalMainImgBox
        width 7.5rem
        height 6.36rem
        text-align center
        margin-top 1.6rem
        img
          width 1.92rem
          height 0.62rem
        .InputPhone
          width 6.7rem
          height 0.9rem
          margin-left 0.5rem
          border-bottom 0.01rem solid #E6E6E6
          display flex
          align-items center
          margin-bottom 0.3rem
          margin-top 1.4rem
          input
            width 5.9rem
            height 0.42rem
            font-size 0.3rem
            border none
            outline none
            color grey
        .Input
          width 6.7rem
          height 0.9rem
          margin-left 0.5rem
          border-bottom 0.01rem solid #E6E6E6
          display flex
          align-items center
          margin-bottom 0.3rem
          input
            width 5.9rem
            height 0.42rem
            font-size 0.3rem
            border none
            outline none
            color grey
          .authCode
            width 1.7rem
            height 0.45rem
            line-height 0.4rem
            border 0.06rem solid #848484
            border-radius 15%
            font-size 0.14rem
        .InputProblem
          width 6.7rem
          height 0.9rem
          margin-left 0.5rem
          display flex
          align-items center
          input
            width 5.9rem
            height 0.42rem
            font-size 0.3rem
            border none
            outline none
            color grey
          .authLogin
            width 2.28rem
            height 0.42rem
            line-heigth 0.42rem
            font-size 0.17rem
        .PersonalMainPhone
          width 6.72rem
          height 0.95rem
          background #B4282D
          display flex
          justify-content center
          align-items center
          position relative
          margin-left 0.4rem
          .PhoneLogin
            font-size 0.2rem
            color white
            text-align center
          .PhoneIcon
            width 0.39rem
            height 0.39rem
            position absolute
            left 2.3rem
            top -0.25rem
            z-index 5
        .PersonalMainEmail
          width 6.72rem
          height 0.95rem
          background #F2F5F4
          border 0.01rem solid #B4282D
          margin 0.5rem 0
          display flex
          justify-content center
          align-items center
          position relative
          margin-left 0.4rem
          .EmailLogin
            font-size 0.2rem
            color #B4282D
            text-align center
          .EmailIcon
            width 0.39rem
            height 0.39rem
            position absolute
            left 2.3rem
            top -0.25rem
            z-index 5


</style>
