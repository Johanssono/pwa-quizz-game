import DataBase from "./DataBase.js";

class Main {
  constructor() {}
  RegisterServiceWorker() {
    if ("serviceWorker" in navigator) {
      navigator.serviceWorker.register("./js/ServiceWorker.js").then((reg) => {
        console.log("Registration succeeded. Scope is " + reg.scope);
      });
    }
  }
}





const main = new Main();
main.RegisterServiceWorker();
const dataBase = new DataBase();
dataBase.SupabaseApi();
console.log("loading...");

