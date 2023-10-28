//Business Logic
function inputNumChange(inputArray) {
    let output = document.createElement("p");

    inputArray.forEach(function(number, i){
        let numberString = number.toString();

        if (numberString.includes(0)) {
            inputArray[i] = "Beyonce"
        } else if (numberString.includes(3)) {
            inputArray[i] = "would you be mine?"
        } else if (numberString.includes(6)) {
            inputArray[i] = "left shoe"
        } else if (numberString.includes(8)) {
            inputArray[i] = "could you be mine?"
        } else if (numberString.includes(9))
            inputArray[i] = "right Shoe"
    });
    output.textContent = inputArray.join(" , ");
    return output;
}



//UI Logic

function inputLength(event) {
    event.preventDefault();
    let inputLength = document.getElementById("inputLength").value;
    let inputArray = inputLengthArray(inputLength);
    let output = inputNumChange(inputArray);
    document.body.append(output);
}

function inputLengthArray(inputLength) {
    let inputArray = [];
     for (let i = 0; i <= inputLength; i++){
        inputArray.push(i);
    }
    return inputArray;
}
window.addEventListener("load", function() {
    const form = document.getElementById("length-form");
  form.addEventListener("submit",function(event) {
    inputLength(event);
  });
});