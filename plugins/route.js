//路由守卫
export default ({ app }) => {
   app.router.beforeEach((to, from, next) => {
     console.log(to.path)
     next()
   })
 }