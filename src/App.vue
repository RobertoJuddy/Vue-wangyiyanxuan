<template>
  <div>
    <keep-alive>
      <router-view />
    </keep-alive>

    <FooterTotal v-if="$route.meta.isShowFooter"/>
  </div>
</template>

<script>
  import FooterTotal from './components/Footer/Footer'
export default {
  components : {
    FooterTotal
  },
  mounted () {
    this.$store.dispatch('getHomeData')
    this.$store.dispatch('getDataNav')

    const local = JSON.parse(window.localStorage.getItem('loginInfo'))
    if(local){
      this.$store.dispatch('saveUserInfo' ,local)
    }
  },




}
</script>

<style>
  html{
    font-size:13.33333333vw !important
  }

</style>
