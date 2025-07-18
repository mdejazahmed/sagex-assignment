import vuetify from './vuetify';
import { createPinia } from 'pinia'
export default defineNuxtPlugin((app) => {
    app.vueApp.use(vuetify);
    app.vueApp.use(createPinia());
});