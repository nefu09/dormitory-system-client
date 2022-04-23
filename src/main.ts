import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import ElementPlus from "element-plus";
import "element-plus/dist/index.css";
import * as ElIconModules from "@element-plus/icons-vue";
import Vue from "./App.vue";
import { ref } from "vue";
const app = createApp(App);
Object.keys(ElIconModules).forEach(function (key) {
    app.component(ElIconModules[key].name, ElIconModules[key])
});

app.use(router);
app.use(ElementPlus);
app.mount("#app");
