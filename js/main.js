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
      const DBData = await this.dataBase.GetARowFrow('quizz', 1);
      
      DBData.map(data => {
        this.displayData.innerHTML = data.questions;
      });
    });

  }
}





const main = new Main();
main.Main();
