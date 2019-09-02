<template>
    <div class="container">
        <h2 v-if="error.statusCode == 404">404页面,你查找的页面不存在!</h2>
        <h2 v-else>500,服务器错误.</h2>
        <nuxt-link to="/">首 页</nuxt-link>
    </div>
</template>
<script>
export default {
    props:['error']
}
</script>