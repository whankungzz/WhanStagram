import Vue from 'vue'
import Router from 'vue-router'
import HomePage from '@/pages/HomePage'
import ContactPage from '@/pages/ContactPage'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HomePage',
      component: HomePage
    },
    {
      path: '/contact',
      name: 'ContactPage',
      component: ContactPage
    }
  ]
})
