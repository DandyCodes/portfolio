import { createApp } from "vue"
import { createPinia } from "pinia"
import "@fortawesome/fontawesome-free/css/all.css"
import Oruga from "@oruga-ui/oruga-next"
import { bulmaConfig } from "@oruga-ui/theme-bulma"
import "./assets/styles.scss"

import App from "./App.vue"
import router from "./router"

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(Oruga, bulmaConfig)

app.mount("#app")
