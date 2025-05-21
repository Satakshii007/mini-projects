let gameSeq = [];
let userSeq = [];

let btns = ["yellow","red","green","purple"];

let started = false;
let level = 0;

let h3 = document.querySelector("h3");

document.addEventListener("keypress", function(){
    if(started == false){
        console.log("game started");
        started = true;
        levelUp();
    }
});

function levelUp(){
    userSeq = [];
    level++;
    h3.innerText = `Level ${level}`;

    let randIdx = Math.floor(Math.random()*4);  //four colour buttons --- 0,1,2,3---array btns
    let randCol = btns[randIdx];
    let randBtn = document.querySelector(`.${randCol}`);

    gameSeq.push(randCol);
    console.log(`gameSeq ${gameSeq}`);

    gameFlash(randBtn);
}

function gameFlash(btn){
    btn.classList.add("gameflash");
    setTimeout(function() {
        btn.classList.remove("gameflash");
    }, 250);
}

function userFlash(btn){
    btn.classList.add("userflash");
    setTimeout(function() {
        btn.classList.remove("userflash");
    }, 250);
}

function btnPress(){
    let btn = this;
    userFlash(btn);

    let userCol = btn.getAttribute("id");
    userSeq.push(userCol);
    console.log(`userSeq ${userSeq}`);

    checkAns(userSeq.length - 1);
}

let allBtns = document.querySelectorAll(".btn");
for(btn of allBtns){
    btn.addEventListener("click", btnPress);
}

function checkAns(idx){
    if(userSeq[idx] === gameSeq[idx]){
        if(userSeq.length == gameSeq.length){
            setTimeout(levelUp, 1000);
        }
        console.log("same value");
    }else{
        h3.innerHTML = `Game over! Your score was ${level}! <br> Press any key to start again`;
        document.querySelector("body").style.backgroundColor = "red";
        setTimeout(function(){
            document.querySelector("body").style.backgroundColor = "white";
        }, 150);
        reset();
    }
}

function reset(){
    started = false;
    gameSeq = [];
    userSeq = [];
    level = 0;
}