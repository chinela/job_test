import Vue from 'vue'
import Router from 'vue-router'
import Marketplace from '@/views/Marketplace'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: Marketplace
    },
  ]
})
