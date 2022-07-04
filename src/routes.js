import Vue from "vue";
import Router from "vue-router";
import App from "./pages/event.vue";
import Setting from "./pages/setting.vue";
import Login from "./pages/login.vue";
import Regestration from "./pages/regestration.vue";
import EventId from "./pages/events/_id";
import SettingId from "./pages/settings/_id";
Vue.use(Router);

export default new Router({
  mode: "history",
  routes: [
    {
      path: "/setting",
      name:"setting",
      component: Setting,
    },
   
    {
      path: "/",
      name: "App",
      component: App,
    },
    {
      path: "/settings/:id",
      name: "settingsId",
      component: SettingId,
    },
    {
      path: "/events/:id",
      name: "eventsId",
      component: EventId,
    },
    {
      path: "/login",
      name: "Login",
      component: Login,
      meta: {
        layout: "auth-layout",
      },
    },
    {
      path: "/regestration",
      name: "Regestration",
      component: Regestration,
      meta: {
        layout: "auth-layout",
      },
    },
  ],
});
