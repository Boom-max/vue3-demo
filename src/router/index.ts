import {
  createRouter,
  createWebHistory,
  RouteRecordRaw,
  Router,
} from "vue-router";
import { decompress } from "./modules/decompress";

export const routerList: Array<RouteRecordRaw> = [...decompress];
const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    redirect: "/decompress/gadget",
    children: [...routerList],
  },
];
const router: Router = createRouter({ history: createWebHistory(), routes });
router.beforeEach((to, from, next) => {
  next();
  window.document.title = `${to.meta.title}`;
});
export default router;
