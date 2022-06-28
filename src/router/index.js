
import { createRouter, createWebHistory } from 'vue-router'

const routes = [
    {
        path: '/',
        name: 'Root',
        component: () => import('../views/RootView')
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
        path: '/table',
        name: 'Table',
        component: () => import('../views/TableView')
    },
    {
        path: '/progress',
        name: 'Progress',
        component: () => import('../views/ProgressView')
    },
    {
        path: '/breadcrumb',
        name: 'Breadcrumb',
        component: () => import('../views/BreadcrumbView')
    },
    {
        path: '/skeleton',
        name: 'Skeleton',
        component: () => import('../views/SkeletonView')
    }
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router
