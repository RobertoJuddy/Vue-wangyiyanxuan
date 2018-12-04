<template>
  <div class="LoginAll" >
    <div class="Login" v-if="isShow">
      <CommonHeader>
        <i class="iconfont icon-shouye" slot="left" @click.prevent="GoMsite"></i>
        <div slot="middle" class="headerText"></div>
        <span slot="search"><i class="iconfont icon-search"></i></span>
        <span slot="caigou"><i class="iconfont icon-caigou"></i></span>
      </CommonHeader>
      <div class="PersonalMain">
        <div class="PersonalMainContent">
          <div class="PersonalMainImg">
            <div class="PersonalMainImgBox">
              <img src="//yanxuan.nosdn.127.net/bd139d2c42205f749cd4ab78fa3d6c60.png" />
            </div>
          </div>
        </div>
        <div class="PersonalMainPhone" @click="goPhone">
          <span class="PhoneIcon"><i class="iconfont icon-zhanghao"></i></span>
          <span class="PhoneLogin">手机账号登录</span>
        </div>
        <div class="PersonalMainEmail" @click="goEmail">
          <span class="EmailIcon"><i class="iconfont icon-duanxin"></i></span>
          <span class="EmailLogin">邮箱或账号登录</span>
        </div>
        <div class="PersonalMainQuick">
          <span class="QuickPhone">手机快速账号注册 ></span>
        </div>
        <div class="PersonalFooter">
          <div class="PersonalLeft">
            <span class="iconWeixin"><i class="iconfont icon-weixin"></i></span>
            <span class="iconText">微信</span>
          </div>
          <div class="iconSplit">|</div>
          <div class="PersonalMiddle">
            <span class="iconQQ"><i class="iconfont icon-QQ"></i></span>
            <span class="iconTextQQ">QQ</span>
          </div>
          <div class="iconSplit">|</div>
          <div class="PersonalRight">
            <span class="iconWeibo"><i class="iconfont icon-weibo"></i></span>
            <span class="iconTextWeibo">微博</span>
          </div>
        </div>
      </div>
    </div >

    <LoginForPhone v-if="isPhone" :switchToLoginFromPhone="switchToLoginFromPhone"/>
    <LoginForEmail v-if="isEmail" :switchToLogin="switchToLogin" />
  </div>



</template>

<script>
  import LoginForPhone from "../../components/LoginForPhone/LoginForPhone";
  import LoginForEmail from "../../components/LoginForEmail/LoginForEmail";
  import {mapState} from 'vuex'
  export default {
    data () {
      return {
        isShow : true,
        isPhone : false,
        isEmail : false,
      }
    },

    beforeRouteEnter (to, from, next) {
      let local = JSON.parse(window.localStorage.getItem('loginInfo'))
      console.log(local)
      next(component => {

        if(to.path ==='/login'){
          if(local){
            next('/personal')
          }
        }

          })
    },
    computed : {
      ...mapState(['id'])
    },

    components: {
      LoginForPhone,
      LoginForEmail
    },
    methods : {
      goPhone () {
        this.isShow = false
        this.isPhone = true
      },
      goEmail () {
        this.isShow = false
        this.isEmail = true
      },
      switchToLogin () {
        this.isEmail = false
        this.isShow = true
      },
      switchToLoginFromPhone () {
        this.isPhone = false
        this.isShow = true
      },
      GoMsite () {
        this.$router.replace('/msite/0')
      }

    },
    beforeMount(){
     /* let local = JSON.parse(window.localStorage.getItem('loginInfo'))
      if(local){
        this.$store.dispatch('localStorage' ,local)
        this.$router.replace('/personal')
      }*/

    },

  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  @import '../../common/stylus/mixins.styl'
  .LoginAll
    width 15rem
    height 13.34rem
    .Login
      width 15rem
      height 6.67rem
      .PersonalMain
        width 100%
        height 13.34rem
        margin-top .8798rem
        position relative
        .PersonalMainContent
          width 7.5rem
          height 4.1rem
          display flex
          align-items center
          justify-content center
          background #F2F5F4
        .PersonalMainImg
          width 2.67rem
          height 0.9rem

          .PersonalMainImgBox
            width 7.5rem
            height 0.98rem
            img
              width 2.67rem
              height 0.9rem

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
            margin-left 0.2rem
          .PhoneIcon
            width 0.39rem
            height 0.39rem
            position absolute
            left 2.3rem
            top -0.25rem
            z-index 5
            .iconfont
              font-size 0.4rem
              color white


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
            margin-left 0.4rem
          .EmailIcon
            width 0.39rem
            height 0.39rem
            position absolute
            left 2.3rem
            top -0.25rem
            z-index 5
            .iconfont
              font-size 0.4rem
              color #B4282D
        .PersonalMainQuick
          width 100%
          height 0.41rem
          .QuickPhone
            font-size .25rem
            width 3.95rem
            height 0.37rem
            display block
            text-align center
            margin-left 1.65rem

        .PersonalFooter
          width 7.5rem
          height 0.38rem
          display flex
          justify-content center
          position absolute
          bottom 2rem
          .PersonalLeft
            width 1.82rem
            height 0.38rem
            display flex
            justify-content center
            .iconWeixin
              width 0.38rem
              height 0.38rem
              display block
              margin-top -0.6rem
              margin-right 0.1rem
              .iconfont
                font-size 0.4rem
                color grey
            .iconText
              width 0.54rem
              height 0.32rem
              font-size 0.14rem
          .iconSplit
            font-size 0.14rem
          .PersonalMiddle
            width 1.82rem
            height 0.38rem
            display flex
            justify-content center
            .iconQQ
              width 0.38rem
              height 0.38rem
              display block
              margin-top -0.6rem
              margin-right 0.1rem
              iconfont
                font-size 0.4rem
                color grey
            .iconTextQQ
              width 0.54rem
              height 0.32rem
              font-size 0.14rem


          .PersonalRight
            width 1.82rem
            height 0.38rem
            display flex
            justify-content center
            .iconWeibo
              width 0.38rem
              height 0.38rem
              display block
              margin-top -0.6rem
              margin-right 0.1rem
              iconfont
                font-size 0.4rem
                color grey
            .iconTextWeibo
              width 0.54rem
              height 0.32rem
              font-size 0.14rem



</style>
