const toDoForm = document.getElementById("todo-form");
const toDoInput = toDoForm.querySelector("input");
const toDoList = document.getElementById("todo-list");

const TODOS_KEY = "todos";

let toDos = [];

function saveToDos(){
    localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}

function deleteTodo(event){
    const li = event.target.parentElement;
    li.remove();
    toDos = toDos.filter((todo) => todo.id !== parseInt(li.id));
    saveToDos();
}

function paintToDo(newTodo){
    const li = document.createElement("li");
    li.id = newTodo.id;
    const span = document.createElement("span");
    const button = document.createElement("button");
    span.innerText = newTodo.text;
    button.innerText = "❌";
    button.addEventListener("click", deleteTodo);
    li.appendChild(span);
    li.appendChild(button);
    toDoList.appendChild(li);
}

function handleToDoSubmit(event){
    event.preventDefault();
    const newTodo = toDoInput.value;
    const newToDoObj = {
        text: newTodo,
        id: Date.now(),
    };
    toDos.push(newToDoObj);
    toDoInput.value = "";
    paintToDo(newToDoObj);
    saveToDos(newTodo);
}

toDoForm.addEventListener("submit", handleToDoSubmit); 

const getSaveToDos = localStorage.getItem(TODOS_KEY);

if(getSaveToDos !== null){
    const parsedToDos = JSON.parse(getSaveToDos);
    toDos = parsedToDos;
    parsedToDos.forEach(paintToDo);// =>는 arrow function
}