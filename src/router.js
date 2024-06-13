import { createWebHistory, createRouter } from 'vue-router'

import HomeView from './pages/HomeView.vue'
import PortfolioView from './pages/PortfolioView.vue'
import ContactView from './pages/ContactView.vue'
import ProjectView from './pages/ProjectView.vue'

export default createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', name:'home' , component: HomeView },
    { path: '/portfolio', name:'portfolio', component: PortfolioView },
    { path: '/portfolio/:slug', name:'project', component: ProjectView },
    { path: '/contact', name:'contact', component: ContactView },
  ],
})