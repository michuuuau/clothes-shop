import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import CartView from "../views/CartView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/all",
      name: "all",
      component: HomeView,
    },
    {
      path: "/jeans",
      name: "jeans",
      component: HomeView,
    },
    {
      path: "/shirt",
      name: "shirt",
      component: HomeView,
    },
    {
      path: "/dress",
      name: "dress",
      component: HomeView,
    },
    {
      path: "/jumper",
      name: "jumper",
      component: HomeView,
    },
    {
      path: "/jacket",
      name: "jacket",
      component: HomeView,
    },
    {
      path: "/cart",
      name: "cart",
      component: CartView,
    },
    {
      path: "/about",
      name: "about",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("../views/AboutView.vue"),
    },
  ],
});

export default router;
