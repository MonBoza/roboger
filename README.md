Describe: inputLength()

Test: "It should make an array of numbers depending on the users input"
code: let input = 5
const input = document.getElementById("input").value;
for (i = 0; i < inputLength; i++);{
    console.log(i)
}
Expected Output: [0,1,2,3,4] 

Describe neighborDigit();

Test "It will turn variable digit to array"
Code: let digits = "1234567"
let digitArray = digits.split("")
Expected Output: digitArray = 

Test: "It will replace digit in array with a string"
Code:for (let i = 0, i < digitArray.length, i++);
        if (digitArray[i] === 5 digitArray.replace(/\d5/, "Howdy, partner!")
Expected Output: [1,2,3,4, "Howdy, partner",6,7]


arrayOfThingsILike.forEach(function(thing) {
  thingsILike = thingsILike.concat(" " + thing + "!");
});
> thingsILike;
"I like... bubble baths! kittens! good books! clean code!"