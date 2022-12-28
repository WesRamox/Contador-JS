var decrease = document.getElementById("decrease");
var increase = document.getElementById("increase");
var reset = document.getElementById("reset");
var numberValue = document.getElementById("number");


function decrement() {
    if(numberValue.innerHTML <= 0) {
        console.log(numberValue.innerHTML = 0);
    } else {
        numberValue.innerHTML = Number(numberValue.innerHTML) - 1;
    }
}

function increment() {
    numberValue.innerHTML = Number(numberValue.innerHTML) + 1;
}

function redefing() {
    numberValue.innerHTML = 0;
}