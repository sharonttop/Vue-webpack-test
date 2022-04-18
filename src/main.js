// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from "vue"; // in Vue 2
// import * as Vue from 'vue' // in Vue 3
import App from "./App";
import router from "./router";
import axios from "axios"; //主要AJAX套件
import VueAxios from "vue-axios"; //將他轉為Vue的套件

Vue.use(VueAxios, axios); //in Vue 2，轉為Vue的套件還不能直接執行它，要透過Vue.use
//const app = Vue.createApp(...)// in Vue 3
// app.use(VueAxios, axios)

Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: "#app",
  components: { App },
  template: "<App/>",
  router
});
