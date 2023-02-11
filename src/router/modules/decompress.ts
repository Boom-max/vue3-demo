import { RouteRecordRaw } from "vue-router";

export const decompress: RouteRecordRaw[] = [
  {
    path: "/decompress",
    meta: { title: "解压" },
    redirect: '/decompress/gadget',
    children: [
      {
        path: "/decompress/gadget",
        meta: { title: "小玩意儿" },
        component: () => import("@views/decompress/gadget/index.vue"),
      },
    ],
  },
];
