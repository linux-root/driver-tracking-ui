import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from './login'
import Home from './home'
import Register from './register'

//WHEN using @ you needn't declare the component name in Details

Vue.use(VueRouter);

let router = new VueRouter({
    mode: 'history',
    routes: [
        Home, Login, Register
    ]
});

router.beforeEach((to, from, next) => {
    if(to.matched.some(record => record.meta.requiresAuth)) {
        if (localStorage.getItem('accessToken') == null) {
            next({
                path: '/login',
                params: { nextUrl: to.fullPath }
            })
        } else {
           next()
        }
    } else if(to.matched.some(record => record.meta.guest)) {
        if(localStorage.getItem('accessToken') == null){
            next()
        }
        else{
            next({ path: '/'})
        }
    }else {
        next()
    }
});

export default router;
