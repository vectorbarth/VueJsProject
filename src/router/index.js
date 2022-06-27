
import { createRouter, createWebHistory } from 'vue-router'

const routes = [
    {
        path: '/Modal',
        name: 'Modal',
        component: () => import('../views/ModalView.vue')
    },
    {
        path: '/Tabs',
        name: 'Tabs',
        component: () => import('../views/TabsView.vue')
    },
    {
        path: '/Progress',
        name: 'Progress',
        component: () => import('../views/ProgressView.vue')
    }
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router
