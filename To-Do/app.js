let inp = document.querySelector("input");
let ul = document.querySelector("ul");
let btn = document.querySelector("button");

btn.addEventListener("click", function(){
    let tasks = document.createElement("li");
    tasks.innerText = inp.value;
    ul.appendChild(tasks);
    inp.value = "";

    let delBtn = document.createElement("button");
    delBtn.innerText = "Delete";
    delBtn.classList.add("del");
    tasks.appendChild(delBtn);
});

ul.addEventListener("click", function(event){
    if(event.target.nodeName == "BUTTON"){
    let listItem = event.target.parentElement;
    listItem.remove();
    console.log("deleted");
    }
});


// let delBtns = document.querySelectorAll(".del");
// for(delBtn of delBtns){
//     delBtn.addEventListener("click", function(){
//         let parent = this.parentElement;
//         console.log(parent);
//         parent.remove();
//     });
// }

