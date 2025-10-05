import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutUs from '@/views/AboutUs.vue'
import Solutions from '@/views/Solutions.vue'
import ContactUs from '@/views/ContactUs.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/about',
      name: 'about',
      component: AboutUs,
    },
    {
      path: '/solutions',
      name: 'solutions',
      component: Solutions,
    },
    {
      path: '/contact',
      name: 'contact',
      component: ContactUs,
    },

  ],
  scrollBehavior() {
    return { left: 0, top: 0, behavior: 'smooth' }
  },
})

export default router
