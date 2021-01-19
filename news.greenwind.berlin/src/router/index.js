import Vue from 'vue'
import Router from 'vue-router'
import Meta from 'vue-meta'

// import All from '@/components/All'
import Post from '@/components/Post'

Vue.use(Router)
Vue.use(Meta)

export default new Router({
  mode: 'history',
  routes: [
    { path: '/', component: Post },
    { path: '/:id', component: Post }
  ]
})
