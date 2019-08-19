<template>
    <div>
        <h2>News Index Page</h2>
        <p>newsId:{{$route.params.newsId}}</p>
        <ul>
            <li><a href="/">HOME</a></li>
            <li><nuxt-link :to="{name:'news-id',params:{id:123, title:'我是新闻页面标题'}}">news-1</nuxt-link></li>
            <li><a href="/news/fang">news-2</a></li>
        </ul>
    </div>
</template>
<script>
export default {
    transition:'test'
}
</script>