function inputLength(event) {
    event.preventDefault();
    let inputLength = document.getElementById("inputLength").value;
    let inputArray = inputLengthArray(inputLength);
    let output = inputNumChange(inputArray);
    document.body.appendChild(output);
}

function inputLengthArray(inputLength) {
    let inputArray = [];
     for (let i = 1; i <= inputLength; i++){
        inputArray.push(i);
    }
    return inputArray;
}

function inputNumChange(inputArray){
    let output = document.createElement("p");
    inputArray.forEach(function(number, i){
        if (number[i] === 1){
            inputArray[i] === "right shoe"
        } else if (number === 3){
            inputArray[i] === "would you be mine?"
        } else if (number === 5){
            inputArray[i] === "left shoe"
        } else if (number === 7){
            inputArray[i] === "could you be mine?"
        } else if (number === 9){
            inputArray[i] === "Beyonce"
        }
    });
    output.textContent = inputArray.join(" , ")
    return output;
}



//UI Logic


window.addEventListener("load", function() {
    const form = document.getElementById("length-form");
  form.addEventListener("submit",function(event){
    inputLength(event);
  });
});