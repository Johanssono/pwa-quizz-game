export default class DataBase {
  async GetQuestion(category) {
    await fetch("https://eel-simple-highly.ngrok-free.app/api/question", {
      method: "POST",
      headers: {
        accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        category: category,
      }),
    })
      .then((response) => response.json())
      .then((json) => {
        sessionStorage.setItem("question", JSON.stringify(json));
      });
  }
}





/*
Will need a bearer token for all protected routes

For API/register, Needs a body that have name, email, password_conformation

Same for API loggin but no need for name

Question is a protected route

Create game is a protected route



*/