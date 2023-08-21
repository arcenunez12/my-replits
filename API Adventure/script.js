/* 
	Tell us about your project below!👇

*/

// function randomNumber(num) {
//   let randNum = Math.floor((Math.random() * num) - 1);
//   console.log(randNum);
//   return randNum;
// }

function createOptionsArray(incorrectArray, correctAnswer) {
    let options = [];
    options.push(correctAnswer);
    for(let i = 0; i < incorrectArray.length; i++) {
      //console.log(incorrectArray[i]);
      options.push(incorrectArray[i]);
    }
    return options;
  }
  
  
   function getAndDisplayQuestions() {
     console.log("Function works");
     // Use the trivia api
     axios.get("https://opentdb.com/api.php?amount=15&category=11&difficulty=easy&type=multiple").then(response => {
       //console.log(response.data);
       console.log(response.data.results);
       let question = response.data.results[0].question;
       //console.log(question);
       let incorrectAnswers = response.data.results[0].incorrect_answers;
       let correctAnswer = response.data.results[0].correct_answer;
       document.getElementById("trivia-question").innerText = question;
       // Create the array of all the options for the question
       let options = createOptionsArray(incorrectAnswers, correctAnswer);
       console.log(options);
       // Grab the ordered list, ol, in our HTML
       let triviaChoices = document.getElementById("trivia-choices");
       triviaChoices.innerText = "";
       for(let i = 0; i < options.length; i++) {
         // As we go through each object, make a listed item, li, element
         let listItem = document.createElement("li");
         // And then take that li element and in the text of that li element,
         // add this definition property of each object
         listItem.innerText = options[i];
         // And then finally, javascript, please attach that li element to 
         // the ordered list, ol, on the page
         triviaChoices.appendChild(listItem);
       }
     })
   }