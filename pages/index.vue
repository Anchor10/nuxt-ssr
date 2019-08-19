<template>
  <div>
    <div class="diss">
      <!-- <img src="~static/wx.jpg" alt=""> -->
    </div>
    <ul>
      <li><nuxt-link :to="{name:'index'}">HOME</nuxt-link></li>
      <li><nuxt-link :to="{name:'about'}">ABOUT</nuxt-link></li>
      <li><nuxt-link :to="{name:'news',params:{newsId:3360}}">NEWS</nuxt-link></li>
      <li><nuxt-link :to="{name:'asyncData'}">asyncData</nuxt-link></li>
    </ul>
  </div>
</template>

<script>

export default {
  components: {
    
  }
}
</script>

<style>
.diss{
  width: 500px;
  height: 600px;
  background-image: url(~static/wx.jpg)
}
</style>

