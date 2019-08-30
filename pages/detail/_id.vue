<template>
   <div class="detail main">
      <div class="content">
         <div class="container">
            <div class="article-top">
               <div class="article-title">{{article.title}}</div>
               <div class="article-info">
                  <span>{{article.createdAt}}</span>
                  <span>{{article.viewCount}}</span>
               </div>
            </div>
            <div v-html="article.body"></div>
         </div>
      </div>
   </div>
</template>

<script>
export default {
   data() {
      return {

      }
   },
   async asyncData({$axios, params}) {
      const data = await $axios.get(`http://localhost:3000/web/api/articles/${params.id}`)
      return {article:data.data}
   }
}
</script>

<style>

</style>