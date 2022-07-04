import Vue from "vue";
import AppNavbar from "./AppNavbar";
import AppHeader from "./AppHeader";
import AppFooter from "./AppFooter";
import AppSelect from "./fields/AppSelect";
import AppInput from "./fields/AppInput";
import AppDatePicker from "./fields/AppDatePicker";
import AppRadioButton from "./fields/AppRadioButton";
import AppSwich from "./fields/AppSwich";
import AppMap from "./location/AppMap";
import AppTextarea from "./fields/AppTextarea";
import AppAddPhoto from "./fields/AppAddPhoto";
import AppSelectTime from "./fields/AppSelectTime";

Vue.component("AppNavbar", AppNavbar);
Vue.component("AppHeader", AppHeader);
Vue.component("AppFooter", AppFooter);
Vue.component("AppSelect", AppSelect);
Vue.component("AppDatePicker", AppDatePicker);
Vue.component("AppInput", AppInput);
Vue.component("AppRadioButton", AppRadioButton);
Vue.component("AppSwich", AppSwich);
Vue.component("AppMap", AppMap);
Vue.component("AppTextarea", AppTextarea);
Vue.component("AppAddPhoto", AppAddPhoto);
Vue.component("AppSelectTime", AppSelectTime );

export default {
  components: {
    AppNavbar,
    AppHeader,
    AppFooter,
    AppSelect,
    AppInput,
    AppDatePicker,
    AppRadioButton,
    AppSwich,
    AppTextarea,
    AppMap
    ,AppAddPhoto,
    AppSelectTime 
  },
};
