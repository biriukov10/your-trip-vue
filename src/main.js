import Vue from 'vue'
import App from './App.vue'
import VueRouter from "vue-router"
import router from './routes'
// import * as VueGoogleMaps from "vue2-google-maps";

Vue.use(VueRouter)


// Vue.use(VueGoogleMaps, {
//   load: {
//     key: "AIzaSyBVb1d2cwFEtrX7-0MMZO6NnZkO2EiqeTg",
//     libraries: "places" // necessary for places input
//   }
// });


new Vue({
  el: '#app',
  render: h => h(App),
  router
})
