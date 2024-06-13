import { createWebHistory, createRouter } from 'vue-router'

import HomeView from './pages/HomeView.vue'
import PortfolioView from './pages/PortfolioView.vue'
import ContactView from './pages/ContactView.vue'

export default createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', component: HomeView },
    { path: '/portfolio', component: PortfolioView },
    { path: '/contact', component: ContactView },
  ],
})