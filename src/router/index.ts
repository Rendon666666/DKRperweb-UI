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
                }
            ]

        },

    ]
})

export default router
