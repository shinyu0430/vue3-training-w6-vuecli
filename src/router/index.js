import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
  {
    path: '/login',
    component: () => import('../views/Login.vue')
  },
  {
    path: '/',
    component: () => import('../views/Home.vue'),
    children: [
      {
        path: '',
        name: '首頁',
        component: () => import('../views/Index.vue')
      },
      {
        path: '/products',
        name: '產品列表',
        component: () => import('../views/Products.vue')
      },
      {
        path: '/cart',
        name: '購物車',
        component: () => import('../views/Cart.vue')
      }
    ]
  },

  {
    path: '/dashboard',
    component: () => import('../views/Dashboard.vue'),
    children: [
      {
        path: '',
        component: () => import('../views/Dashboard/Index.vue')
      },
      {
        path: 'products',
        component: () => import('../views/Dashboard/Products.vue')
      },
      {
        path: 'orders',
        component: () => import('../views/Dashboard/Orders.vue')
      }
    ]
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
