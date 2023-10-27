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

Test:



arrayOfThingsILike.forEach(function(thing) {
  thingsILike = thingsILike.concat(" " + thing + "!");
});
> thingsILike;
"I like... bubble baths! kittens! good books! clean code!"