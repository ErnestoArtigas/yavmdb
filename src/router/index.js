import Vue from "vue";
import VueRouter from "vue-router";

import Home from "../views/Home.vue";
import SearchResults from "../views/SearchResults.vue";
import SearchMovie from "../views/SearchMovie.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    component: Home,
  },
  {
    path: "/search/:query",
    component: SearchResults,
  },
  {
    path: "/movie/:id",
    component: SearchMovie,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
