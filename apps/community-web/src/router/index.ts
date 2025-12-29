import { createRouter, createWebHistory } from 'vue-router';

const MainLayout = () => import('@/layouts/MainLayout.vue');
const HomeFeed = () => import('@/views/HomeFeed/HomeFeed.vue');
const Login = () => import('@/views/Login/Login.vue');
const Register = () => import('@/views/Register/Register.vue');

export const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      component: MainLayout,
      children: [
        {
          path: '',
          name: 'home',
          component: HomeFeed,
        },
        {
          path: 'search',
          name: 'search',
          component: () => import('@/views/HomeFeed/HomeFeed.vue'), // Placeholder
        },
        {
          path: 'explore',
          name: 'explore',
          component: () => import('@/views/HomeFeed/HomeFeed.vue'), // Placeholder
        },
        {
          path: 'reels',
          name: 'reels',
          component: () => import('@/views/HomeFeed/HomeFeed.vue'), // Placeholder
        },
        {
          path: 'messages',
          name: 'messages',
          component: () => import('@/views/HomeFeed/HomeFeed.vue'), // Placeholder
        },
        {
          path: 'notifications',
          name: 'notifications',
          component: () => import('@/views/HomeFeed/HomeFeed.vue'), // Placeholder
        },
        {
          path: 'create',
          name: 'create',
          component: () => import('@/views/HomeFeed/HomeFeed.vue'), // Placeholder
        },
        {
          path: 'profile',
          name: 'profile',
          component: () => import('@/views/HomeFeed/HomeFeed.vue'), // Placeholder
        },
      ],
    },
    { path: '/login', name: 'login', component: Login },
    { path: '/register', name: 'register', component: Register },
  ],
});
