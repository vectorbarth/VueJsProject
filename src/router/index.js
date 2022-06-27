
import { createRouter, createWebHistory } from 'vue-router'

const routes = [
    {
        path: '/',
        name: 'Root',
        component: () => import('../views/TabsView')
    },
    {
        path: '/Modal',
        name: 'Modal',
        component: () => import('../views/ModalView')
    },
    {
        path: '/Tabs',
        name: 'Tabs',
        component: () => import('../views/TabsView')
    },
    {
        path: '/Progress',
        name: 'Progress',
        component: () => import('../views/ProgressView')
    }
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router
