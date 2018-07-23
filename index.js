const questions = [
  {questionText: "Lightning never strikes in the same place twice", answer: false},
  {questionText: "Humans can distinguish between over one trillion different smells", answer: true},
  {questionText: "Goldfish only have a memory of about three seconds", answer: false}
]

let question;
let start = document.querySelector('.waves-effect')
let questionContainer = document.getElementsByClassName('question-container')[0]
// let time = 5000

const askQuestionThen = (time) => {
  question = questions[0]
  appendQuestion(question)
   return new Promise((resolve, reject) => {
     resolve(setTimeout(function(){
        question
      }, time ))
   })
}
const appendQuestion = (question) => {
  questionContainer.innerHTML = question.questionText
}

const removeQuestion = () => {
  return new Promise((resolve, reject) => {
    questionContainer.innerHTML = ""
    toggleTrueAndFalseButtons()
  })
}

const askQuestionThenRemoveQuestion = (time) => {
  return askQuestionThen(time).then(removeQuestion)
}


const trueAndFalseButtons = () => {
  return [document.querySelector('.green'), document.querySelector('.red')]
}

const toggleTrueAndFalseButtons = () => {
  buttons = trueAndFalseButtons()
  for (let c of buttons[0].classList){
    if (c === 'hide') {
      buttons[0].classList.remove('hide')
      buttons[1].classList.remove('hide')
      return
    }
  }
  buttons[0].classList.add('hide')
  buttons[1].classList.add('hide')
}

const displayQuestionOnClick = (time) => {
  start.onclick = askQuestionThenRemoveQuestion
}
