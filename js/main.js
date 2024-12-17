import DataBase from "./DataBase.js";
import GameHandeler from "./GameHandeler.js";
import EventManager from "./EventManager.js";

class Main {
  constructor() {
    this.dataBase = new DataBase();
    this.gameHandeler = new GameHandeler();
    this.eventManager = new EventManager();
    this.container = document.getElementById("container");
    this.answersBtns = [
    ];
  }
  RegisterServiceWorker() {
    if ("serviceWorker" in navigator) {
      navigator.serviceWorker.register("./js/ServiceWorker.js").then((reg) => {
        console.log("Registration succeeded. Scope is " + reg.scope);
      });
    }
  }

  async Main() {
    const clickEvent = "click";
    this.RegisterServiceWorker();

    let url = window.location.href;
    let ending = url.substring(url.lastIndexOf("/"));

    const categori = ["geografi", "Historia", "Filmer", "Musik", "Allmänbildning"];
    const randomQuestion = Math.floor(Math.random() * categori.length);

    if (ending === "/game.html" || ending === "/game.html?") {
     await this.dataBase.GetQuestion(categori[randomQuestion]);

      this.gameHandeler.CreateGameScreen();

      const container = document.getElementById("container");
      const answersBtns = [
        this.container.querySelector("#btn-1"),
        this.container.querySelector("#btn-2"),
        this.container.querySelector("#btn-3"),
        this.container.querySelector("#btn-4"),
      ];

      answersBtns[0].addEventListener(clickEvent, (event) => {
        this.gameHandeler.ButtonAnswer(answersBtns[0].outerText);
      });
      answersBtns[1].addEventListener(clickEvent, (event) => {
        this.gameHandeler.ButtonAnswer(answersBtns[1].outerText);
      });
      answersBtns[2].addEventListener(clickEvent, (event) => {
        this.gameHandeler.ButtonAnswer(answersBtns[2].outerText);
      });
      answersBtns[3].addEventListener(clickEvent, (event) => {
        this.gameHandeler.ButtonAnswer(answersBtns[3].outerText);
      });

      
    }

    

    

    
  }
}

const main = new Main();
main.Main();
