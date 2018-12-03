import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

import HelloWorld from '../components/HelloWorld'
import SecondWorld from '../components/SecondWorld'


export default new Router({
    routes: [
        {
            path: '/',
            name: 'HelloWorld',
            component: HelloWorld
        },
        {
            path: '/secondworld',
            name: 'SecondWorld',
            component: SecondWorld
        },
    ]
})
