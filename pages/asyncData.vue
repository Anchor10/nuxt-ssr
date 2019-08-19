<template>
    <div>
        <h1>姓名:{{info.name}}</h1>
        <h1>年龄:{{info.age}}</h1>
        <h1>爱好:{{info.hobby}}</h1>
    </div>
</template>

<script>
import axios from 'axios'
export default {
    data(){
        return {
            name:'hello world!'
        }
    },
    // asyncData(){
    //     return axios.get('https://api.myjson.com/bins/11c1zn')
    //     .then(res=>{
    //         return {info:res.data}
    //     })
    // }
    async asyncData(){
        const {data} = await axios.get('https://api.myjson.com/bins/11c1zn')
        return {info:data}
    }
}
</script>