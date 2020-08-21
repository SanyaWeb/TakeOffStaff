import Vue from 'vue'
import Router from 'vue-router'
import Login from "./views/login/Login";
import ContactList from "./views/СontactList/ContactList";
Vue.use(Router);

let router = new Router({
    mode: "history",
    base: process.env.BASE_URL,
    routes: [
        {
            path: '/login',
            name: 'login',
            meta: {
                layout: 'MainLayout',
                permission: false
            },
            component: Login
        },
        {
            path: '/',
            name: 'contacts',
            meta: {
                layout: 'MainLayout',
                permission: true
            },
            component: ContactList
        }
    ],
})

router.beforeEach((to, from, next) => {
    let needAuth = to.matched.some((route) => {
        return route.meta.permission
    });
    if(needAuth) {
        if (localStorage.getItem('jwt') == null) {
            next({
                path: '/login'
            })
        } else {
            if(to.fullPath === '/login') {
                next({
                    path: '/'
                })
            }
            next();
        }
    } else {
        next();
    }
});

export default router