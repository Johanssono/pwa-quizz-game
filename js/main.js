import DataBase from "./DataBase.js";
import GameHandeler from "./GameHandeler.js";
import EventManager from "./EventManager.js";

/*
document.addEventListener("onclick", function () {
  let audioElement = document.getElementById("audio")
  audioElement.play()
})

document.querySelector("#audio").autoplay = true;




*/


function setCookie(c_name, value, exdays) {
  var exdate = new Date();
  exdate.setDate(exdate.getDate() + exdays);
  var c_value = escape(value) + ((exdays == null) ? "" : "; expires=" + exdate.toUTCString());
  document.cookie = c_name + "=" + c_value;
}

function getCookie(c_name) {
  var i, x, y, ARRcookies = document.cookie.split(";");
  for (i = 0; i < ARRcookies.length; i++) {
    x = ARRcookies[i].substr(0, ARRcookies[i].indexOf("="));
    y = ARRcookies[i].substr(ARRcookies[i].indexOf("=") + 1);
    x = x.replace(/^\s+|\s+$/g, "");
    if (x == c_name) {
      return unescape(y);
    }
  }
}

var song = document.getElementsByTagName('audio')[0];
var played = false;
var tillPlayed = getCookie('timePlayed');
function update() {
  if (!played) {
    if (tillPlayed) {
      song.currentTime = tillPlayed;
      song.play();
      played = true;
    }
    else {
      song.play();
      played = true;
    }
  }

  else {
    setCookie('timePlayed', song.currentTime);
  }
}
setInterval(update, 1000);


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
