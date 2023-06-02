import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import "primevue/resources/primevue.min.css";

import Keycloak from "keycloak-js";
import type { KeycloakOnLoad } from "keycloak-js";

import PrimeVue from "primevue/config";

const initOptions = {
  // url: process.env.VUE_APP_KEYCLOAK_URL,
  url: "https://keycloak-admin-console",
  realm: "portal",
  clientId: "portal",
  onLoad: "login-required" as KeycloakOnLoad,
};

const keycloak = new Keycloak(initOptions);
keycloak
  .init({ onLoad: initOptions.onLoad })
  .then((auth: any) => {
    console.log("auth status", auth);
    if (!auth) {
      window.location.reload();
    } else {
      const app = createApp(App);
      app.provide("logout", logout);
      app.use(router).use(PrimeVue).mount("#app");
    }
  })
  .catch((error: any) => {
    console.log("ERROR: ", error);
  });

function logout() {
  keycloak.logout({ redirectUri: process.env.BASE_URL });
}
