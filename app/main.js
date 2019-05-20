import QuestionController from "./components/QuestionsController.js";


class App {
  constructor() {
    this.contorllers = {
      quesController: new QuestionController()

    }
  }
} console.log('main page')


window['app'] = new App();