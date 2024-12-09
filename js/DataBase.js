export default class DataBase{
  async GetQuestion(category){
    const response = await fetch("https://eel-simple-highly.ngrok-free.app/api/question", {
      method: "POST",
      headers: {
        "accept": "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        category: category
      })
    });

    const json = response.json()
    sessionStorage.setItem("question", json);
  }
}