import {
  createRouter,
  createWebHistory,
  RouteRecordRaw,
  Router,
} from 'vue-router'
import { decompress } from './modules/decompress'
import { mobilePhone } from './modules/mobile-phone'

export const routerList: Array<RouteRecordRaw> = [...decompress, ...mobilePhone]
const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    children: [...routerList],
  },
]
const router: Router = createRouter({ history: createWebHistory(), routes })
router.beforeEach((to, from, next) => {
  next()
  window.document.title = `${to.meta.title}`
})
export default router
