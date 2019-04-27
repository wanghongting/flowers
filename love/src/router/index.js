import Vue from 'vue'
import Router from 'vue-router'
import index from '@/view/index'
import detail from '@/view/detail'
import classfiy from '@/view/classfiy'
import main from '@/view/main'

Vue.use(Router)

export default new Router({
    routes: [{
            path: '/',
            redirect: '/index'
        },
        {
            path: "/index",
            name: 'index',
            component: index
        },
        {
            path: '/detail/:type',
            name: 'detail',
            component: detail
        },
        {
            path: '/main',
            name: 'main',
            component: main
        }, {
            path: '/classfiy',
            name: 'classfiy',
            component: classfiy
        }

    ]
})