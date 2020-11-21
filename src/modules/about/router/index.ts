import { RouteConfig } from 'vue-router'
import About from '../components/About.vue'

export const aboutRoutes: RouteConfig[] = [
    {
        path: '/about',
        name: 'About',
        component: About,
    }
]