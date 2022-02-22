import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap"
import axios from 'axios'
import VueAxios from 'vue-axios'
import "bootstrap-icons/font/bootstrap-icons.css";
import 'cropperjs/dist/cropper.css';
import $ from 'jquery'
import 'select2';                       // globally assign select2 fn to $ element  
import 'select2/dist/css/select2.css';  // optional if you have css loader

createApp(App).use(router).use(VueAxios, axios).use($).mount('#app')
