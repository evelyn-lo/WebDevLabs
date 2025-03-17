let x = 5, y = 7;
let z = x + y;
console.log(z);

let A = "Hello ", B = "world!";
let C = A + B;
console.log(C);

function SumNPrint(x1, x2){
    let x3 = x1 + x2;
    console.log(x3)
}

SumNPrint(x, y);
SumNPrint(A, B);

if (C.length > z) {
    console.log(C);
} else if (C.length < z) {
    console.log(z);
} else {
    console.log("Good job!");
}

let L1 = ["Watermelon", "Pineapple", "Pear", "Banana"];
let L2 = ["Apple", "Banana", "Kiwi", "Orange"];

function findTheBanana(arr) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === "Banana") {
        alert("found the Banana in " + i);
        }
    }
}

findTheBanana(L1);
findTheBanana(L2);

function findTheBananaForEach(arr) {
    arr.forEach(item => {
      if (item === "Banana") {
        alert("We found a banana in the first array");
      }
    });
  }

findTheBananaForEach(L1);

function greetingFunc(){

    let d = new Date();
    let h = d.getHours();

    let greetingElement = document.getElementById("greeting");
    let staticMessage = "I am Evelyn"

    if (h < 12){
        greetingElement.innerHTML = "Good morning, ";
    } else if (h < 18){
        greetingElement.innerHTML = "Good afternoon, ";
    } else if (h < 20){
        greetingElement.innerHTML = "Good evening, ";
    } else {
        greetingElement.innerHTML = "Good night, ";
    }

    greetingElement.innerHTML = greetingElement.innerHTML + staticMessage;

}

greetingFunc();

  