export default class GameHandeler {
  constructor() {}
  async CreateGame(dataBase) {
    const categori = ["geografi"];
    const amountsOfCategories = categori.length;
    const minCeiled = Math.ceil(0);
    const maxFloored = Math.floor(amountsOfCategories);
    const randomQuestion = Math.floor(
      Math.random() * (maxFloored - minCeiled) + minCeiled,
    );
    let questionsAnswerd = 0;
    let placedAnswers = [0, 1, 2, 3];
    let answer;

    const data = await dataBase.GetQuestion(categori[randomQuestion]);
    console.log(data);
    const json = JSON.parse(sessionStorage.getItem("question"));
    

    const template = document.getElementById("answer-form");

    // Clone it (this is where the magic happens!)
    const questionHtml = template.content.cloneNode(true).firstElementChild;

    // Update the content
    const question = questionHtml.querySelector("#question");
    const answers = [
      questionHtml.querySelector("#btn-1"),
      questionHtml.querySelector("#btn-2"),
      questionHtml.querySelector("#btn-3"),
      questionHtml.querySelector("#btn-4"),
    ];

    question.textContent = json[questionsAnswerd].question;
    for (let i = 0; i < 4; i++) {
      answer = Math.floor(
        Math.random() * (placedAnswers.length - minCeiled) + minCeiled,
      );
      placedAnswers.splice(answer, 1);
      answers[i].textContent = json[questionsAnswerd]["answer" + (i + 1)];
    }

    console.log(questionHtml, json);

    return questionHtml;
  }
}
