<template>
    <div class="header">
        <div class="banner">
        </div>
        <div class="top-box">
            <div class="position-change">
                <div class="topbar con-width">
                    <div class="left-bar clear">
                        <ul class="nav-list clear">
                            <li class="nav-item current">
                                <nuxt-link to="/">
                                    <i class="iconfont icon-shouye2"></i> 首页
                                </nuxt-link>
                            </li>
                            <li class="nav-item">
                                <nuxt-link to="/news">
                                    <i class="iconfont icon-JS"></i> 免费游戏
                                </nuxt-link>
                            </li>
                            <li class="nav-item">
                                <nuxt-link to="/about">
                                    <i class="iconfont icon-vuejs"></i> 资讯
                                </nuxt-link>
                            </li>
                            <li class="nav-item">
                                <nuxt-link to="/categories">
                                    <i class="iconfont icon-nodejs"></i> 专题
                                </nuxt-link>
                            </li>
                            <li class="nav-item">
                                <nuxt-link to="/user">
                                    <i class="iconfont icon-mongodb"></i> 排行
                                </nuxt-link>
                            </li>
                            <li class="nav-item">
                                <nuxt-link to="/">
                                    <i class="iconfont icon-44"></i> 视频
                                </nuxt-link>
                            </li>
                            <li class="nav-item">
                                <nuxt-link to="/">
                                    <i class="iconfont icon-msg"></i> 留言板
                                </nuxt-link>
                            </li>
                        </ul>
                    </div>
                    <div class="right-bar clear">
                        <div class="login-btn">
                            <a href="/login">登录</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
      return {
        activeIndex: '1',
        activeIndex2: '1'
      };
    },
    data(){
        return {
            navList:[
                {
                    title:'爱情说说',
                    _id:1
                },
                {
                    title:'爱情经典语录',
                    _id:2
                },
                {
                    title:'经典说说',
                    _id:3
                },
                {
                    title:'心情说说',
                    _id:4
                }
            ]
        }
    },
    methods:{
        handleSelect(){

        }
    }
}
</script>