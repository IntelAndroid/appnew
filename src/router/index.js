import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';

Vue.use(VueRouter);

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/about',
        name: 'About',
        component: () => import('../views/About.vue')
    },
    {
        path: '/News',
        name: 'News',
        component: () => import('../views/News.vue')
    },
    {
        path: '/Seek',
        name: 'Seek',
        component: () => import('../views/Seek.vue')
    },
    {
        path: '/tooth/Zy',
        name: 'Zy',
        component: () => import('../views/tooth/Zy.vue')
    },
];

const router = new VueRouter({
    mode: 'history',
    routes
});
export default router
