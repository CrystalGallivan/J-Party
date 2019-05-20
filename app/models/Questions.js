

export default class Question {
  constructor(data) {
    console.log('questions page')
    this.value = data.value
    this.answer = data.answer
    this.question = data.question

  }
  questionTemplate() {
    return ` <div class="col" ><h1 id="Value"><h1>Value:</h1>
     ${this.value}</h1></div>
    <div class="card__face card__face--front" ><h4><b>Question: ${this.question}?</b></h4></div>
   <div class="card__face card__face--back" ><h4>Answer: ${this.answer}</h4></div>`

  }

}
