import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import "@/styles/main.scss";

import Keycloak from "keycloak-js";
import type { KeycloakOnLoad } from "keycloak-js";

console.log(process.env.VUE_APP_KEYCLOAK);
if (process.env.VUE_APP_KEYCLOAK) {
  const initOptions = {
    url: process.env.VUE_APP_KEYCLOAK_URL,
    realm: "realmNAME",
    clientId: "clientID",
    onLoad: "login-required" as KeycloakOnLoad,
  };
  const keycloak = new Keycloak(initOptions);
  const logout = () => {
    keycloak.logout({ redirectUri: process.env.BASE_URL });
  };
  keycloak
    .init({ onLoad: initOptions.onLoad })
    .then((auth: any) => {
      if (!auth) {
        window.location.reload();
      } else {
        const app = createApp(App);
        app.provide("logout", logout);
        app.use(router).mount("#app");
      }
    })
    .catch((error: any) => {
      console.log("ERROR: ", error);
    });
} else {
  const app = createApp(App);
  app.use(router);
  app.mount("#app");
}
