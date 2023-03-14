import Vue from 'vue'
import VueRouter from 'vue-router'
// import HomeView from '../views/HomeView.vue'
// import SingleProduct from "../components/SingleProduct.vue";
// import MainPage from "../views/MainPage.vue";

import Review from "../views/Review.vue";

Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'history',
  // base: import.meta.env.BASE_URL,
  routes: [
    {
      path: '/review',
      name: 'Review',
      // component: () => import('../views/Review.vue')
      component: Review

    },
    // {
    //   path: '/',
    //   name: 'HelloWorld',
    //   component: () => import('../components/HelloWorld.vue')
    // },
    // {
    //   path: '/:category/:id',
    //   name: 'SingleProduct',
    //   component: () => import('../components/SingleProduct.vue')
    // },
    // {
    //   path: '/:category',
    //   name: 'AllProducts',
    //   component: () => import('../components/AllProducts.vue')
    // },


    // {
    //   path: '/:id',
    //   name: 'SingleProduct',
    //   component: () => import('../components/SingleProduct.vue')
    // },
  ]
})

export default router
