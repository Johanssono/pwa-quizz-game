import DataBase from "./DataBase.js";

class Main {
  constructor() {
    this.dataBase = new DataBase();
    this.btnDBRequest = document.getElementById("btnDBRequest");
    this.displayData = document.getElementById("dBData");
  }
  RegisterServiceWorker() {
    if ("serviceWorker" in navigator) {
      navigator.serviceWorker.register("./js/ServiceWorker.js").then((reg) => {
        console.log("Registration succeeded. Scope is " + reg.scope);
      });
    }
  }
  Main() {
    this.RegisterServiceWorker();

    this.btnDBRequest.addEventListener("click", async () => {
      const data = await this.dataBase.SupabaseApi();
      
      data.map(data => {
        this.displayData.innerHTML = data.question;
      });
    });
  }
}





const main = new Main();
main.Main();
