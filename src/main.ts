import { createApp } from 'vue';
import './assets/main.css'
import App from './App.vue';
import router from './router';
import store from './store';
import { key } from './store';

const app = createApp(App);

app.use(router);
app.use(store, key);
app.mount('#app');