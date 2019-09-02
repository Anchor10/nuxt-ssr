

export default ({app:{ $axios }}) => {
    $axios.defaults.baseURL = process.env.baseUrl || '/web/api'
}