<template>
  <div class="main">
    <div class="content">
        <div class="container">
            <el-carousel :interval="5000" arrow="hover" height="400px">
                <el-carousel-item v-for="(item, index) of navList" :key="index">
                    <nuxt-link :to="`/detail/${item._id}`" class="banner-pic" :style="{backgroundImage:'url(' + item.banner + ')'}">
                        <p class="banner-title">{{item.title}}</p>
                    </nuxt-link>
                </el-carousel-item>
            </el-carousel>
        </div>
        <div class="container">
            <div class="section-title">
                <h3>最新文章</h3>
            </div>
            <div class="article-list">
                <nuxt-link tag="div" :to="'/detail/'+article._id" class="article-item" v-for="(article, index) of (articleList.slice((currentPage-1)*pageSize,currentPage*pageSize))" :key="index">
                    <div class="article-face">
                        <img :src="article.banner" :alt="article.title">
                    </div>
                    <div class="article-title">{{article.title}}</div>
                    <div class="article-desc">{{article.smallText}}</div>
                    <div class="article-info">
                        <div class="article-categories">
                            <nuxt-link tag="span" :to="`/category/${item._id}`" v-for="(item, i) of article.categories" :key="i">{{item.name}}</nuxt-link>
                        </div>
                        <span class="article-view"><i class="el-icon-view"></i>{{article.viewCount}}</span>
                        <span class="article-date"><i class="el-icon-date"></i>{{article.createdAt | date}}</span>
                    </div>
                </nuxt-link>
            </div>
            <el-pagination class="page"
                background
                layout="prev, pager, next"
                :hide-on-single-page="pageHide"
                :page-size="pageSize"
                :total="articleList.length"
                @current-change="current_change">
            </el-pagination>
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
            <nuxt-link tag="li" :to="`/detail/${item._id}`" class="hot-item" v-for="(item,i) of navList" :key="i">
                <i>{{i+1}}</i><a href="">{{item.title}}</a>
            </nuxt-link>
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
import dayjs from "dayjs";
export default {
    data() {
        return {
            name: "首页",
            pageHide:false,
            total:100,
            pageSize:5,
            currentPage:1
        }
    },
    filters:{
        date(val){
            return dayjs(val).format("YYYY-MM-DD");
        }
    },
    methods:{
        current_change(currentPage){
            this.currentPage = currentPage;
            window.scrollTo(0,0)
        }
    },
  async asyncData({$axios}){
      const {data} = await $axios.get('http://localhost:3000/web/api/news/new')
      return {articleList:data,
      navList:data.slice(0,5)}
  }
}
</script>

<style lang="less">
    .page{
        padding: 10px 0;
    }
    .banner-pic{
        position: relative;
        display: block;
        height: 400px;
        background-size: cover;
        background-position: center center;
        .banner-title{
            box-sizing: border-box;
            padding: 0 10px;
            position: absolute;
            left: 0;
            bottom: 0;
            width: 100%;
            height: 40px;
            line-height: 40px;
            background: rgba(0,0,0,0.5);
            color: #fff;
            font-size: 16px;
        }
    }
    .el-carousel__indicators--horizontal{
        right: 10px;
        left: auto;
        transform: translateX(0);
    }
    .el-carousel__item h3 {
    color: #475669;
    font-size: 18px;
    opacity: 0.75;
    line-height: 300px;
    margin: 0;
  }
  
  .el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
  }
  
  .el-carousel__item:nth-child(2n+1) {
    background-color: #d3dce6;
  }

  /* 文章列表 */
  .article-list{
      .article-item{
          cursor: pointer;
          position: relative;
          height: 120px;
          padding: 20px 20px 20px 240px;
          border-bottom: 1px dashed #ddd;
          .article-face{
              position: absolute;
              left: 20px;
              top: 20px;
              width: 200px;
              height: 120px;
              overflow: hidden;
              img{
                  display: block;
                  position: absolute;
                  left: 0;
                  top: 50%;
                  transform: translateY(-50%);
                  min-height: 120px;
                  max-width: 200px;
              }
          }
          .article-title{
              height: 24px;
              font-size: 16px;
              font-weight: 700;
              overflow: hidden;
              white-space: nowrap;
              text-overflow: ellipsis;
          }
          .article-desc{
              height: 60px;
              margin-top: 5px;
              overflow: hidden;
              display: -webkit-box;
            -webkit-line-clamp: 3;
            -webkit-box-orient: vertical;
            font-size: 12px;
            color: #666;
          }
          .article-info{
              margin-top: 10px;
              display: flex;
              justify-content: space-between;
              font-size: 12px;
              i{
                  margin-right: 5px;
              }
              .article-categories{
                  flex: 1;
                  span{
                      border: 1px solid #aaa;
                      padding: 0 10px;
                      margin-right: 5px;
                      border-radius: 5px;

                  }
              }
              .article-view{
                  text-align: left;
              }
              .article-date{
                  text-align: right;
              }
          }
          &:hover{
              background: #f3f3f3;
              .article-title{
                    color: #222;
                    font-size: 18px;
                    text-shadow:0 0 6px skyblue, -1px -1px  #FFF, 1px -1px  #444;
              }
              .article-face{
                    transform: scale(1.05);
                    box-shadow: 0 2px 4px 1px rgba(0,0,0,0.3);
              }
          }
      }
  }
</style>

