import Vue from 'vue';
import VueRouter from 'vue-router';
import App from './app.vue';

Vue.use(VueRouter);

// 路由配置
const Routers = [
    {
        path: '/mock',
        meta: {
            title: '模拟数据'
        },
        component: (resolve) => require(['./views/mock.vue'], resolve)
    },
    {
        path: '*',
        redirect: '/mock'
    }
];
const RouterConfig = {
    // 使用 HTML5 的 History 路由模式
    mode: 'history',
    routes: Routers
};
const router = new VueRouter(RouterConfig);

router.beforeEach((to, from, next) => {
    window.document.title = to.meta.title;
    next();
});

router.afterEach((to, from, next) => {
    window.scrollTo(0, 0);
});

new Vue({
    el: '#app',
    router: router,
    render: h => {
        return h(App)
    }
});