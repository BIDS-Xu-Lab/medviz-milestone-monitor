import "primeicons/primeicons.css";
import './style.css';

import { createApp } from 'vue';
import App from './App.vue';
import PrimeVue from 'primevue/config';
import ToastService from 'primevue/toastservice';
import Aura from '@primevue/themes/aura';
import { createPinia } from 'pinia';
import { useDataStore } from "./DataStore";
import Tooltip from 'primevue/tooltip';

import packageJson from '../package.json';
console.log('* source code version:', packageJson.version);

// create the app
const app = createApp(App)

// add the ToastService to the app
app.use(ToastService);

// add pinia to the app
const pinia = createPinia()
app.use(pinia);

// bind the store to the window object
const store = useDataStore();
window.store = store;
store.app_config = app_config;
store.version = packageJson.version;

// initialize the store
store.init();

// add PrimeVue to the app
app.use(PrimeVue, {
    theme: {
        preset: Aura
    }
});

// add the Tooltip directive to the app
app.directive('tooltip', Tooltip);

/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

import { fas } from '@fortawesome/free-solid-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons'

/* add icons to the library */
library.add(fas, far, fab)
app.component('font-awesome-icon', FontAwesomeIcon)

// mount the app to the DOM
app.mount('#app')