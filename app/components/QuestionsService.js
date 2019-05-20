import Question from "../models/Questions.js";


//PRIVATE
let _api = new axios.create({
  baseURL: 'jservice.io/api/categories'
})
let _question = new Question()
let _state = {
  question: []
}
let _subscribers = {
  question: []
}

function setState(propName, data) {
  _state[propName] = data
  _subscribers[propName].forEach(fn => fn());
}

//PUBLIC
export default class QuestionService {
  constructor() { }
  addSubscribers(propName, fn) {
    _subscribers[propName].push(fn)
  }
  get Questions() {
    return _state.question.map(q => new Question(q))
  }
  getApiQuestions() {
    _api.get('questions')
      .then(response => {
        let data = response.data.map(rawData => new Question(rawData))
        setState('questions', data)
      })
      .catch(err => {
        console.error(err)
      })
  }
}