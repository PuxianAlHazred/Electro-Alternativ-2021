import { wrapFunctional } from './utils'

export { default as Artistes } from '../..\\components\\Artistes.vue'
export { default as Intro } from '../..\\components\\Intro.vue'
export { default as Lieux } from '../..\\components\\Lieux.vue'
export { default as Loading } from '../..\\components\\Loading.vue'
export { default as Logo } from '../..\\components\\Logo.vue'
export { default as Menu } from '../..\\components\\Menu.vue'

export const LazyArtistes = import('../..\\components\\Artistes.vue' /* webpackChunkName: "components/artistes" */).then(c => wrapFunctional(c.default || c))
export const LazyIntro = import('../..\\components\\Intro.vue' /* webpackChunkName: "components/intro" */).then(c => wrapFunctional(c.default || c))
export const LazyLieux = import('../..\\components\\Lieux.vue' /* webpackChunkName: "components/lieux" */).then(c => wrapFunctional(c.default || c))
export const LazyLoading = import('../..\\components\\Loading.vue' /* webpackChunkName: "components/loading" */).then(c => wrapFunctional(c.default || c))
export const LazyLogo = import('../..\\components\\Logo.vue' /* webpackChunkName: "components/logo" */).then(c => wrapFunctional(c.default || c))
export const LazyMenu = import('../..\\components\\Menu.vue' /* webpackChunkName: "components/menu" */).then(c => wrapFunctional(c.default || c))
