import Vue from 'vue';
import VueRouter from 'vue-router';

// Lazy load component
const Home = () => import('../pages/Home.vue');
const Login = () => import('../pages/Login.vue');
const NotFound = () => import('../components/NotFound.vue');
const Intro = () => import('../pages/Intro.vue');
const Post = () => import('../pages/Posts.vue');

Vue.use(VueRouter);

const rootRoutes = [
    {
        name: 'root-route',
        path: '/',
        component: Home,
    },
    {
        name: 'intro-route',
        path: '/intro',
        component: Intro
    },
    {
        name: 'post-route',
        path: '/posts',
        component: Post
    },
    {
        name: 'login-route',
        path: '/login',
        component: Login
    },
    {
        name: 'not-found-route',
        path: '*',
        component: NotFound
    }
]

const router = new VueRouter({
    mode: 'history',
    routes: rootRoutes,

    /* Auto scroll to top when navigate to another page or scroll to specific position 
    when u go back/forward page by using button in the browser. */
    scrollBehavior(to, from, savedPosition) {
        if (savedPosition) {
            return savedPosition
        } else {
            return { x: 0, y: 0 }
        }
    }
});

export default router;