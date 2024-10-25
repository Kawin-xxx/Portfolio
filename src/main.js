import './assets/main.scss'

import { createApp } from 'vue'
import App from './App.vue'
import 'virtual:svg-icons-register'
import { createI18n } from 'vue-i18n'
import en from '/locales/en';
import ru from '/locales/ru';

const i18n = new createI18n({
    locale: 'ru',
    fallbackLocale: 'en',
    messages: { en, ru },
});

createApp(App).use(i18n).mount('#app')
