/*
 * @Author: lfan
 * @Date: 2023-03-21 20:12:03
 * @Description: file content
 */
import { createRouter, createWebHistory } from "vue-router"

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/index',
            name: 'index',
            component: () => import('../views/home/index.vue'),
        },
        {
            path: '/login',
            name: 'login',
            component: () => import('../views/home/login.vue')
        },
        {
            path: '/register',
            name: 'register',
            component: () => import('../views/home/login.vue')
        },
        {
            path: '/',
            name: 'app',
            redirect: '/index',
            component: () => import('../App.vue'),
            children: [
                {
                    path: '/main-index',
                    name: 'main-index',
                    redirect: '/home',
                    component: () => import('../views/index/main-index.vue'),
                    children: [
                        {
                            path: '/home',
                            name: 'home',
                            component: () => import('../views/page/home.vue'),
                        }
                    ]
                },

            ]
        }
    ]
})

export default router