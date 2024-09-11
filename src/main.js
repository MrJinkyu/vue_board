import 'bootstrap/dist/css/bootstrap.min.css';
import { createApp } from 'vue';
import App from './App.vue';
import router from '@/router';

createApp(App).use(router).mount('#app');
import 'bootstrap/dist/js/bootstrap.js';

console.log('MDDE: ', import.meta.env.MODE);
console.log('MDDE: ', import.meta.env.DEV);
console.log('MDDE: ', import.meta.env.PROD);
console.log('MDDE: ', import.meta.env.BASE_URL);
console.log('API_URL: ', import.meta.env.VITE_API_URL);
