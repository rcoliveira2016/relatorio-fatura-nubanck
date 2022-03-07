import { createApp } from 'vue'
import { Quasar } from 'quasar'
import quasarLang from 'quasar/lang/pt-BR'
// Import icon libraries
import '@quasar/extras/material-icons/material-icons.css'

// Import Quasar css
import 'quasar/dist/quasar.css'
import App from './App.vue'

const app = createApp(App);

app.use(Quasar, {
    plugins: {}, // import Quasar plugins and add here
    lang: quasarLang,
  })

app.mount('#app')
