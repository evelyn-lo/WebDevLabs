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
        //alert("found the Banana in " + i);
        }
    }
}

findTheBanana(L1);
findTheBanana(L2);

function findTheBananaForEach(arr) {
    arr.forEach(item => {
      if (item === "Banana") {
        //alert("We found a banana in the first array");
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

function addYear(){
    let currentYear = new Date().getFullYear();
    let yearElement = document.getElementById("copyYear");
    yearElement.innerHTML = currentYear;
}

// function showList(){
//     let funList = document.getElementById("funList");
//     let showButton = document.getElementById("showButton");

//     funList.style.display = "block";

//     showButton.style.display = "none";
// }

function toggleBio() {
    var dots = $("#dots");
    var moreText = $("#moreText");
    var btnText = $("#readMoreBtn");

    // Toggle the bio display
    if (moreText.is(":visible")) {
        // If full bio is visible, hide it and show "Read More" button
        moreText.hide();
        dots.show();
        btnText.text("Read More");
    } else {
        // If full bio is hidden, show it and hide "Read More" button
        moreText.show();
        dots.hide();
        btnText.text("Read Less");
    }
}

function validateForm() {
    var name = document.getElementById("name");
    var email = document.getElementById("email");
    var message = document.getElementById("message");

    var validationMessage = document.getElementById("validationMessage");

    validationMessage.style.display = "none";

    if (!name.checkValidity() || !email.checkValidity() || !message.checkValidity()) {
        // If any field is invalid, show the validation message
        validationMessage.style.display = "block";
        return false; 
    }
    return true; 
}


window.onload = addYear;

function getAdvice() {
    // Make a request to the Advice Slip API
    fetch("https://api.adviceslip.com/advice")
        .then(response => {
            if (!response.ok) {
                throw new Error("Network response was not ok");
            }
            return response.json();  // Parse the response as JSON
        })
        .then(data => {
            // Update the advice text on the webpage
            const advice = data.slip.advice;  // Extract the advice
            document.getElementById("adviceText").innerText = advice;
        })
        .catch(error => {
            // Handle any errors
            console.error("Error fetching advice:", error);
            document.getElementById("adviceText").innerText = "Sorry, couldn't get advice at the moment.";
        });
}

document.addEventListener("DOMContentLoaded", () => {
    const toggle = document.getElementById("menu-toggle");
    const links = document.getElementById("nav-links");
  
    toggle.addEventListener("click", () => {
      links.classList.toggle("show");
    });
  });

  document.addEventListener("DOMContentLoaded", () => {
    // Highlight active link
    const navLinks = document.querySelectorAll("nav a");
    const currentPath = window.location.pathname;
  
    navLinks.forEach(link => {
      if (link.getAttribute("href") === currentPath ||
          currentPath.endsWith(link.getAttribute("href"))) {
        link.classList.add("active");
      }
    });
  
    // Hamburger toggle (if not already included)
    const toggle = document.getElementById("menu-toggle");
    const links = document.getElementById("nav-links");
    if (toggle && links) {
      toggle.addEventListener("click", () => {
        links.classList.toggle("show");
      });
    }
  });
  
  



  