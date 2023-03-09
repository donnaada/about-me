'use strict';

let score = 0;

let visitorName = prompt('Hello, what is your name?');
if (visitorName === '' || visitorName === null){
  visitorName = 'Visitor';
}

let choice = confirm(`Hello ${visitorName}! Welcome to my website about me! Its so nice to have you here. Before we begin, would you like to play a guessing game?`);


if (!choice){

  console.log(choice);

} else {

  let guessOrigin = prompt('Question 1/5: I am from Saipan, have you ever heard of it or do you know where that is? Enter Y or N');

  if (guessOrigin === null){
    guessOrigin = 'That';
  } else {

    console.log(guessOrigin);

    if (guessOrigin.toLowerCase() === 'y' || guessOrigin.toLowerCase() === 'yes'){
      alert(`Answer: ${guessOrigin}. Thats awesome! I don't always meet people that know where it is.`);
      score = score + 1;
    } else if (guessOrigin.toLowerCase() === 'n' || guessOrigin.toLowerCase() === 'no'){
      alert(`Answer: ${guessOrigin}. It's okay. There is a link on my page to Google Maps to show you where it is :) `);
    } else {
      alert(`${guessOrigin} was not one of the choices. On to the next question.`);
    }


  }

  alert(score);

  let isWorking = prompt('Question 2/5: Am I Employed Full Time and while attending this coding bootcamp? Y or N?');

  if (isWorking === null){
    isWorking = 'That';
  } else {

    if (isWorking.toLowerCase() === 'y' || isWorking.toLowerCase() === 'yes'){
      alert(`Answer: ${isWorking}. Yes, I am working full time!`);
      score = score + 1;
    } else if (isWorking.toLowerCase() === 'n' || isWorking.toLowerCase() === 'no'){
      alert(`Answer: ${isWorking}. No, I am employed Full Time!`);
    } else {
      alert(`${isWorking} was not one of the choices. On to the next question.`);
    }
  }
  alert(score);

  let enjoysBeach = prompt('Question 3/5: I live on an island where its summer year round, is my favorite outdoor activity swimming or going to the beach? Y or N?');

  if (enjoysBeach === null){
    enjoysBeach = 'That';
  } else{

    if (enjoysBeach.toLowerCase() === 'y' || enjoysBeach.toLowerCase() === 'yes'){
      alert(`Answer: ${enjoysBeach}. Actually, I prefer snowboarding`);
      score = score + 1;

    } else if (enjoysBeach.toLowerCase() === 'n' || enjoysBeach.toLowerCase() === 'no'){
      alert(`Answer: ${enjoysBeach}. You guessed right! I don't really enjoy swimming or going to the beach.`);
    } else {
      alert(`${enjoysBeach} was not one of the choices. On to the next question.`);
    }
  }
  alert(score);

  let enjoysHiking = prompt('Question 4/5: Do I enjoy Hiking? Y or N?');

  if (enjoysHiking === null){
    enjoysHiking = 'That';
  } else {

    if (enjoysHiking.toLowerCase() === 'y' || enjoysHiking.toLowerCase() === 'yes'){
      alert(`Answer: ${enjoysHiking}. I do, as a matter of fact, enjoy hiking :) `);
      score = score + 1;

    } else if (enjoysHiking.toLowerCase() === 'n' || enjoysHiking.toLowerCase() === 'no'){
      alert(`Answer: ${enjoysHiking}. Actually, I don't mind hiking at all.`);
    } else {
      alert(`${enjoysHiking} was not one of the choices. On to the last question.`);
    }

  }
  alert(score);

  let remote = prompt('Question 5/5: Is one of my goals to work 100% Remote? Y or N?');

  if (remote === null){
    remote = 'That';
  } else {

    if (remote.toLowerCase() === 'y' || remote.toLowerCase() === 'yes'){
      alert(`Answer: ${remote}. That is 1000% correct!`);
      score = score + 1;

    } else if (remote.toLowerCase() === 'n' || remote.toLowerCase() === 'no'){
      alert(`Answer: ${remote}. The correct answer is yes. I am hoping that one day I would be able to find a job that allows me to be 100% remote.`);
    } else {
      alert(`${remote} was not one of the choices. On to the website.`);
    }
  }

  alert('Thank you for taking the time to answer the questions! ');

}

alert(score);

alert('Just Kidding, we have a few more questions :) ');


  // gets guessInput using prompt; converts to integer and stores value in rating and declares star variable with blank string.
  let attempt = 1;
  let maxAttempts = 4;
  let attemptLeft = 4;

  let guessInput = prompt(`Guess how many sister-in-laws I have. (Pick a number from 1-10). Attempts Left: ${attemptLeft}`);
  let guess = parseInt(guessInput);
  let sil = 6;


// while (guess != sil && attempt < maxAttempts){

    while (guessInput === null || isNaN(guess)){
        // guess = 0;
        alert('that was an an invalid response.')
        guessInput = prompt(`Guess how many sister-in-laws I have. (Pick a number from 1-10). ${attemptLeft} tries remaining.`);
        guess = parseInt(guessInput);
    } 

    while (guess != sil && attempt < maxAttempts){

            //While loop to continiously prompt user to enter number until it is between 1- 10
    while (guess < 1 || guess > 10){
        alert(`${guess} is not between 1 and 10. Please try again!`);
        guess = parseInt(prompt("You have "+ attemptLeft + " tries to guess how many sister-in-laws I have. (Pick a number from 1-10)."));
    }


        attemptLeft--;

         if (guess < sil){
            alert(`${guess} is wrong. Try a higher number.`)
        } 

        if (guess > sil) {
            alert(`${guess} is wrong. Try a lower number.`)
        }

        guess = parseInt(prompt("You have "+ attemptLeft + " tries to guess how many sister-in-laws I have. (Pick a number from 1-10)."));

        attempt ++;

    }

    if (guess === sil){
        alert(`Thank you for playing! You didn't guess it in the it in the ${attempt} tries. I have ${sil} sister-in-laws`);
    }

    if (guess !== sil){
        alert(`Thank you for playing! You didn't guess it in the it in the ${attempt} tries. I have ${sil} sister-in-laws`);
    }






alert(`I hope you enjoy the website ${visitorName} :) `);


let placeholder = document.getElementById('customWelcome');
placeholder.innerHTML = `Hafa Adai and Tirow ${visitorName}! <br> Welcome to my site! `;
