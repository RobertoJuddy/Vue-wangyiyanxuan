<template>
  <div>
    <router-view />
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
  }

}
</script>

<style>
  html{
    font-size:13.33333333vw !important
  }
</style>
