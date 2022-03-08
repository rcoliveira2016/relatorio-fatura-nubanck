import { createApp } from 'vue'
import { Quasar } from 'quasar'
import quasarLang from 'quasar/lang/pt-BR'
import { createPinia } from 'pinia'
import { router } from '@/routes'
import '@quasar/extras/material-icons/material-icons.css'
import 'quasar/dist/quasar.css'
import 'ag-grid-enterprise';
import App from './App.vue'

const app = createApp(App)
  .use(Quasar, {
      plugins: {}, // import Quasar plugins and add here
      lang: quasarLang,
    })
  .use(router)
  .use(createPinia())
  .mount('#app');
