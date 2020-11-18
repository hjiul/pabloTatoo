import Vue from 'vue'
import VueRouter from 'vue-router'
import pablo from '../views/pablo.vue'
import drawings from '../views/drawings.vue'
import tatoos from '../views/tatoos.vue'
import contacto from '../views/contacto.vue'
import servicios from '../views/servicios.vue'

Vue.use(VueRouter)

  const routes = [
    {
      path: '/pablo',
      name: 'pablo',
      component: pablo
    },
    {
      path: '/drawings',
      name: 'drawings',
      component: drawings
    },
    {
      path: '/tatoos',
      name: 'tatoos',
      component: tatoos
    },
    {
      path: '/contacto',
      name: 'contacto',
      component: contacto
    },
    {
      path: '/servicios',
      name: 'servicios',
      component: servicios
    },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
