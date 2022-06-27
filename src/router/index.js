
import { createRouter, createWebHistory } from 'vue-router'

const routes = [
    {
        path: '/',
        name: 'Root',
        component: () => import('../views/TabsView')
    },
    {
        path: '/tabs',
        name: 'Tabs',
        component: () => import('../views/TabsView')
    },
    {
        path: '/modal',
        name: 'Modal',
        component: () => import('../views/ModalView')
    },
    {
        path: '/dropdown',
        name: 'Dropdown',
        component: () => import('../views/DropdownView')
    },
    {
        path: '/progress',
        name: 'Progress',
        component: () => import('../views/ProgressView')
    }
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router
