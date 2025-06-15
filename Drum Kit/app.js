function playSound(e){
    let code = e.keyCode;
    const audio = document.querySelector(`audio[data-key="${code}"]`);
    if(!audio) return; //check valid key is played
    audio.currentTime = 0; //rewinds a play the key from start after pressing it immediately w/o delay
    audio.play();

    const key = this.document.querySelector(`.key[data-key="${code}"]`);
    key.classList.add("playing");
}

window.addEventListener("keydown", playSound);

function removeTransition(e){
    if(e.propertyName != "transform") return;
    this.classList.remove("playing");
}

const keys = document.querySelectorAll(".key");
keys.forEach(key => key.addEventListener("transitionend", removeTransition));