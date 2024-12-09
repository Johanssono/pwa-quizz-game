export default class GameHandeler {
  constructor() {}
  async CreateGame(dataBase) {
    const categori = ["geografi"];
    const amountsOfCategories = categori.length;
    const randomQuestion = Math.random() * amountsOfCategories;
    let questionsAnswerd = 0;
    let placedAnswers = [0, 1, 2, 3];
    let answer;

    await dataBase.GetQuestion(categori[randomQuestion]);
    const json = sessionStorage.getItem("question");


    const template = document.getElementById('answer-form');
  
    // Clone it (this is where the magic happens!)
    const questionHtml = template.content.cloneNode(true).firstElementChild;
  
    // Update the content
    const question = questionHtml.querySelector('#question');
    const answers = [questionHtml.querySelector('#btn-1'), questionHtml.querySelector('#btn-2'), questionHtml.querySelector('#btn-3'), questionHtml.querySelector('#btn-4')];

    
    question.textContent = json[questionsAnswerd].question;
    for (let i = 0; i < 4; i++){
      answer = Math.random() * placedAnswers.length;
      placedAnswers.splice(answer, 1);
      answer.textContent = json[questionsAnswerd]["answer" + (i + 1)];
    } 
    return questionHtml; 
  }
}
