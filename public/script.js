


let userInput = document.getElementById("input");
let btn = document.getElementById("button");
let ul = document.querySelector("ul");



function inputlength() {
    return userInput.value.length
}

function createListElement() {
    var li = document.createElement("li");
    li.appendChild(document.createTextNode(userInput.value))
    ul.appendChild(li);
    userInput.value = '';
}

function addList() {
    if (inputlength() > 0) {
        createListElement();
    }
}

btn.addEventListener("click", addList);

