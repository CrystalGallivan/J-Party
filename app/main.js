import QuestionController from "./components/QuestionsController.js";


class App {
  constructor() {
    this.contorllers = {
      quesController: new QuestionController()

    }
  }
}


window['app'] = new App();