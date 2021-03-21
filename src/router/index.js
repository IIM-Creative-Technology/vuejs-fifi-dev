import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Admin from "../views/Admin.vue";
import Blog from "../views/Blog.vue";
import Login from "../views/Login.vue";
import Register from "../views/Register.vue";
import Missing from "../views/Missing.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  //route vers la page Admin
  {
    path: "/admin",
    name: "Admin",
    component: Admin
  },
  //route vers la page blog
  {
    path: "/blog",
    name: "Blog",
    component: Blog
  },
  //route vers la page de connexion
  {
    path: "/login",
    name: "Login",
    component: Login
  },
  
  //route vers la page d'inscription
  {
    path: "/register",
    name: "Register",
    component: Register
  },
  
  //route vers la page 404
  {
    path: '*',
    component: Missing
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
