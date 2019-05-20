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
    console.log('controller page')
    //register subscribers
    _quesService.addSubscribers('question', _drawQuestions)
    //fetch data
    _quesService.getApiQuestions();
  }
  scoreCount() {
    _quesService.scoreCount()
  }
}