import {createRouter, createWebHistory} from "vue-router"
import QuizesView from "../views/QuizesView.vue"
import QuizView from "../views/QuizView.vue"


function lazyLoad(view){
    return() => import(`@/views/${view}.vue`)
  }

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: "/",
            name: 'quizes',
            component: QuizesView
        },
        {
            path:"/quiz/:id",
            name:'quiz',
            component: QuizView
        },
        ,
        {
            path: "/:catchAll(.*)",
            name: 'not found',
            // Lazy loading, Elements are not going in the DOM 
             component: () => import("@/views/NotFound.vue"),
          // component: () => lazyLoad(NotFound)
        }
    ]
})

export default router