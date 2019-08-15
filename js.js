let container = document.querySelector(".container");
let inputNewTask = document.querySelector(".newTask");

function newTask() {
    let newDiv = document.createElement("div");
    let newDivText = document.createElement("div");
    let newBtnDel = document.createElement("button");
    let newBtnChecked = document.createElement("input");

    newDiv.classList.add("newDiv");
    newBtnDel.classList.add("btn");
    newDivText.classList.add("newDivText");
    newBtnChecked.classList.add("newBtnChecked");
    newBtnChecked.type = "checkbox";
    newBtnDel.innerHTML = "del";

    let valueNewTask = document.querySelector(".newTask").value;

    newDivText.innerHTML = valueNewTask;

    document.querySelector(".newTask").value = "";

    container.appendChild(newDiv);
    newDiv.appendChild(newBtnChecked);
    newDiv.appendChild(newDivText);
    newDiv.appendChild(newBtnDel);

    newBtnDel.onclick = function () {
        newDiv.remove();
    }

    newBtnChecked.onclick = function() {
        newDiv.classList.add("taskDid");
        newDivText.style.color = "lightgrey";
    }
}

let btn = document.querySelector(".btn");
btn.onclick = function () {
    if (inputNewTask.value.length) {
        newTask();
    }
}

document.onkeydown = function (event) {
    if (inputNewTask.value.length) {
        if (event.key === "Enter" && document.activeElement === inputNewTask) {
            newTask();
        }
    }
}