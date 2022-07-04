import Vue from "vue";
import App from "./App.vue";
import VueRouter from "vue-router";
import index from "./components/index";
import router from "./routes";
import vueSelect from "./plugins/vue-select";
import DatePicker from "./plugins/datapicker";
import bootstrap from "./plugins/bootstrap";
import { Swiper, SwiperSlide } from "./plugins/swiper";
import CKEditor from "./plugins/ckeEditor";
import moment from "./plugins/moment";
import "core-js";
import "./assets/scss/common.scss";
import axios from "axios";
import VueAxios from "vue-axios";
import Vuex from "vuex";
import Api from "./modules/api/api";
import store from "./store";
import DefaultLayout from './layouts/index.vue'
import AuthLayout from './layouts/auth.vue'
import middleware from './middleware/router-auth'
import objectToFormdata from './plugins/object-ti-formdata'
import { ValidationProvider, ValidationObserver } from "vee-validate";


Vue.component("ValidationProvider", ValidationProvider);
Vue.component("ValidationObserver", ValidationObserver);
Vue.component('default-layout', DefaultLayout)
Vue.component('auth-layout', AuthLayout)
Vue.use(VueAxios, axios);
Vue.use(Vuex);
Vue.use(VueRouter);
Vue.use(index);
Vue.use(middleware)
Vue.config.productionTip = false;
Vue.use(Api, store, router);
export default {
  components: {
    vueSelect,
    DatePicker,
    Swiper,
    SwiperSlide,
  },
};

new Vue({
  el: "#app",
  store: store,
  router: router,
  render: (h) => h(App),
}).$mount("#app");
