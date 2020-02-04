import Vue from "vue";
import Router from "vue-router";
import Home from "../views/Home.vue";
import Publications from "../views/Publications.vue";
import Projects from "../views/Projects.vue";
import News from "../views/News.vue";
import Team from "../views/Team.vue";

Vue.use(Router)
export default new Router({
routes: [
  {
    path: "/",
    name: "home",
    component: Home
  },
  {
    path: "/publications",
    name: "publications",
    component: Publications
  },
  {
    path: "/projects",
    name: "projects",
    component: Projects
  },
  {
    path: "/news",
    name: "news",
    component: News
  },
  {
    path: "/team",
    name: "team",
    component: Team
  }
]
})

