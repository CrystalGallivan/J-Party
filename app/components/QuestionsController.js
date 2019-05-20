import QuestionService from "./QuestionsService.js";



//PRIVATE
let _quesService = new QuestionService()

function _drawQuestions() {
  let questions = _quesService.Questions
  let template = ``
  for (let i = 0; i < questions.length; i++) {
    let question = questions[i];
    template += question.questionTemplate()

  }
  // make a question location
  document.getElementById('question-location').innerHTML = template
}
//PUBLIC
export default class QuestionController {
  constructor() {
    //register subscribers
    _quesService.addSubscribers('questions', _drawQuestions)
    //fetch data
    _quesService.getApiQuestions();
  }
}