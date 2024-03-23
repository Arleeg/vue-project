import { createApp } from 'vue'
import { createRouter , createWebHistory} from 'vue-router'
import App from './App.vue'
import Home from './views/HomePage.vue'
import About from './views/AboutPage.vue'
import './assets/style.css'

const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: '/',name: 'home', component: Home },
        { path: '/about',name: 'About', component: About }
    ],
})



createApp(App).use(router).mount('#app')

