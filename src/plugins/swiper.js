import Vue from "vue";
import { Navigation, Pagination } from "swiper";
import { SwiperCore, Swiper, SwiperSlide } from "swiper-vue2";
import "swiper/swiper-bundle.css";
SwiperCore.use([Navigation, Pagination]);
Vue.component("SwiperSlide", SwiperSlide);
Vue.component("Swiper", Swiper);
