import DataBase from "./DataBase.js";
import EventManager from "./EventManager.js";

class Main {
  constructor() {
    this.dataBase = new DataBase();
    this.eventManager = new EventManager();
    this.btnDBRequest = document.getElementById("btnDBRequest");
    this.displayData = document.getElementById("dBData");
    this.btnCreateAccount = document.getElementById("createAccount");
    this.email = document.getElementById("email");
    this.btnSignIn = document.getElementById("signIn");
  }
  RegisterServiceWorker() {
    if ("serviceWorker" in navigator) {
      navigator.serviceWorker.register("./js/ServiceWorker.js").then((reg) => {
        console.log("Registration succeeded. Scope is " + reg.scope);
      });
    }
  }
  async DisplayQuestion(id) {
    const DBData = await this.dataBase.GetARowFrow("quizz", id);

    if (DBData !== null) {
      DBData.map((data) => {
        this.displayData.innerHTML = data.questions;
      });
    }
  }
  async CreateAccount() {
    this.dataBase.SignUpUser(this.email);

    const {
      data: { user },
    } = await this.dataBase.supabase.auth.getUser();

    console.log(user);
  }

  async SignInUser() {
    this.dataBase.SignInUser(this.email);

    const {
      data: { user },
    } = await this.dataBase.supabase.auth.getUser();

    console.log("HEJJJJJ");

    console.log(user);
  }
  Main() {
    const clickEvent = "click";
    this.RegisterServiceWorker();

    this.eventManager.EventListener(this.btnDBRequest, clickEvent, () =>
      this.DisplayQuestion(1),
    );

    this.eventManager.EventListener(
      this.btnCreateAccount,
      clickEvent,
      this.CreateAccount.bind(this),
    );

    this.eventManager.EventListener(
      this.btnSignIn,
      clickEvent,
      this.SignInUser.bind(this),
    );
  }
}

const main = new Main();
main.Main();
