import {createRouter, createWebHistory} from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'home',
            component: HomeView,
            redirect: '/body',
            children: [
                {
                    path: '/body',
                    name: 'body',
                    component: () => import('../components/homepage/mainbody/body.vue')
                },
                {
                    path: '/article',
                    name: 'article',
                    component: () => import('../components/article/ArticleNavigation.vue')
                }
            ]

        },
        {
            path: '/index',
            name: 'index',
            component: () => import('@/views/NewHome.vue')
        },
        {
            path: '/login',
            name: 'login',
            component: () => import('@/views/Login.vue')
        },

    ]
})

export default router
