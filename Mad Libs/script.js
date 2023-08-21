/* Given the 'id' attribute of a form element, this will return the value entered by the user into that form element. */
function formValue(id) {
    // ??? - Level-Up
    // document is an object that represents the web page.
    // The var formElement is finding an element by id. 
    let formElement = document.getElementById(id);
    
    // ??? Level-Up
    // If the formElement is null, that means that id is not found
    // on the webpage. For example, if we look for the id cat-pic,
    // this would return `[cat-pic NOT FOUND]`
    // In the console we can test this out.
    if (formElement === null) {
      return `[${id} NOT FOUND]`;
    }
  
    let value = formElement.value;
  
      // ??? - Level-Up
    // For example, if one of the inputs in the form is not filled, then the
    // value of that formElement is "". This would then return the Placeholder
    // that is seen on screen. 
    // Example: The A Relative input is left blank so the value is "". When 
    // calling the formValue() function, it would return `[A Relative]`
    if (formElement.value.trim() === "") {
      return `[${formElement.placeholder}]`;
    }
  
    return document.getElementById(id).value;
  }
  
  /* Given the 'id' of an HTML element and a 'className', this will add that class name to the HTML element with the specified id. */
  function addClassToElement(id, className) {
    let element = document.getElementById(id);
    element.classList.add(className);
  }
  
  /* The code here will be executed each time the Generate button is clicked. */
  function generate() {
    // console.log("button clicked.");
  
    // Retrieve the form values
      // The senior engineer created this formValue() function. We use the id
      // that corresponds to the correct form value.
    let relative = formValue("relative");
    // console.log(relative);
    let adjective1 = formValue("adjective-1");
    let adjective2 = formValue("adjective-2");
    let adjective3 = formValue("adjective-3");
    let famousPerson = formValue("famous-person");
    let noun = formValue("noun");
    let dessert = formValue("dessert");
    let petName = formValue("pet-name");
  
    // Insert form values into our mad lib
    let madLib = `
    Dear ${relative},
    <br><br>
    I have been having a really ${adjective1} time 
    at camp. The counselour is ${adjective2} and 
    the food is ${adjective3}. I met ${famousPerson}
    and we quickly became ${noun}. Talk soon!
    <br><br>
    Your ${dessert},
    <br>
    ${petName}`;
    // console.log(madLib);
  
    // Output madlib to the player
    document.getElementById("output").innerHTML = madLib;
    
    addClassToElement("container", "generated");
  
  }