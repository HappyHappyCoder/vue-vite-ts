import NotFound from "@/view/errorPage/NotFound.vue";
import {createRouter, createWebHistory} from "vue-router";
import Hello from "@/view/Hello/Hello.vue";

const routes = [
    {path: '/', name: 'index', component: Hello},
    {path: '/:pathMatch(.*)*', name: 'NotFound', component: NotFound},
]

const router = createRouter({
    history: createWebHistory(),
    routes: routes,
})

export default router;