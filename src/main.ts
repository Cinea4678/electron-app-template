import { createApp } from 'vue'
import './assets/base.css'
import ElementPlus from "element-plus";
import "element-plus/dist/index.css";
import App from "./App.vue";
import "./assets/style.css";

createApp(App)
    .use(ElementPlus)
    .mount("#app")
    .$nextTick(() => {
        // Remove Preload scripts loading
        postMessage({ payload: "removeLoading" }, "*");

        // Use contextBridge
        window.ipcRenderer.on("main-process-message", (_event, message) => {
            console.log(message);
        });
    });
