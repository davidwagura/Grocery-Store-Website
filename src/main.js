import { createApp } from 'vue'

import App from './App.vue'

import router from './router'

import { createPinia } from 'pinia';

import '@/assets/index.css'

import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'



const app  = createApp(App)

const pinia = createPinia();

app.use(pinia);

pinia.use(piniaPluginPersistedstate)

app.use(router)

app.mount('#app')