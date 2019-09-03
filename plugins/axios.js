

export default ({app:{ $axios, redirect }}) => {
    $axios.defaults.baseURL = process.env.baseUrl || '/web/api'
    $axios.onError(err => {
        if(err.code === 500) {
            redirect('/')
        }
    })
}