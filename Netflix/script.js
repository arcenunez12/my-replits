/* This is where you'll complete the Milestone. Open your README.md file and click 'Open Preview' for detailed instructions! */

let dramaShows = [
    "Ginny & Georgia",
    "Outlander",
    "Grey's Anatomy",
    "Ozark",
    "The Queen's Gambit"
  ];
  
  let fantasyShows = [
    "Supernatural",
    "The Sandman",
    "Wednesday",
    "The Witcher",
    "Avatar: The Last Airbender"
  ];
  
  let comedyShows = [
    "Arrested Development",
    "Dead to Me",
    "Seinfeld",
    "Emily in Paris",
    "The Good Place"
  ];
  
  function chooseRandomGenre() {
   // Deliverable 1: Your code here 👇
    
    // This function should RETURN a random genre that is either "drama", "fantasy", or "comedy".
    // You can use the provided getRandomNumber(min, max) function to randomly select one of the three possibilities.
    
    // Use getRandomNumber() function
    let randNum = getRandomNumber(1,3);
    console.log(randNum);
    if (randNum == 1) {
      //console.log("drama");
      return "drama";
    } else if (randNum == 2) {
      //console.log("fantasy");
      return "fantasy";
    } else if (randNum == 3) {
      //console.log("comedy");
      return "comedy";
    }
    
  }
  
  function displayRandomShow(genre) {
    // Deliverable 2: Your code here 👇
    
    // The parameter genre will be a string that is either "drama", "fantasy", "comedy", or "random". If the parameter is "random", you'll use the chooseRandomGenre() function from above to reassign the parameter to one of the three possibilities. Otherwise based on the genre parameter, you should display a random show from the corresponding array.
  
    if (genre == "drama") {
      let indexNum = getRandomNumber(0,dramaShows.length-1);
      let randShow = dramaShows[indexNum];
      //console.log(randShow);
      displayShow(randShow);
      
    } else if (genre == "fantasy") {
      let indexNum = getRandomNumber(0,fantasyShows.length-1);
      let randShow = fantasyShows[indexNum];
      //console.log(randShow);
      displayShow(randShow);
      
    } else if (genre == "comedy") {
      let indexNum = getRandomNumber(0,comedyShows.length-1);
      let randShow = comedyShows[indexNum];
      //console.log(randShow);
      displayShow(randShow);
      
    } else if (genre == "random") {
      let randGenre = chooseRandomGenre();
      displayRandomShow(randGenre);
      //let indexNum = getRandomNumber(1,dramaShows.length-1);
      //let randShow = dramaShows[indexNum];
      //console.log(randShow);
    }
  }
  
  