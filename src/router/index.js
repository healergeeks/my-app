import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/about",
    name: "about",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/AboutView.vue"),
  },
  {
    path: "/v-bind", //path: Chỉ định đường dẫn URL cho tuyến đường.
    name: "v-bind", //name: Cung cấp tên duy nhất cho tuyến đường, có thể được sử dụng để xác định hoặc liên kết với tuyến đường theo chương trình.
    component: () => import("../views/v-bind.vue"), //component: Liên kết thành phần Vue với tuyến đường.
  },
  {
    path: "/v-on",
    name: "v-on",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import("../views/v-on.vue"),
  },
  {
    path: "/Computed",
    name: "computedViewS",
    component: () => import("../views/ComputedView.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
