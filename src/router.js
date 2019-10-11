import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('./views/Home.vue')
    },
    {
      path: '/home',
      name: 'home',
      component: () => import('./views/Home.vue')
    },
    {
      path: '/intell',
      name: 'intell',
      component: () => import('./views/Intell.vue')
    },
    {
      path: '/school',
      name: 'school',
      component: () => import('./views/School.vue')
    },
    {
      path: '/major',
      name: 'major',
      component: () => import('./views/Major.vue')
    },
    {
      path: '/schooldetail/:id',
      name: 'schooldetail',
      component: () => import('./views/SchoolDetail.vue')
    },
    {
      path: '/majordetail/:id',
      name: 'majordetail',
      component: () => import('./views/MajorDetail.vue')
    },
    {
      path: '/majorschooldetail/:id',
      name: 'majorschooldetail',
      component: () => import('./views/MajorSchoolDetail.vue')
    },
    {
      path: '*',
      redirect: '/'
    }
  ]
})
