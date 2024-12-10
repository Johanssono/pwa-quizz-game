import DataBase from "./DataBase.js";
import GameHandeler from "./GameHandeler.js";

class Main {
  constructor() {
    this.dataBase = new DataBase();
    this.gameHandeler = new GameHandeler();
    this.gameContainer = document.getElementById("container");
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

    let url = window.location.href;
    let ending = url.substring(url.lastIndexOf("/"));

    if (ending === "game.html") {
    }
    this.gameContainer.appendChild(this.gameHandeler.CreateGame(this.dataBase));
  }
}

const main = new Main();
main.Main();
