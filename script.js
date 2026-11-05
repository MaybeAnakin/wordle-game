let board = document.getElementById("board");
let rows = document.getElementsByClassName("row");
let boxes = document.getElementsByClassName("box");
let keys = document.getElementsByClassName("key");
let enterKey = document.getElementById("enter");
let backspaceKey = document.getElementById("backspace");
let restartbtn = document.getElementById("restart-btn");

let Words = [
"about","above","abuse","actor","acute","adapt","admit","adopt","adult","after",
"again","agent","agree","ahead","alarm","album","alert","alien","align","alike",
"alive","allow","alone","along","alter","among","anger","angle","angry","apart",
"apple","apply","arena","argue","arise","armor","array","aside","asset","avoid",
"award","aware","badly","baker","bases","basic","basis","beach","began","begin",
"being","below","bench","birth","black","blame","blank","blind","block","blood",
"board","boost","booth","bound","brain","brand","brave","bread","break","breed",
"brief","bring","broad","broke","brown","build","built","buyer","cable","calif",
"camel","candy","carry","catch","cause","chain","chair","chart","chase","cheap",
"check","chest","chief","child","china","chips","choir","chose","civil","claim",
"class","clean","clear","click","clock","close","cloud","coach","coast","could",
"count","court","cover","crack","craft","crash","cream","crime","cross","crowd",
"crown","curve","cycle","daily","dance","dated","dealt","death","debut","delay",
"depth","doing","doubt","dozen","draft","drama","drawn","dream","dress","drill",
"drink","drive","drove","dying","eager","early","earth","eight","elite","empty",
"enemy","enjoy","enter","entry","equal","error","event","every","exact","exist",
"extra","faith","false","fault","fiber","field","fifth","fifty","fight","final",
"first","fixed","flame","flash","fleet","floor","fluid","focus","force","forth",
"forty","forum","found","frame","frank","fraud","fresh","front","fruit","fully",
"funny","giant","given","glass","globe","going","grace","grade","grain","grand",
"grant","grass","grave","great","green","gross","group","grown","guard","guess",
"guest","guide","happy","harry","heart","heavy","hence","henry","horse","hotel",
"house","human","ideal","image","index","inner","input","issue","japan","jimmy",
"joint","jones","judge","known","label","large","laser","later","laugh","layer",
"learn","lease","least","leave","legal","level","lewis","light","limit","links",
"lives","local","logic","loose","lower","lucky","lunch","lying","magic","major",
"maker","march","maria","match","maybe","mayor","meant","media","metal","might",
"minor","minus","mixed","model","money","month","moral","motor","mount","mouse",
"mouth","movie","music","needs","never","newly","night","noise","north","noted",
"novel","nurse","occur","ocean","offer","often","order","other","ought","paint",
"panel","paper","party","peace","peter","phase","phone","photo","piece","pilot",
"pitch","place","plain","plane","plant","plate","point","pound","power","press",
"price","pride","prime","print","prior","prize","proof","proud","prove","queen",
"quick","quiet","quite","radio","raise","range","rapid","ratio","reach","ready",
"realm","rebel","refer","relax","repay","reply","right","rival","river","robin",
"roger","roman","rough","round","route","royal","rural","scale","scene","scope",
"score","sense","serve","seven","shall","shape","share","sharp","sheet","shelf",
"shell","shift","shirt","shock","shoot","short","shown","sight","since","sixth",
"sixty","sized","skill","sleep","slice","slide","small","smart","smile","smith",
"smoke","snake","solid","solve","sorry","sound","south","space","spare","speak",
"speed","spend","spent","split","spoke","sport","staff","stage","stake","stand",
"start","state","steam","steel","stick","still","stock","stone","stood","store",
"storm","story","strip","stuck","study","stuff","style","sugar","suite","super",
"sweet","table","taken","taste","taxes","teach","teeth","terry","texas","thank",
"theft","their","theme","there","these","thick","thing","think","third","those",
"three","threw","throw","thumb","tight","times","tired","title","today","topic",
"total","touch","tough","tower","track","trade","train","treat","trend","trial",
"tried","tries","truck","truly","trust","truth","twice","under","undue","union",
"unity","until","upper","upset","urban","usage","usual","valid","value","video",
"virus","visit","vital","voice","waste","watch","water","wheel","where","which",
"while","white","whole","whose","woman","women","world","worry","worse","worst",
"worth","would","write","wrong","wrote","yield","young","youth"
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
                
                console.log("Sorry, try again!");



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
