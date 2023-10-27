function inputLength(event) {
    event.preventDefault();
    let inputLength = document.getElementById("inputLength").value;
    let inputLengthArray = inputLengthArray(inputLength);
    let output = inputNumChange(inputArray);
    document.body.append(output);
}

function inputLengthArray(inputLength) {
    let inputArray = [];
     for (let i = 1; i <= inputLength; i++){
        inputArray.push(i);
    }
    return inputArray;
}

function inputNumChange(){
    let output = document.createElement("p");
    debugger;
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
  document.getElementById("inputLength").addEventListener("submit",function(event) {
    inputLength(event);
  });
});