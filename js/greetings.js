const loginForm = document.querySelector("#login-form");
const loginInput = loginForm.querySelector("input");
const greeting = document.querySelector("#greeting");

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";

function paintGreeting(key){
    greeting.innerText = `hello ${key}`;
    greeting.classList.remove(HIDDEN_CLASSNAME);
}

function onLoginSubmit(event){
    event.preventDefault();
    const userName = loginInput.value;
    loginForm.classList.add(HIDDEN_CLASSNAME);
    //greeting.innerText = "hello " + userName;
    localStorage.setItem(USERNAME_KEY, userName);
    paintGreeting(userName);
}

const savedUsername = localStorage.getItem(USERNAME_KEY);

if(savedUsername === null){
    //show the form
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    loginForm.addEventListener("submit", onLoginSubmit);
//addEventListener는 함수를 호출하고 자동으로 함수를 살행하는데 이 때 
//js가 event 동작에 대한 정보를 함수 첫번째 argument로 제공함(evnet object).
}else{
    paintGreeting(savedUsername);
    //show the greeting
}