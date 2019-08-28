module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: '爱情说说大全_爱情说说心情语录_经典爱情语录大全',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'initial-scale=1.0,user-scalable=no,maximum-scale=1,width=device-width' },
      { hid: 'description', name: 'description', content: '学习各大经典爱情说说、爱情语录等相关说说心情短句语录大全，就到说说园网，实时更新最新说说大全，包含伤感/甜蜜爱情说说大全！搞笑、经典语录说说应有尽有！' },
      { hid: 'keywords', name: 'keywords', content: '爱情说说, 说说大全, 说说心情, 心情语录, 经典爱情语录, 爱情语录大全' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  plugins: [{
    src: '~plugins/ElementUI',
    ssr: true,
  }],
  css:[
    'element-ui/lib/theme-chalk/index.css',
    '~assets/css/base.css'
  ],
  /*
  ** Customize the progress bar color
  */
  loading: { color: '#3B8070' },


  modules: [
    '@nuxtjs/axios',
  ],
  /*
  ** Build configuration
  */
  build: {
    /*
    ** Run ESLint on save
    */
    extend (config, { isDev, isClient }) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    },
    vendor:['element-ui']   //防止element-ui被打包多次
  }
}

