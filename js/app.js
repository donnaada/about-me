'use strict';

let score = 0;

let visitorName = '';

let questions =['Question 1/5: I am from Saipan, have you ever heard of it or do you know where that is? Enter Y or N', 'Question 2/5: Am I Employed Full Time and while attending this coding bootcamp? Y or N?', 'Question 3/5: I live on an island where its summer year round, is my favorite outdoor activity swimming or going to the beach? Y or N?', 'Question 4/5: Do I enjoy Hiking? Y or N?', 'Question 5/5: Is one of my goals to work 100% Remote? Y or N?'];
let answers =['y', 'y', 'n', 'y', 'y'];
let correctalerts =['Thats awesome! I don\'t always meet people that know where it is.', 'Yes, I am working full time!', 'You guessed right! I don\'t really enjoy swimming or going to the beach.', 'I do, as a matter of fact, enjoy hiking :)', 'That is 1000% correct!'];
let incorrectalerts =['It\'s okay. There is a link on my page to Google Maps to show you where it is :)', 'No, I am employed Full Time!', 'Actually, I prefer snowboarding.', 'Actually, I don\'t mind hiking at all.', 'The correct answer is yes. I am hoping that one day I would be able to find a job that allows me to be 100% remote.'];


function getVisitor(){
  visitorName = prompt('Hello, what is your name?');
  if (visitorName === '' || visitorName === null){
    visitorName = 'Visitor';
  }
  return visitorName;
}

function playGame(){
  let choice = confirm(`Hello ${visitorName}! Welcome to my website about me! Its so nice to have you here. Before we begin, would you like to play a guessing game?`);
  if (choice){
    checkAnswer();
    askQuestionCheckIn();
    guessInLaws();
    multipleChoiceGame();
    alert(`Thank you for playing!! You scored ${score}/7. I hope you enjoy the website ${visitorName} :) `);
  } else{
    alert(`No problem ${visitorName}. Please enjoy the site. If you change your mind, just refresh the page :) `);
  }
}

function askQuestion(questions, answers){
  let response = prompt(questions);

  if (response !== null){
    response = response.toLowerCase();
  }

  if (response === answers){
    return true;
  } else {
    return false;
  }

}

function checkAnswer(){
  for (let i = 0; i < questions.length; i++) {

    let correct=askQuestion(questions[i],answers[i]);
    if (correct){
      alert(correctalerts[i]);
      score = score + 1;
    } else {
      alert(incorrectalerts[i]);
    }
  }
}

function askQuestionCheckIn(){
  alert('Thank you for taking the time to answer all the questions! ');
  alert(`Just kidding, we have a couple more questions :)  Here is your current Score: ${score} / 7`);
}

function guessInLaws(){
  let attempt = 1;
  let maxAttempts = 4;
  let attemptLeft = 4;

  let guessInput = prompt(`Guess how many sister-in-laws I have. (Pick a number from 1-10). Attempts Left: ${attemptLeft}`,'0');
  let guess = parseInt(guessInput);
  let sil = 6;

  while (isNaN(guess)){
    alert('Please enter a valid response.');
    guessInput = prompt(`Guess how many sister-in-laws I have. (Pick a number from 1-10). ${attemptLeft} attempts remaining.`);
    guess = parseInt(guessInput);
  }

  while (guess !== sil && attempt < maxAttempts){
    while (guess < 1 || guess > 10){
      alert(`${guess} is not between 1 and 10. Please try again!`);
      guess = parseInt(prompt('You have '+ attemptLeft + ' tries to guess how many sister-in-laws I have. (Pick a number from 1-10).'));
    }

    attemptLeft--;

    if (guess < sil){
      alert(`${guess} is wrong. Try a higher number.`);
    }

    if (guess > sil) {
      alert(`${guess} is wrong. Try a lower number.`);
    }

    guess = parseInt(prompt('You have '+ attemptLeft + ' tries to guess how many sister-in-laws I have. (Pick a number from 1-10).'));
    attempt ++;
  }

  if (guess === sil){
    alert(`WOOHOO!!! You guessed it right! I do have ${sil} sister-in-laws and you got it in ${attempt} tries. `);
    score = score + 1;

  }

  if (guess !== sil){
    alert(`Unfortunately, you didn't guess it in the ${attempt} tries. I have ${sil} sister-in-laws. Score: ${score} / 7`);
  }
}

function multipleChoiceGame(){

  let isCorrect = false;

  let maxAttempts = 6;
  let attempt = 1;
  let attemptLeft = 6;

  let question7 = `What are some of my favorite drinks? Your choices are black tea, smoothie, coffee, water, juice, boba tea. Score: ${score} / 7`;
  let correctAnswers = ['black tea', 'coffee', 'water'];

  while (attempt <= maxAttempts && isCorrect === false){

    let userGuess = prompt(question7);
    userGuess = userGuess.toLowerCase();

    for (let i = 0; i <= correctAnswers.length; i++){
      if (userGuess !== correctAnswers[i]){
        isCorrect = false;
      } else {
        score = score + 1;
        alert(`That's Correct!!  Score: ${score} / 7`);
        isCorrect = true;
        break;
      }
    }
    if (!isCorrect){
      attemptLeft--;
      alert(`Sorry, please try again. Attempts remaining: ${attemptLeft}.`);
    }
    attempt++;
    if (attempt > maxAttempts && isCorrect === false){
      alert(`Sorry, you ran out of attempts. The correct answers were ${correctAnswers}.`);
    }

  }
}

getVisitor();
playGame();


visitorName = visitorName.toLowerCase();

let placeholder = document.getElementById('customWelcome');
placeholder.innerHTML = `Hafa Adai and Tirow <span id="visitorName"> ${visitorName}! </span> <br> Welcome to my site!`;
