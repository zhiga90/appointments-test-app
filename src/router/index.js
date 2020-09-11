import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    redirect: '/appointments',
  },
  {
    path: '/appointments',
    name: 'appointments',
    component: () => import('@/views/appointments/appointments.vue'),
  },
  {
    path: '/appointments/create',
    component: () => import('@/views/appointments/appointment-create.vue'),
    children: [
      {
        path: '',
        name: 'appointment-create',
        redirect: 'info',
      },
      {
        path: 'info',
        name: 'appointment-info',
        component: () => import('@/views/appointments/appointment-info.vue'),
      },
      {
        path: 'confirm',
        name: 'appointment-confirm',
        component: () => import('@/views/appointments/appointment-confirm.vue'),
      },
    ],
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
})

export default router
