

export default class Question {
  constructor(data) {
    this.food = data.food
    this.rhymeTime = data.rhymeTime
    this.americanHistory = data.americanHistory
    this.fashion = data.fashion
    this.literature = data.literature
    this.mythology = data.mythology
    this.popMusic = data.popMusic
    this.people = data.people
  }
  questionTemplate() {
    return ` <div class="col card" id="question-location">${this.food}</div>
    <div class="col card" id="question-location">${this.rhymeTime}</div>
    <div class="col card" id="question-location">${this.americanHistory}</div>
    <div class="col card" id="question-location">${this.fashion}</div>
    <div class="col card" id="question-location">${this.literature}</div>
    <div class="col card" id="question-location">${this.mythology}</div>
    <div class="col card" id="question-location">${this.popMusic}</div>
    <div class="col card" id="question-location">${this.people}</div>`
  }

}
