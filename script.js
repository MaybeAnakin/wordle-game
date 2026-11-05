let board = document.getElementById("board");
let rows = document.getElementsByClassName("row");
let boxes = document.getElementsByClassName("box");
let keys = document.getElementsByClassName("key");
let enterKey = document.getElementById("enter");
let backspaceKey = document.getElementById("backspace");
let restartbtn = document.getElementById("restart-btn");

let Words = [
    "apple", "grape", "mango", "peach", "berry",
    "lemon", "melon", "candy", "smile", "tiger",
    "house", "chair", "table", "plant", "bread",
    "water", "music", "dream", "light", "night",
    "happy", "brain", "cloud", "storm", "beach",
    "snake", "horse", "shark", "eagle", "mouse",
    "phone", "clock", "watch", "train", "plane",
    "green", "black", "white", "brown", "world",
    "earth", "space", "ocean", "river", "heart",
    "flame", "ghost", "magic", "crown", "smoke",

    "about", "above", "admit", "angel", "angry",
    "avoid", "baker", "basic", "began", "below",
    "birth", "brave", "bring", "broad", "build",
    "cabin", "camel", "carry", "catch", "cause",
    "chain", "charm", "cheap", "chess", "chief",
    "clean", "clear", "climb", "close", "coast",
    "dance", "death", "depth", "dirty", "doubt",
    "dress", "drink", "drive", "eager", "enjoy",
    "entry", "faith", "false", "fancy", "fault",
    "feast", "field", "final", "first", "floor"
];

let randomWord = Words[Math.floor(Math.random() * Words.length)];
console.log(randomWord);

let currentbox = 0;
let currentRow = 0;
let gameOver = false;



window.addEventListener("keydown", function (event) {

    if (gameOver) {
        return;
    }

    if (/^[a-zA-Z]$/.test(event.key)) {
        if (currentbox < 5) {
            boxes[currentbox].textContent = event.key.toLowerCase();
            currentbox++;
        }
    }

    if (event.key === "Backspace") {
        if (currentbox > 0) {
            currentbox--;
            boxes[currentbox].textContent = "";
        }
    }


    if (event.key === "Enter") {
        let guess = "";
        for (let i = 0; i < 5; i++) {
            guess += boxes[i].textContent;
        }
        console.log(guess);

        if (guess.length === 5) {
            if (guess === randomWord) {
                alert("Congratulations! You guessed the word!");
                gameOver = true;

            } else {
                
                Console("Sorry, try again!");



            }

            let remainingLetters = randomWord;


for (let i = 0; i < 5; i++) {
    if (boxes[i].textContent === randomWord[i]) {
        boxes[i].classList.add("correct");

        let index = remainingLetters.indexOf(boxes[i].textContent);

        remainingLetters = remainingLetters.slice(0, index) +
            remainingLetters.slice(index + 1);
    }
}

for (let i = 0; i < 5; i++) {
    if (!boxes[i].classList.contains("correct")) {

        let index = remainingLetters.indexOf(boxes[i].textContent);

        if (index !== -1) {
            boxes[i].classList.add("present");

            remainingLetters = remainingLetters.slice(0, index) +
                remainingLetters.slice(index + 1);
        } else {
            boxes[i].classList.add("absent");
        }
    }
}


           

            for (let i = 0; i < 5; i++) {
    for (let j = 0; j < keys.length; j++) {

        if (keys[j].textContent.toLowerCase() === boxes[i].textContent) {

            if (boxes[i].classList.contains("correct")) {
                keys[j].classList.add("correct");
            }

            else if (boxes[i].classList.contains("present")) {
                if (!keys[j].classList.contains("correct")) {
                    keys[j].classList.add("present");
                }
            }

            else if (boxes[i].classList.contains("absent")) {
                if (!keys[j].classList.contains("correct") &&
                    !keys[j].classList.contains("present")) {
                    keys[j].classList.add("absent");
                }
            }
        }
    }
}


            if(randomWord !== guess){
                currentRow++;
                currentbox = 0;
                

                if(currentRow < 6){
                    boxes = rows[currentRow].getElementsByClassName("box");
                }else{
                    alert("Game Over! The correct word was: " + randomWord);
                    gameOver = true;
                }
            }

                

           


        }
       
    }

    


});


keys = Array.from(keys);
keys.forEach(function (key) {
    key.addEventListener("click", function () {
    if(key.textContent === "ENTER"){
            let event = new KeyboardEvent("keydown", { key: "Enter" });
            window.dispatchEvent(event);
        }else if(key.textContent === "⌫"){
            let event = new KeyboardEvent("keydown", { key: "Backspace" });
            window.dispatchEvent(event);
        }else{
            let event = new KeyboardEvent("keydown", { key: key.textContent });
            window.dispatchEvent(event);
        }

    });    
});


 restartbtn.addEventListener("click", function () {
            location.reload();
        
});
