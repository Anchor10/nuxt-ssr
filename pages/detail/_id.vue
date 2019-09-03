<template>
   <div class="detail main">
      <div class="content">
         <div class="container">
            <div class="position section-title">
               <i class="iconfont icon-position02"></i><a href="/">首页</a><i class="iconfont icon-ic_arrow_r"></i><span>{{article.title}}</span>
            </div>
            <div class="article-top">
               <div class="article-title">{{article.title}}</div>
               <div class="article-info">
                  {{article}}
                  <span>{{article.createdAt}}</span>
                  <span>{{article.viewCount}}</span>
               </div>
            </div>
            <div class="article-content" v-html="article.body"></div>
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
      const data = await $axios.get(`/articles/${params.id}`)
      return {article:data.data}
   }
}
</script>

<style lang="less">
   .position{
      box-sizing: border-box;
      padding: 0 5px;
      font-size: 12px;
      line-height: 24px;
      color: #fff;
      a, span,i{
         color: #fff;
      }
      i{
         margin: 0 5px;
         position: relative;
         top: 1px;
      }
   }
   .article-top{
      box-sizing: border-box;
      padding: 10px;
      .article-title{
         font-size: 22px;
         font-weight: 700;
         color: #333;
         text-align: center;
      }
      .article-info{
         display: flex;
         justify-content: center;
      }
      
   }
   .article-content{
      box-sizing: border-box;
      padding: 15px;
      font-size: 16px;
      line-height: 24px;
      color: #333;
      p{
         padding: 10px 0;
         img{
            display: block;
            margin: 0 auto;
            max-width: 90%;
         }
      }
   }
</style>