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
          <input type="text" placeholder="请输入手机号" v-model="phone"/>
        </div>
        <div class="Input">
          <input type="text" placeholder="请输入短信码验证" v-model="code"  />
          <span class="authCode" @click="getCode">{{Time?msg:all}}</span>
        </div>
        <div class="InputCapcha" >
          <input type="text" placeholder="验证码" v-model="captcha"/>
          <img src="./images/captcha.svg" class="authLogin" @click="GetCapcha" ref="CapchaUl"/>
        </div>
        <div class="PersonalMainPhone" @click="Login">
          <span class="PhoneLogin" >登录</span>
        </div>
        <div class="PersonalMainEmail" @click="goLogin">
          <span class="EmailLogin">其他方式登录</span>
        </div>
        <div class="PersonalMainQuick">
          <span class="QuickPhone">注册账号 ></span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import  {
    reqSendCode,
    reqLoginSms
  }  from '../../api'
  import {Toast, MessageBox} from 'mint-ui';
  export default {
    props : {
      switchToLoginFromPhone : Function
    },
    data () {
      return {
        phone : '',
        code : '',
        captcha : '',
        msg : '请获取验证码',
        Time : true,
        all : '',
        handle : true
      }
    },
    methods : {
      goLogin() {
        this.switchToLoginFromPhone()
      },
      async Login () {

        if(!this.phone) {
          MessageBox.alert('请输入电话号码')
        }else if(!this.code) {
          MessageBox.alert('请输入手机验证码')
        }else if(!this.captcha){
          MessageBox.alert('请输入验证码')
        }


        const {phone , code} = this
        if(!phone || !code){
          return
        }
        const result = await reqLoginSms({phone, code})
        if(result.code === 0){
          this.$store.dispatch('saveUserInfo', result.data)

          this.$router.replace('/personal')
        }else {
          MessageBox.alert('登录失败')
        }
      },
      async getCode () {
        if(!this.isRightPhone){
          MessageBox.alert('请输入正确手机号')
          return
        }
        if(this.handle) {
          this.handle = false
          this.Time = false
          let time = 30
          this.all= `${time}s`
          let timer = setInterval(()=>{
            time--
            if(time<=0){
              time=0
              clearInterval(timer)
              this.Time = true
              this.handle = true
            }
            this.all = `${time}s`
          },1000)
        }
        const {phone} = this
        const result = await reqSendCode(phone)
        if(result.code === 0){
          Toast({
            message: '发送验证码成功',
            position: 'middle',
            duration: 1000
          });
        }else {
          MessageBox.alert('发送验证码失败')
        }
      },
      GoMsite () {
        this.$router.replace('/msite')
      },
      GetCapcha () {
        this.$refs.CapchaUl.src = `http://localhost:5000/captcha?Time=${Date.now()}`
      }
    },
    computed: {
      isRightPhone () {
        return /^1\d{10}$/.test(this.phone)
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
    height 8.9rem
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
          border-bottom 0.01rem solid grey
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
          border-bottom 0.01rem solid grey
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

        .PersonalMainQuick
          width 100%
          height 0.41rem
          .QuickPhone
            font-size .25rem
            width 3.95rem
            height 0.37rem
            line-height 0.37rem
            display block
            text-align center
            margin-left 1.8rem



.is-placemiddle
  position absolute
  top 0



</style>
