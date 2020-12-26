const form = document.querySelector(".js-form"),
    input = form.querySelector("input"),
    greeting = document.querySelector(".js-greetings");

const USER_LS = "currentUser",
    SHOWING_CN = "showing";

function saveName(text){
    localStorage.setItem(USER_LS, text);
};

function handleSubmit(event){
    //form submit시 자동으로 새로고침이 되는데 그것을 막는다
    event.preventDefault();
    //입력된 이름 저장
    const currentValue = input.value;
    //입력된 이름을 표시
    paintGreeting(currentValue);
    //localStorage에 이름 저장
    saveName(currentValue);
};

function askForName(){
    form.classList.add(SHOWING_CN);
    form.addEventListener("submit", handleSubmit);
};

function paintGreeting(text){
    form.classList.remove(SHOWING_CN);
    greeting.classList.add(SHOWING_CN);
    greeting.innerHTML = `Hello ${text}`;
};

function loadName(){
    const currentUser = localStorage.getItem(USER_LS);

    //localStorage에 user가 없음
    if(currentUser === null){
        // userName 묻기
        askForName();
    } else { //localStorage에 user가 있음
        //form 지우고, Hello + userName 보여주기
        paintGreeting(currentUser);
    };
};

function init(){
    loadName();
};

init();