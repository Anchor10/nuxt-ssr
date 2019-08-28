<template>
  <div class="main">
    <div class="content">
        <div class="container">
            <el-carousel :interval="5000" arrow="hover" height="400px">
                <el-carousel-item v-for="(item, index) of navList" :key="index">
                    <a :href="item.url" class="banner-pic" :style="{backgroundImage:'url(' + item.pic + ')'}">
                        <p class="banner-title">{{item.title}}</p>
                    </a>
                </el-carousel-item>
            </el-carousel>
        </div>
        <div class="container">
            <div class="article-list">
                <nuxt-link tag="div" :to="'/detail/'+article.id" class="article-item" v-for="(article, index) of (articleList.slice((currentPage-1)*pageSize,currentPage*pageSize))" :key="index">
                    <div class="article-face">
                        <img :src="article.imgSrc" :alt="article.title">
                    </div>
                    <div class="article-title">{{article.title}}</div>
                    <div class="article-desc">{{article.desc}}</div>
                    <div class="article-info">
                        <span class="article-view"><i class="el-icon-view"></i>{{article.viewCount}}</span>
                        <span class="article-date"><i class="el-icon-date"></i>{{article.createdTime}}</span>
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
            <li class="hot-item">
                <i>1</i><a href="">什么是盗版主题，合买主题有没有售后？</a>
            </li>
            <li class="hot-item">
                <i>2</i><a href="">什么是盗版主题，合买主题有没有售后？</a>
            </li>
            <li class="hot-item">
                <i>3</i><a href="">什么是盗版主题，合买主题有没有售后？</a>
            </li>
            <li class="hot-item">
                <i>4</i><a href="">什么是盗版主题，合买主题有没有售后？</a>
            </li>
            <li class="hot-item">
                <i>5</i><a href="">什么是盗版主题，合买主题有没有售后？</a>
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
            name: "首页",
            pageHide:false,
            total:100,
            pageSize:10,
            currentPage:1,
            navList:[
                {
                    url:'',
                    pic:'https://pic.zhuayoukong.com/d/file/news/dongtai/2019-06-06/7f9e7518e6cdd0d720bc96712d447716.jpg',
                    title:'和女生谈恋爱话题 还不快马一下'
                },
                {
                    url:'',
                    pic:'https://pic.zhuayoukong.com/d/file/news/dongtai/2019-06-06/4e3384698fd8c7768cabe061bd9da96a.jpg',
                    title:'谈恋爱的聊天话题 让你们感情升温的必备话题'
                },
                {
                    url:'',
                    pic:'https://pic.zhuayoukong.com/d/file/news/huodong/2019-06-06/8ba6f52db585ed37bfcc2ef17339b77a.jpg',
                    title:'怎么谈恋爱技巧 让你快速拥有一场浪漫的夏日约会'
                },
            ],
            articleList:[
                {
                    imgSrc:'http://www.zbboke.com/uploads/180603/1-1P6031F320R0.png',
                    title:'1敬佩这位70后还在为梦想做坚持的他，我跟你携手共进',
                    desc:'很好奇毛总的经历，今天终于知道了点。对于一个40出头的70后，我原本以为就算是我们这个计算机专业的人，也不太可能深通现在的代码。而我又错了。 他的启蒙是在他10岁左右的小县城市少...',
                    id:'1',
                    createdTime:'2019-08-28',
                    viewCount:'493',
                    classid:'1003'
                },
                {
                    imgSrc:'http://www.zbboke.com/uploads/180603/1-1P6031F320R0.png',
                    title:'2敬佩这位70后还在为梦想做坚持的他，我跟你携手共进',
                    desc:'很好奇毛总的经历，今天终于知道了点。对于一个40出头的70后，我原本以为就算是我们这个计算机专业的人，也不太可能深通现在的代码。而我又错了。 他的启蒙是在他10岁左右的小县城市少...',
                    id:'1',
                    createdTime:'2019-08-28',
                    viewCount:'493',
                    classid:'1003'
                },
                {
                    imgSrc:'http://www.zbboke.com/uploads/180603/1-1P6031F320R0.png',
                    title:'3敬佩这位70后还在为梦想做坚持的他，我跟你携手共进',
                    desc:'很好奇毛总的经历，今天终于知道了点。对于一个40出头的70后，我原本以为就算是我们这个计算机专业的人，也不太可能深通现在的代码。而我又错了。 他的启蒙是在他10岁左右的小县城市少...',
                    id:'1',
                    createdTime:'2019-08-28',
                    viewCount:'493',
                    classid:'1003'
                },
                {
                    imgSrc:'http://www.zbboke.com/uploads/180603/1-1P6031F320R0.png',
                    title:'4敬佩这位70后还在为梦想做坚持的他，我跟你携手共进',
                    desc:'很好奇毛总的经历，今天终于知道了点。对于一个40出头的70后，我原本以为就算是我们这个计算机专业的人，也不太可能深通现在的代码。而我又错了。 他的启蒙是在他10岁左右的小县城市少...',
                    id:'1',
                    createdTime:'2019-08-28',
                    viewCount:'493',
                    classid:'1003'
                },
                {
                    imgSrc:'http://www.zbboke.com/uploads/180603/1-1P6031F320R0.png',
                    title:'5敬佩这位70后还在为梦想做坚持的他，我跟你携手共进',
                    desc:'很好奇毛总的经历，今天终于知道了点。对于一个40出头的70后，我原本以为就算是我们这个计算机专业的人，也不太可能深通现在的代码。而我又错了。 他的启蒙是在他10岁左右的小县城市少...',
                    id:'1',
                    createdTime:'2019-08-28',
                    viewCount:'493',
                    classid:'1003'
                },
                {
                    imgSrc:'http://www.zbboke.com/uploads/180603/1-1P6031F320R0.png',
                    title:'6敬佩这位70后还在为梦想做坚持的他，我跟你携手共进',
                    desc:'很好奇毛总的经历，今天终于知道了点。对于一个40出头的70后，我原本以为就算是我们这个计算机专业的人，也不太可能深通现在的代码。而我又错了。 他的启蒙是在他10岁左右的小县城市少...',
                    id:'1',
                    createdTime:'2019-08-28',
                    viewCount:'493',
                    classid:'1003'
                },
                {
                    imgSrc:'http://www.zbboke.com/uploads/180603/1-1P6031F320R0.png',
                    title:'7敬佩这位70后还在为梦想做坚持的他，我跟你携手共进',
                    desc:'很好奇毛总的经历，今天终于知道了点。对于一个40出头的70后，我原本以为就算是我们这个计算机专业的人，也不太可能深通现在的代码。而我又错了。 他的启蒙是在他10岁左右的小县城市少...',
                    id:'1',
                    createdTime:'2019-08-28',
                    viewCount:'493',
                    classid:'1003'
                },
                {
                    imgSrc:'http://www.zbboke.com/uploads/180603/1-1P6031F320R0.png',
                    title:'8敬佩这位70后还在为梦想做坚持的他，我跟你携手共进',
                    desc:'很好奇毛总的经历，今天终于知道了点。对于一个40出头的70后，我原本以为就算是我们这个计算机专业的人，也不太可能深通现在的代码。而我又错了。 他的启蒙是在他10岁左右的小县城市少...',
                    id:'1',
                    createdTime:'2019-08-28',
                    viewCount:'493',
                    classid:'1003'
                },
                {
                    imgSrc:'http://www.zbboke.com/uploads/180603/1-1P6031F320R0.png',
                    title:'9敬佩这位70后还在为梦想做坚持的他，我跟你携手共进',
                    desc:'很好奇毛总的经历，今天终于知道了点。对于一个40出头的70后，我原本以为就算是我们这个计算机专业的人，也不太可能深通现在的代码。而我又错了。 他的启蒙是在他10岁左右的小县城市少...',
                    id:'1',
                    createdTime:'2019-08-28',
                    viewCount:'493',
                    classid:'1003'
                },
                {
                    imgSrc:'http://www.zbboke.com/uploads/180603/1-1P6031F320R0.png',
                    title:'10敬佩这位70后还在为梦想做坚持的他，我跟你携手共进',
                    desc:'很好奇毛总的经历，今天终于知道了点。对于一个40出头的70后，我原本以为就算是我们这个计算机专业的人，也不太可能深通现在的代码。而我又错了。 他的启蒙是在他10岁左右的小县城市少...',
                    id:'1',
                    createdTime:'2019-08-28',
                    viewCount:'493',
                    classid:'1003'
                },
                {
                    imgSrc:'http://www.zbboke.com/uploads/180603/1-1P6031F320R0.png',
                    title:'11敬佩这位70后还在为梦想做坚持的他，我跟你携手共进',
                    desc:'很好奇毛总的经历，今天终于知道了点。对于一个40出头的70后，我原本以为就算是我们这个计算机专业的人，也不太可能深通现在的代码。而我又错了。 他的启蒙是在他10岁左右的小县城市少...',
                    id:'1',
                    createdTime:'2019-08-28',
                    viewCount:'493',
                    classid:'1003'
                },
                {
                    imgSrc:'http://www.zbboke.com/uploads/180603/1-1P6031F320R0.png',
                    title:'12敬佩这位70后还在为梦想做坚持的他，我跟你携手共进',
                    desc:'很好奇毛总的经历，今天终于知道了点。对于一个40出头的70后，我原本以为就算是我们这个计算机专业的人，也不太可能深通现在的代码。而我又错了。 他的启蒙是在他10岁左右的小县城市少...',
                    id:'1',
                    createdTime:'2019-08-28',
                    viewCount:'493',
                    classid:'1003'
                },
                {
                    imgSrc:'http://www.zbboke.com/uploads/180603/1-1P6031F320R0.png',
                    title:'13敬佩这位70后还在为梦想做坚持的他，我跟你携手共进',
                    desc:'很好奇毛总的经历，今天终于知道了点。对于一个40出头的70后，我原本以为就算是我们这个计算机专业的人，也不太可能深通现在的代码。而我又错了。 他的启蒙是在他10岁左右的小县城市少...',
                    id:'1',
                    createdTime:'2019-08-28',
                    viewCount:'493',
                    classid:'1003'
                },
                {
                    imgSrc:'http://www.zbboke.com/uploads/180603/1-1P6031F320R0.png',
                    title:'14敬佩这位70后还在为梦想做坚持的他，我跟你携手共进',
                    desc:'很好奇毛总的经历，今天终于知道了点。对于一个40出头的70后，我原本以为就算是我们这个计算机专业的人，也不太可能深通现在的代码。而我又错了。 他的启蒙是在他10岁左右的小县城市少...',
                    id:'1',
                    createdTime:'2019-08-28',
                    viewCount:'493',
                    classid:'1003'
                },
                {
                    imgSrc:'http://www.zbboke.com/uploads/180603/1-1P6031F320R0.png',
                    title:'15敬佩这位70后还在为梦想做坚持的他，我跟你携手共进',
                    desc:'很好奇毛总的经历，今天终于知道了点。对于一个40出头的70后，我原本以为就算是我们这个计算机专业的人，也不太可能深通现在的代码。而我又错了。 他的启蒙是在他10岁左右的小县城市少...',
                    id:'1',
                    createdTime:'2019-08-28',
                    viewCount:'493',
                    classid:'1003'
                },
                {
                    imgSrc:'http://www.zbboke.com/uploads/180603/1-1P6031F320R0.png',
                    title:'16敬佩这位70后还在为梦想做坚持的他，我跟你携手共进',
                    desc:'很好奇毛总的经历，今天终于知道了点。对于一个40出头的70后，我原本以为就算是我们这个计算机专业的人，也不太可能深通现在的代码。而我又错了。 他的启蒙是在他10岁左右的小县城市少...',
                    id:'1',
                    createdTime:'2019-08-28',
                    viewCount:'493',
                    classid:'1003'
                },
                {
                    imgSrc:'http://www.zbboke.com/uploads/180603/1-1P6031F320R0.png',
                    title:'17敬佩这位70后还在为梦想做坚持的他，我跟你携手共进',
                    desc:'很好奇毛总的经历，今天终于知道了点。对于一个40出头的70后，我原本以为就算是我们这个计算机专业的人，也不太可能深通现在的代码。而我又错了。 他的启蒙是在他10岁左右的小县城市少...',
                    id:'1',
                    createdTime:'2019-08-28',
                    viewCount:'493',
                    classid:'1003'
                },
                {
                    imgSrc:'http://www.zbboke.com/uploads/180603/1-1P6031F320R0.png',
                    title:'18敬佩这位70后还在为梦想做坚持的他，我跟你携手共进',
                    desc:'很好奇毛总的经历，今天终于知道了点。对于一个40出头的70后，我原本以为就算是我们这个计算机专业的人，也不太可能深通现在的代码。而我又错了。 他的启蒙是在他10岁左右的小县城市少...',
                    id:'1',
                    createdTime:'2019-08-28',
                    viewCount:'493',
                    classid:'1003'
                },
                {
                    imgSrc:'http://www.zbboke.com/uploads/180603/1-1P6031F320R0.png',
                    title:'19敬佩这位70后还在为梦想做坚持的他，我跟你携手共进',
                    desc:'很好奇毛总的经历，今天终于知道了点。对于一个40出头的70后，我原本以为就算是我们这个计算机专业的人，也不太可能深通现在的代码。而我又错了。 他的启蒙是在他10岁左右的小县城市少...',
                    id:'1',
                    createdTime:'2019-08-28',
                    viewCount:'493',
                    classid:'1003'
                },
                {
                    imgSrc:'http://www.zbboke.com/uploads/180603/1-1P6031F320R0.png',
                    title:'20敬佩这位70后还在为梦想做坚持的他，我跟你携手共进',
                    desc:'很好奇毛总的经历，今天终于知道了点。对于一个40出头的70后，我原本以为就算是我们这个计算机专业的人，也不太可能深通现在的代码。而我又错了。 他的启蒙是在他10岁左右的小县城市少...',
                    id:'1',
                    createdTime:'2019-08-28',
                    viewCount:'493',
                    classid:'1003'
                },
                {
                    imgSrc:'http://www.zbboke.com/uploads/180603/1-1P6031F320R0.png',
                    title:'21敬佩这位70后还在为梦想做坚持的他，我跟你携手共进',
                    desc:'很好奇毛总的经历，今天终于知道了点。对于一个40出头的70后，我原本以为就算是我们这个计算机专业的人，也不太可能深通现在的代码。而我又错了。 他的启蒙是在他10岁左右的小县城市少...',
                    id:'1',
                    createdTime:'2019-08-28',
                    viewCount:'493',
                    classid:'1003'
                },
                {
                    imgSrc:'http://www.zbboke.com/uploads/180603/1-1P6031F320R0.png',
                    title:'22敬佩这位70后还在为梦想做坚持的他，我跟你携手共进',
                    desc:'很好奇毛总的经历，今天终于知道了点。对于一个40出头的70后，我原本以为就算是我们这个计算机专业的人，也不太可能深通现在的代码。而我又错了。 他的启蒙是在他10岁左右的小县城市少...',
                    id:'1',
                    createdTime:'2019-08-28',
                    viewCount:'493',
                    classid:'1003'
                },
                {
                    imgSrc:'http://www.zbboke.com/uploads/180603/1-1P6031F320R0.png',
                    title:'23敬佩这位70后还在为梦想做坚持的他，我跟你携手共进',
                    desc:'很好奇毛总的经历，今天终于知道了点。对于一个40出头的70后，我原本以为就算是我们这个计算机专业的人，也不太可能深通现在的代码。而我又错了。 他的启蒙是在他10岁左右的小县城市少...',
                    id:'1',
                    createdTime:'2019-08-28',
                    viewCount:'493',
                    classid:'1003'
                },
                {
                    imgSrc:'http://www.zbboke.com/uploads/180603/1-1P6031F320R0.png',
                    title:'24敬佩这位70后还在为梦想做坚持的他，我跟你携手共进',
                    desc:'很好奇毛总的经历，今天终于知道了点。对于一个40出头的70后，我原本以为就算是我们这个计算机专业的人，也不太可能深通现在的代码。而我又错了。 他的启蒙是在他10岁左右的小县城市少...',
                    id:'1',
                    createdTime:'2019-08-28',
                    viewCount:'493',
                    classid:'1003'
                },
            ]
        }
    },
    methods:{
        current_change(currentPage){
            this.currentPage = currentPage;
            window.scrollTo(0,0)
        }
    }
//   async asyncData({$axios}){
//       const {data} = await $axios.get('https://api.myjson.com/bins/61gyv')
//       return {navList:data}
//   }
}
</script>

<style lang="less">

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
              }
              .article-face{
                    transform: scale(1.05);
                    box-shadow: 0 2px 4px 1px rgba(0,0,0,0.3);
              }
          }
      }
  }
</style>

