const toDoFrom = document.querySelector(".js-toDoForm"),
    toDoInput = toDoFrom.querySelector("input"),
    toDoList = document.querySelector(".toDoList");

const TODOS_LS = "toDos";
const toDos = [];

function saveToDos(){
    localStorage.setItem(TODOS_LS, JSON.stringify(toDos));
}

function paintToDo(text){
    const li = document.createElement("li");
    const delBtn = document.createElement("button");
    delBtn.innerText = "X";
    const span = document.createElement("span");
    const newId = toDos.length + 1;
    span.innerHTML = text;
    li.appendChild(delBtn);
    li.appendChild(span);
    toDoList.appendChild(li);
    li.id = newId;
    const toDosObj = {
        text : text,
        id : newId
    }
    toDos.push(toDosObj);
    saveToDos();
}

function handleSubmit(event){
    //form submit시 자동으로 새로고침이 되는데 그것을 막는다
    event.preventDefault();
    //입력된 toDo 저장
    const currentValue = toDoInput.value;
    paintToDo(currentValue);
    toDoInput.value = "";
}

function loadToDos(){
    const loadedToDos = localStorage.getItem(TODOS_LS);

    if(loadedToDos !== null){
        const parsedToDos = JSON.parse(loadedToDos);
        parsedToDos.forEach(function(toDo){
            paintToDo(toDo.text);
        });
    }
}

function init(){
    loadToDos();
    toDoFrom.addEventListener("submit", handleSubmit);
}

init();