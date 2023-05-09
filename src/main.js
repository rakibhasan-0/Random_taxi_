import { createApp } from 'vue';
import App from './App.vue';
import { createRouter, createWebHistory } from 'vue-router';
import { createVuestic } from 'vuestic-ui';
import FirstPage from './components/StartPage.vue';
import TaxiPage from './components/TaxiPage.vue';

const routes = [
  {
    path: '/',
    component: FirstPage,
  },
  {
    path: '/taxi',
    component: TaxiPage,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

const app = createApp(App);

app.use(router);
app.use(createVuestic());

app.mount('#app');
