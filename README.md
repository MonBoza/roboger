Describe: inputLengthArray()

Test: "It should make an array of numbers depending on the users input"
code: let input = 5
const input = document.getElementById("input").value;
for (i = 0; i < inputLength; i++);{
    console.log(i)
}
Expected Output: [0,1,2,3,4] 

Describe: wouldYou()
Test: "It will replace the number 5 in array with a string "would you be mine""
Code: input = 8
inputArray.forEach(function(number, i){
  if (number === 5){
    inputArray[i] = "would you be mine?"
  }
});
Expected Output: [1,2,3,4, "would you be mine",6,7]


arrayOfThingsILike.forEach(function(thing) {
  thingsILike = thingsILike.concat(" " + thing + "!");
});
> thingsILike;
"I like... bubble baths! kittens! good books! clean code!"