import Question from "../models/Questions.js";


//PRIVATE
let _api = new axios.create({
  baseURL: 'http://jservice.io/api/random'
})

let _state = {
  question: []
}
let _subscribers = {
  question: []
}
let _quesValue = new Question()

function setState(propName, data) {
  _state[propName] = data
  _subscribers[propName].forEach(fn => fn());
}

//PUBLIC
export default class QuestionService {
  constructor() { console.log('service page') }

  addSubscribers(propName, fn) {
    _subscribers[propName].push(fn)
  }
  get Questions() {
    return _state.question.map(q => new Question(q))
  }
  getApiQuestions() {
    _api.get('')
      .then(response => {
        console.log({ response })
        let data = response.data.map(rawData => new Question(rawData))
        setState('question', data)
      })
      .catch(err => {
        console.error(err)
      })
    function scoreCount(event) {
      debugger
      console.log({})
      event.preventDefault()
      //for every click on right value is add to score count & question updates

      let right = event.target
      let count = _quesValue.value += right
      //for every click on wrong question updates
      let left = event.target
    }
    let card = document.querySelector('.card');
    card.addEventListener('click', function () {
      card.classList.toggle('is-flipped');
    });
  }
}