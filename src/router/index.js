import Vue from 'vue'
import Router from 'vue-router'

const Login = resolve => require(['@/components/Login'], resolve)

Vue.use(Router)
export default new Router({
  routes: [
    {
      path: '/',
      name: '登录',
      component: Login
    }
  ]
})
