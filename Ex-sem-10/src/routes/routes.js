//importar las funciones necesarias
import { createRouter, createWebHistory } from "vue-router"; 

//importar los componenetes de las taelas de la app
import Home from "../views/Home/Home.vue"
import About from "../views/About/About.vue"
import NewTalent from "../views/Talent/New/NewTalent.vue"

// configurar routeamiento

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        { 
        path:"/",
        name: "Home",
        component: Home
    },

    { 
        path:"/sobre",
        name: "About",
        component: About
    },

    { 
        path:"/talentos/novo",
        name: "NewTalent",
        component: NewTalent
    }

     ]
})
// exportar o router

export default router
