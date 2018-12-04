<template>
  <div class="LoginForPhone">
    <CommonHeader>
      <i class="iconfont icon-shouye" slot="left" @click="GoMsite"></i>
      <div slot="middle" class="headerText"></div>
      <span slot="search"><i class="iconfont icon-search"></i></span>
      <span slot="caigou"><i class="iconfont icon-caigou"></i></span>
    </CommonHeader>
    <div class="PersonalMain">
      <div class="PersonalMainImgBox">
        <img src="//yanxuan.nosdn.127.net/bd139d2c42205f749cd4ab78fa3d6c60.png" />
        <div class="InputPhone">
          <input type="text" placeholder="邮箱/账号" v-model="name"/>
        </div>
        <div class="Input">
          <input :type="value?'text':'password'" placeholder="密码" v-model="pwd"/>
          <mt-switch v-model="value" @click="ShowOrNo"></mt-switch>
        </div>
        <div class="InputCapcha" >
          <input type="text" placeholder="验证码" v-model="captcha"/>
          <img src="./images/captcha.svg" class="authLogin" @click="GetCapcha" ref="CapchaUl"/>
        </div>
        <div class="PersonalMainPhone" @click="Login" >
          <span class="PhoneLogin" >登录</span>
        </div>
        <div class="PersonalMainEmail" @click="goLogin">
          <span class="EmailLogin">其他方式登录</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

  import {Toast, MessageBox} from 'mint-ui';

  import {reqLoginPwd} from '../../api'
  export default {
    props : {
      switchToLogin : Function
    },


    data () {
      return {
        name : '',
        pwd : '' ,
        captcha : '',
        value : false
      }
    },

    methods : {
      goLogin () {
        this.switchToLogin()
      },
     async Login () {
        if(!this.name) {
          MessageBox.alert('请输入邮箱或账号')
        }else if(!this.pwd) {
          MessageBox.alert('请输入密码')
        }else if(!this.captcha){
          MessageBox.alert('请输入验证码')
        }




        const {name ,pwd, captcha} = this
       if(!name || !pwd || !captcha){
            return
       }
        const result = await reqLoginPwd({name , pwd ,captcha})
         if(result.code === 0 ) {
           this.name = ''
           this.pwd = ''
           this.captcha = ''
           this.GetCapcha()
           this.$store.dispatch('saveUserInfo' ,result.data)

          localStorage.setItem('loginInfo', JSON.stringify(result.data))

          let local = localStorage.getItem('loginInfo')

           console.log(local)
          if(local){

            console.log(local)
            this.$store.dispatch('localStorage' ,local)
            this.$router.replace('/personal')
          }
         }else {
           MessageBox.alert(result.msg)
           this.GetCapcha()
         }
      },
      GoMsite () {
        this.$router.replace('/msite/0')
      },
      ShowOrNo () {
        this.value = !this.value
      },
      GetCapcha () {
        this.$refs.CapchaUl.src = `http://localhost:5000/captcha?Time=${Date.now()}`
      }
    },
    mounted () {
      this.GetCapcha ()
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
        .InputCapcha
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
            width 100%
            height 100%
            margin-top -0.3rem
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
