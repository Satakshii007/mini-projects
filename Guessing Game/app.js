const max = prompt("Please enter the max number: ");

const random = Math.floor(Math.random()*max) +1;



let guess = prompt("Please guess a number: ");

while(true){
    if(guess=="quit"){
        console.log("you quit the game!");
        break;
    }
    
    if(guess==random){
        console.log("your guess was correct. The number is: ", random);
        break;
    }else if(guess<random){
        guess = prompt("hint: small number. please try again");
    }else{
        guess = prompt("hint: large number. please try again");
    }
}