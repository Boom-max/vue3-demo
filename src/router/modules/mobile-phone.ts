import { RouteRecordRaw } from 'vue-router'

export const mobilePhone: RouteRecordRaw[] = [
  {
    path: '/mobile-phone',
    meta: { title: '手机' },
    children: [
      {
        path: '/mobile-phone',
        meta: { title: '手机' },
        component: () => import('@views/mobile-phone/index.vue'),
      },
    ],
  },
]
