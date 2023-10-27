# Mr. Roboger's Neighborhood

#### By Monica Barboza

#### It takes a the users number inupt and returns a list of values with a few substitutions.
## Technologies Used

* HTML
* JavaScript
* CSS

## Description

 This application gives the user the opportunity to select any number and in return their result is an array of numbers with a few substitutions made by me.
 * Example: I changes the number 1 to "right shoe", 3 to "would you be mine?", 6 to "left shoe", 8 to "could you be mine?", 9 to "Beyonce"
 * If a user chooses the number 9 the result will be "0 , Right shoe , 2 , would you be mine? , 4 , 5 , left shoe , 7 , could you be mine? , Beyonce"".
 * Try it out at http://monboza.github.io/roboger/

## Setup/Installation Requirements

* Open terminal or command prompt.
* Clone the repository by running the following command to your desktop: 
  git clone https://github.com/MonBoza/roboger.git
* Open the project in your favorite code editor: 
* Navigate to the to the bottom of the directory.
* Open the index.html file.

## Known Bugs

*Having issues changing it so that if the user choose 11 number 11 would also be "right shoe" or 101 "right shoe".

## License

Copyright 2023 MONICA BARBOZA

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the “Software”), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED “AS IS”, WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.


Email: (mailto:MonBoza@gmail.com)
Copyright (c) October 27, 2023  Monica Barboza



Describe: inputLength()

Test:"It will create variable output and append output to the body of html"
Code:let output = inputNumChange(inputArray);
    document.body.append(output);
Expected Output: Output displayed on the bottom of the Application


Describe: inputLengthArray()

Test: "It should make an array of numbers depending on the users input"
code: let input = 5
const input = document.getElementById("input").value;
for (i = 0; i < inputLength; i++);{
    console.log(i)
}
Expected Output: [0,1,2,3,4] 

Describe: inputNumChange()

Test: "It will replace the number 1 in array with a string "right shoe""
Code: input = 8
inputArray.forEach(function(number, i){
  if (number === 1){
    inputArray[i] = "right shoe"
  }
});
Expected Output: ["right shoe",2,3,4,5,6,7]

Test: "It will replace the number 1 in array with a string "would you be mine?" "
Code : input = 8
   else if (number === 3){
    inputArray[i] = "would you be mine?"
  }
Expected Output: ["1,2,"would you be mine?",4,5,6,7]

Test: "This will replace 5 with "left shoe" "
Code:input = 8
   else if (number === 5){
    inputArray[i] = "left shoe"
  }
Expected Output: ["1,2,3,4,"left shoe",6,7]

Test: "It will replace the number 1 in array with a string "could you be mine?" "
Code : input = 8
   else if (number === 7){
    inputArray[i] = "Could you be mine?"
  }
Expected Output: ["1,2,3,4,5,6,"Could you be mine?"]

Test: "It replace all numbers with the number 1 in it to "would you be mine""
code: input = 14
else if ( number === ) 
Expected Output ["0 , Right shoe , 2 , would you be mine? , 4 , 5 , left shoe , 7 , could you be mine? , Beyonce, right shoe, 12, would you be mine?, 14]
