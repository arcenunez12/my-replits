/* This is where you'll complete the Milestone. Open your README.md file and click 'Open Preview' for detailed instuctions! */

function calculateCarpet() {
    // 👇 Write your code here 👇
  
    // Room 1 - get measurements of room 1
    let width1 = getRoomWidth(1);
    let length1 = getRoomLength(1);
  
    // Room 2 - get measurements of room 2
    let width2 = getRoomWidth(2);
    let length2 = getRoomLength(2);
  
    // Get the total sqFt - calculate the area
    // width * length for room1 and add width * length for room 2
    let area = (width1 * length1) + (width2 * length2);
  
    // Get the 10% by multiplying sqFt by 0.10
    let tenPercent = area * 0.10;
  
    // Add tenPercent and area together.
    let totalArea = area + tenPercent;
    // Can also do this
    // let totalArea = area * 1.10;
  
    // Call the showResult() function to display the total sqFt to the screen.
    showResult(totalArea);
    
    console.log("click");
  
  }
  
  calculateCarpetTest();
  
  /* LEVEL UP! (optional) 
      1. Function explanations: 
       - validateRoomNumber() function works by taking in two parameters, functionName
         and roomNumber, to verify that the room number is either 1 or 2. The function
         also makes sure that 1 or 2 is not in a string format, "1" or "2". It also
         makes sure that there must be a parameter for roomNumber. The funtion will
         either return true or false.
  
      - getRoomWidth() function works by taking in one parameter, roomNumber. The
        function will then call the validateRoomNumber() function to verify that 
        the roomNumber is valid. If false, then it returns 0. If true, it will 
        then return the room width. 
  
  
      2. Custom styles added: 
       - I add the classes .description and .calculation to make the text 
         more responsive to various screen sizes. 
      - I noticed that the text had a good size when on smaller screens compared
        to larger screens. This also makes the website more accessible for users.
  
  
  */