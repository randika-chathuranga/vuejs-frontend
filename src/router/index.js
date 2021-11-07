import Vue from 'vue'
import VueRouter from 'vue-router'


Vue.use(VueRouter)


const routes = [
  // {
  //   path: '/',
  //   name: 'Home',
  //   component: Home
  // },
  // {
  //   path: '/about',
  //   name: 'About',
  //   componenet: About
  // },
  // {
  //   path: '/portfolio',
  //   name: 'Portfolio',
  //   componenet: Portfolio
  // },
  // {
  //   path: '/project',
  //   name: 'Project',
  //   componenet: Project
  // },
  // {
  //   path: '/gallery',
  //   name: 'Gallery',
  //   componenet: Gallery
  // },
  // {
  //   path: '/contact',
  //   name: 'Contact',
  //   componenet: Contact
  // }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
