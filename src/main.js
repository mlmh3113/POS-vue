import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { plugin , defaultConfig } from '@formkit/vue'
import config from '../formkit.config'
import { VueFire, VueFireAuth } from 'vuefire'
import { firebaseApp } from './config/firebase'
import swal from 'sweetalert';

import App from './App.vue'
import router from './router'

const app = createApp(App)

app.config.globalProperties.$swal = swal
app.use(createPinia())
app.use(plugin, defaultConfig(config))
app.use(router)
app.use(VueFire, {
  firebaseApp,
  modules: [VueFireAuth()],
})

app.mount('#app')

