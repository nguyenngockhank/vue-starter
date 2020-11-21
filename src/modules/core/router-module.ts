import { Vue as _Vue } from 'vue/types/vue'
import { VueModule } from 'vue-modules'
import Router from 'vue-router'

export class RouterModule implements VueModule {
  readonly name = 'router'
  router?: Router;

  install(Vue: typeof _Vue) {
    Vue.use(Router)

    this.router = new Router({
      // mode: 'history',
      // base: process.env.BASE_URL
      routes: []
    })
  }
}