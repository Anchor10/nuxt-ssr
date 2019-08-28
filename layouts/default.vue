<template>
  <div>
      <Header></Header>
      <div v-if="$nuxt.isOffline">You are offline</div>
      <nuxt v-else />
      <Footer></Footer>
  </div>
</template>
<script>
import Header from '../components/Header.vue'
import Footer from '../components/Footer.vue'

export default {
  head: {
    link: [
      { rel: 'stylesheet', href: 'https://at.alicdn.com/t/font_1220616_bnzancnfus8.css' }
    ]
  },
  components:{
    Header,
    Footer
  }
}
</script>


