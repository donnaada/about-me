function askQuestion(question, answer) {
  let response = prompt(question).toLowerCase;
  if (parseInt(response)){
    response = parseInt(response);
  }

  if (response === answer) {
    return true;
  } else {
    return false;
  }
}

let question = ['question1', 'question2', 'question3'];
let answer = ['answer1', 'answer2', 'answer3'];

for (let i = 0; i < question.length; i++) {
  let isCorrect = askQuestion(question[i], answer[i]);

  if (isCorrect) {
    console.log('Correct!');
  } else {
    console.log('Wrong!');
  }
}
