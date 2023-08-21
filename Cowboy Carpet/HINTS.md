> **🗒 Note:** All the information you need to complete this Milestone is in the README. Try solving the problem on your own first! Below are some hints on breaking the problem down if you find yourself stuck.`

## Step 1: Getting the Room Dimensions

We have provided two functions you can call to access the values entered into the input boxes for the width and length of each room: `getRoomWidth(roomNumber)` and `getRoomLength(roomNumber)`.

So the first step is to use these functions to bring the room dimensions into your program:

`let room1Width = getRoomWidth(1);`

The above line gets the width entered for room 1. You just need to write 3 more lines that store `room1Length`, `room2Width`, and `room2Length`.

## Step 2: Calculating the Area

To calculate the total area needed, start by calculating the area of Room 1 and storing it in a variable. Then do the same for Room 2.  Then add the two areas together and store the result in a totalArea variable. Finally, increase the total area by 10%.

**Math Reminder:** If we want to find 50% of something we can multiply by 0.5. Want to get 75%? Then multiply by .75. Want to get 110% (_like in this assignment_)? Multiply by 1.1.  

**For example:** if the first room is 4ft x 4ft (16 sq ft) and the second room is 5ft x 5ft (25 sq ft) then the sum of the square footage is 41 (25 + 16) and the result is `45.1` (41 + 10%).

## Step 3: Show the Result

We have provided a function for showing the result!  All you need to do is call it and pass the `totalArea` variable between the parentheses.
