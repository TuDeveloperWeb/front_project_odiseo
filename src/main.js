import { createApp } from 'vue'
import App from './App.vue'
// import router from './router'
import axios from 'axios' // Importa Axios
import 'vuetify/dist/vuetify.css'
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import 'vuetify/dist/vuetify.css'

const vuetify = createVuetify({
  components,
  directives,
})

const app = createApp(App)
// app.use(router) // Usa Vue Router en la aplicación
app.use(axios) // Usa Axios en la aplicación
app.use(vuetify)
app.mount('#app')
