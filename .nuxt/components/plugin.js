import Vue from 'vue'
import { wrapFunctional } from './utils'

const components = {
  Artistes: () => import('../..\\components\\Artistes.vue' /* webpackChunkName: "components/artistes" */).then(c => wrapFunctional(c.default || c)),
  Intro: () => import('../..\\components\\Intro.vue' /* webpackChunkName: "components/intro" */).then(c => wrapFunctional(c.default || c)),
  Lieux: () => import('../..\\components\\Lieux.vue' /* webpackChunkName: "components/lieux" */).then(c => wrapFunctional(c.default || c)),
  Loading: () => import('../..\\components\\Loading.vue' /* webpackChunkName: "components/loading" */).then(c => wrapFunctional(c.default || c)),
  Logo: () => import('../..\\components\\Logo.vue' /* webpackChunkName: "components/logo" */).then(c => wrapFunctional(c.default || c)),
  Menu: () => import('../..\\components\\Menu.vue' /* webpackChunkName: "components/menu" */).then(c => wrapFunctional(c.default || c))
}

for (const name in components) {
  Vue.component(name, components[name])
  Vue.component('Lazy' + name, components[name])
}
