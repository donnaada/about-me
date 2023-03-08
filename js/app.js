'use strict';

let visitorName = prompt('Hello, what is your name?');
if (visitorName == '' || visitorName === null){
    visitorName = "Visitor";
}

let choice = confirm(`Hello ${visitorName}! Welcome to my website about me! Its so nice to have you here. Before we begin, would you like to play a guessing game?`)


if (!choice){

alert('No problem, enjoy the website :) ');

} else {

let guessOrigin = prompt('Question 1/5: I am from Saipan, have you ever heard of it or do you know where that is? Enter Y or N');

if (guessOrigin.toLowerCase() === "y" || guessOrigin.toLowerCase() === "yes"){
    alert(`Answer: ${guessOrigin}. Thats awesome! I don\'t always meet people that know where it is.`)
} else if (guessOrigin.toLowerCase() === "n" || guessOrigin.toLowerCase() === "no"){
    alert(`Answer: ${guessOrigin}. It's okay. There is a link on my page to Google Maps to show you where it is :) `);
} else {
    alert(`${guessOrigin} was not one of the choices. On to the next question.`)
}

let isWorking = prompt('Question 2/5: Am I Employed Full Time and while attending this coding bootcamp? Y or N?');

if (isWorking.toLowerCase() === "y" || isWorking.toLowerCase() === "yes"){
    alert(`Answer: ${isWorking}. Yes, I am working full time!`)
} else if (isWorking.toLowerCase() === "n" || isWorking.toLowerCase() === "no"){
    alert(`Answer: ${isWorking}. No, I am employed Full Time!`);
} else {
    alert(`${isWorking} was not one of the choices. On to the next question.`)
}
let enjoysBeach = prompt('Question 3/5: I live on an island where its summer year round, is my favorite outdoor activity swimming or going to the beach? Y or N?');

if (enjoysBeach.toLowerCase() === "y" || enjoysBeach.toLowerCase() === "yes"){
    alert(`Answer: ${enjoysBeach}. Actually, I prefer snowboarding`)
} else if (enjoysBeach.toLowerCase() === "n" || enjoysBeach.toLowerCase() === "no"){
    alert(`Answer: ${enjoysBeach}. You guessed right! I don't really enjoy swimming or going to the beach.`);
} else {
    alert(`${enjoysBeach} was not one of the choices. On to the next question.`)
}

let enjoysHiking = prompt('Question 4/5: Do I enjoy Hiking? Y or N?');

if (enjoysHiking.toLowerCase() === "y" || enjoysHiking.toLowerCase() === "yes"){
    alert(`Answer: ${enjoysHiking}. I do, as a matter of fact, enjoy hiking :) `)
} else if (enjoysHiking.toLowerCase() === "n" || enjoysHiking.toLowerCase() === "no"){
    alert(`Answer: ${enjoysHiking}. Actually, I don't mind hiking at all.`);
} else {
    alert(`${enjoysHiking} was not one of the choices. On to the last question.`)
}

let remote = prompt('Question 5/5: Is one of my goals to work 100% Remote? Y or N?');

if (remote.toLowerCase() === "y" || remote.toLowerCase() === "yes"){
    alert(`Answer: ${remote}. That is 1000% correct!`)
} else if (remote.toLowerCase() === "n" || remote.toLowerCase() === "no"){
    alert(`Answer: ${remote}. The correct answer is yes. I am hoping that one day I would be able to find a job that allows me to be 100% remote.`);
} else {
    alert(`${remote} was not one of the choices. On to the website.`)
}

}

let placeholder = document.getElementById('customWelcome');
placeholder.innerHTML = `Welcome to my page, ${visitorName}! `