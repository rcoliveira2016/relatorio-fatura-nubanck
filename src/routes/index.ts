import {createRouter,createWebHashHistory, RouteRecordRaw} from 'vue-router'

const routes: RouteRecordRaw[] = [
    { path: '/', component: ()=> import("@/pages/Importar/ImportarRelatorioNubank.vue") },
    { path: '/relatorio', component: ()=> import("@/pages/relatorio/RelatorioNubank.vue") },
  ]
  
  // keep it simple for now.
export const router = createRouter({
    history: createWebHashHistory(),
    routes, // short for `routes: routes`
})