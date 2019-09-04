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
                  <span>{{article.createdAt | date}}</span>
                  <span>{{article.viewCount}}</span>
               </div>
            </div>
            <div class="article-content" v-html="article.body"></div>
            <div class="prev-next">
               <div class="item" v-if="article.prev">上一篇: <nuxt-link :to="'/detail/'+article.prev._id">{{article.prev.title}}</nuxt-link></div>
               <div class="item" v-if="article.next">下一篇: <nuxt-link :to="'/detail/'+article.next._id">{{article.next.title}}</nuxt-link></div>
            </div>
         </div>
      </div>
      <div class="side">
        <div class="container author-board">
        <div class="section-title">
            <h3>关于我</h3>
        </div>
        <div class="author-box">
            <div class="avater">
                <img src="~assets/images/author.jpg" alt="">
                <span class="vip"></span>
            </div>
        </div>
        <div class="author-name">觅兔先生</div>
        <div class="contact-list">
            <div class="contact-item webo">
                <a href="https://weibo.com/u/1907993487" target="_blank"><i class="iconfont icon-weibo"></i></a>
            </div>
            <div class="contact-item wechat">
                <i class="iconfont icon-weixin"></i>
                <div class="author-qrcode"><img src="~assets/images/wechat.jpg" alt=""></div>
            </div>
            <div class="contact-item email">
                <a href="mailto:1129713332@qq.com"><i class="iconfont icon-email"></i></a>
            </div>
        </div>
    </div>
    <div class="container hot-board">
        <div class="section-title">
            <h3>热门文章</h3>
        </div>
        <ul class="hot-list">
            <li class="hot-item" v-for="(item,i) of navList" :key="i">
                <i>{{i+1}}</i><a :href="`/detail/${item._id}`">{{item.title}}</a>
            </li>
        </ul>
    </div>
    <div class="container tag-board">
        <div class="section-title">
            <h3>标签</h3>
        </div>
        <div class="tag-list">
            <a href="">html5</a>
            <a href="">css3</a>
            <a href="">javascript</a>
            <a href="">vue</a>
            <a href="">nodejs</a>
            <a href="">mongoDB</a>  
        </div>
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
   scrollToTop:true,
   async asyncData({$axios, params}) {
      const data = await $axios.get(`${process.env.baseUrl}/articles/${params.id}`)
      data.navList = await $axios.get(`${process.env.baseUrl}/news/new`)
      return {
         article: data.data,
         navList: data.navList.data.slice(0,5)
      }
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
   .prev-next{
      box-sizing: border-box;
      padding: 10px 10px;
      display: flex;
      font-size: 16px;
      .item{
         box-sizing: border-box;
         margin: 5px 10px;
         width: 50%;
         white-space: nowrap;
         text-overflow: ellipsis;
         overflow: hidden;
         border-bottom: 1px solid transparent;
         background: #f3f3f3;
         &:hover{
            border-bottom-color: skyblue;
            a{
               color: skyblue;
            }
         }
      }
   }
</style>