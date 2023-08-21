function filterByCity(targetCity, listingCityArray) {
    /* This return statement here to show you what the UI looks like and will put every listing onto the page no matter what you search for. Remove the return statement before you start this function. */
    //return [...listingCityArray.keys()];
  
    // Array to keep track of indices
    let targetIndices = [];
  
    // Use a for loop to traverse the listingCityArray
    for(let i = 0; i < listingCityArray.length; i++) {
      // Grab the city name from the listingCityArray at index i.
      // Change to lower case.
      let cityName = listingCityArray[i].toLowerCase();
      // Change the targetCity to lower case.
      targetCity = targetCity.toLowerCase();
      // console.log(cityName + " " + targetCity);
      // Check if cityName and targetCity are equal
      if(cityName === targetCity) {
        // console.log(i);
        // Push index i to targetIndices if they match
        targetIndices.push(i);
      }
    }
  
    // console.log(targetIndices);
    // Return the array of targetIndices
    return targetIndices;
  
  
    
  }
  
  function filterByPrice(minPrice, maxPrice, listingPriceArray) {
    /* This return statement here to show you what the UI looks like and will put every listing onto the page no matter what you search for. Remove the return statement before you start this function. */
    // return [...listingPriceArray.keys()];
  
    // Array to keep track of indices
    let targetIndices = [];
  
    // Use a for loop to traverse listingPriceArray
    for(let i = 0; i < listingPriceArray.length; i++) {
      // Get the price at index i
      let price = listingPriceArray[i];
      //console.log(price);
      // Check if price is within range
      if((price >= minPrice) && (price <= maxPrice)) {
        //console.log(i);
        //console.log(i);
        //console.log(price);
        targetIndices.push(i);
      }
    }
  
    return targetIndices;
    
  }
  
  // LevelUp!
  function filterByTypes(targetTypes, listingTypeArray) {
    /* This return statement here to show you what the UI looks like and will put every listing onto the page no matter what you search for. Remove the return statement before you start this function. */
    //return [...listingTypeArray.keys()];
  
    // Array to keep track of indices
    let targetIndices = [];
  
    // Use for loop to traverse listingTypeArray
    for(let i = 0; i < listingTypeArray.length; i++) {
      // Get the listing type at index i
      let listingType = listingTypeArray[i];
      //console.log(i + " " + listingType);
      // For loop to traverse targetTypes array
      for(let k = 0; k < targetTypes.length; k++) {
        // Get the target type at index k
        let targetType = targetTypes[k];
        // Check if target type at index k matches listing type at index i
        if(targetType === listingType) {
          //console.log(i);
          // Add index i to targetIndices array
          targetIndices.push(i);
        }
      }
    }
    // console.log(targetIndices);
  
    return targetIndices;
    
  }