export default class GameHandeler {
  constructor() {
    this.gameContainer = document.getElementById("container");
    this.questionsAnswerd = 0;
    this.points = 0;
  }

  ShuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      const temp = array[i];
      array[i] = array[j];
      array[j] = temp;
    }
  }

  async CreateGameScreen() {
    let answersLeftToPlace = [0, 1, 2, 3];
    this.ShuffleArray(answersLeftToPlace);

    const json = JSON.parse(sessionStorage.getItem("question"));
    this.questionsAnswerd = parseInt(
      sessionStorage.getItem("questionsAnswerd") || 0,
    );

   
    let questionHtml = this.gameContainer.querySelector(".question-vh");
    if (!questionHtml) {
      const template = document.getElementById("answer-form");
      questionHtml = template.content.cloneNode(true).firstElementChild;
      this.gameContainer.appendChild(questionHtml);
    }

    
    const question = questionHtml.querySelector("#question");
    const answersBtn = [
      questionHtml.querySelector("#btn-1"),
      questionHtml.querySelector("#btn-2"),
      questionHtml.querySelector("#btn-3"),
      questionHtml.querySelector("#btn-4"),
    ];

    const answer = [
      json.questions[this.questionsAnswerd].answer1,
      json.questions[this.questionsAnswerd].answer2,
      json.questions[this.questionsAnswerd].answer3,
      json.questions[this.questionsAnswerd].answer4,
    ];


    question.textContent = json.questions[this.questionsAnswerd].question;

    for (let i = 0; i < 4; i++) {
      answersBtn[i].textContent = answer[answersLeftToPlace[i]];
    }
  }

  CreatePointsScreen() {
    const gameScreenParentNode = document.getElementById("container");
    const gameScreenNode = gameScreenParentNode.querySelector(".question-vh");
    const deletedChildNode = gameScreenParentNode.removeChild(gameScreenNode);

    const template = document.getElementById("points");

    // Clone it (this is where the magic happens!)
    const pointsHtml = template.content.cloneNode(true).firstElementChild;

    // Update the content
    const heading = pointsHtml.querySelector("#points-header");
    const pointsSetter = pointsHtml.querySelector("#set-points");

    pointsSetter.textContent = sessionStorage.getItem("points");

    sessionStorage.setItem("questionsAnswerd", 0);
    sessionStorage.setItem("points", 0);

    this.gameContainer.appendChild(pointsHtml);
  }

  ButtonAnswer(answer) {
    const json = JSON.parse(sessionStorage.getItem("question"));
    this.questionsAnswerd = parseInt(
      sessionStorage.getItem("questionsAnswerd") || 0,
    );

    if (json.questions[this.questionsAnswerd].answer1 == answer) {
      this.points = sessionStorage.getItem("points");
      this.points++;
      sessionStorage.setItem("points", this.points);
    }

    // Increment questionsAnswerd before checking
    this.questionsAnswerd++;
    sessionStorage.setItem("questionsAnswerd", this.questionsAnswerd);

    // Check if we've reached the total number of questions
    if (this.questionsAnswerd < json.questions.length) {
      this.CreateGameScreen();
    } else {
      this.CreatePointsScreen();
    }
  }
}
