import DataBase from "./DataBase.js";

class Main {
  constructor() {
    this.dataBase = new DataBase();
  }
  RegisterServiceWorker() {
    if ("serviceWorker" in navigator) {
      navigator.serviceWorker.register("./js/ServiceWorker.js").then((reg) => {
        console.log("Registration succeeded. Scope is " + reg.scope);
      });
    }
  }
  
  Main() {
    const clickEvent = "click";
    this.RegisterServiceWorker();

    this.dataBase.GetQuestion("geografi");
  }
}

const main = new Main();
main.Main();
