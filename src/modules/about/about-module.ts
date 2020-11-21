import { Vue as _Vue } from 'vue/types/vue'
import { VueModule } from 'vue-modules'
import VueRouter from 'vue-router'
import { aboutRoutes } from './router'
import { Store } from 'vuex'

export class AboutModule implements VueModule {
  readonly name = 'home'
  constructor(private router: VueRouter, private store: Store<any>) {}

  install(Vue: typeof _Vue) {
    this.router.addRoutes(aboutRoutes)
  }
}