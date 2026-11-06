import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from './views/HomeView.vue'
import ProjectsView from './views/ProjectsView.vue'
import SkillsView from './views/SkillsView.vue'
import ContactView from './views/ContactView.vue'
import CvView from './views/CvView.vue'

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  scrollBehavior: () => ({ top: 0, behavior: 'smooth' }),
  routes: [
    { path: '/', name: 'home', component: HomeView, meta: { titleKey: 'nav.home' } },
    { path: '/projets', name: 'projects', component: ProjectsView, meta: { titleKey: 'nav.projects' } },
    { path: '/competences', name: 'skills', component: SkillsView, meta: { titleKey: 'nav.skills' } },
    { path: '/contact', name: 'contact', component: ContactView, meta: { titleKey: 'nav.contact' } },
    { path: '/cv', name: 'cv', component: CvView, meta: { titleKey: 'cv.title' } },
  ],
})

export default router
