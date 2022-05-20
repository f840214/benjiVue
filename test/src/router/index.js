import Vue from 'vue'
import Router from 'vue-router'
import menu from '@/components/menu'
Vue.use(Router)

// const originalPush = Router.prototype.push
// Router.prototype.push = function push (location) {
//   return originalPush.call(this, location).catch(err => err)
// }

export default new Router({
  routes: [
    {
      path: '/',
      name: 'menu',
      component: menu
    },
    {
      path: '/center',
      name: 'center',
      component: () => import('@/view/center.vue')
    }
  ]
})
