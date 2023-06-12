import { createRouter, createWebHistory } from 'vue-router';

import { useAuthStore } from '@/store/auth'; // auth Pinia store module

const routes = [
  {
    path: '/',
    component: () => import('@/views/LoginView.vue')
  },
  {
    path: '/register',
    component: () => import('@/layouts/DefaultLayout.vue'),
    children: [
      {
        path: '',
        component: () => import('@/views/RegisterView.vue')
      }
    ],
  },
  {
    path: '/dashboard',
    component: () => import('@/layouts/DefaultLayout.vue'),
    children: [
      {
        path: '',
        component: () => import('@/views/DashboardView.vue')
      }
    ],
    meta: { requiresAuth: true },
  },
  {
    path: '/stickynote',
    component: () => import('@/layouts/DefaultLayout.vue'),
    children: [
      {
        path: '',
        component: () => import('@/views/StickyNoteView.vue')
      }
    ],
    meta: { requiresAuth: true },
  },
  {
    path: '/home',
    component: () => import('@/layouts/DefaultLayout.vue'),
    children: [
      {
        path: '',
        component: () => import('@/views/HomeView.vue')
      }
    ],
    meta: { requiresAuth: true },
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

router.beforeEach((to, from, next) => {
  const authStore = useAuthStore();

  const user = authStore.user;

  // while (user) {
  //   if (to.path === '/' && user) {
  //     next('/home');
  //   }
  // }

  if (to.meta.requiresAuth && !user) {
    next('/');
  }
  else {
    next();
  }
});
export default router;
