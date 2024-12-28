import { createApp } from "vue";
import "bootstrap/dist/css/bootstrap.css";
import SimpleTypeahead from "vue3-simple-typeahead";
import "vue3-simple-typeahead/dist/vue3-simple-typeahead.css";
import ElementPlus from "element-plus";
import "element-plus/dist/index.css";
import "./style.css";
import * as ElementPlusIconsVue from "@element-plus/icons-vue";
import { createHead } from 'unhead';
import router from "./router/index.ts";
import App from "./App.vue";

let app = createApp(App);
createHead();

for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component);
}

app.use(SimpleTypeahead);
app.use(ElementPlus);
app.use(router);
app.mount("#app");
