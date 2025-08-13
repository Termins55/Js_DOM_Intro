// Обробка подій

const btn = document.getElementById("clickBtn");
console.log("btn :>> ", btn);

const clickHandler = function (event) {
  console.log("Btn was clicked");
};

btn.onclick = clickHandler;

btn.onclick = null;

//------------------------------------------------

const loginBtn = document.getElementById("loginBtn");

function loginBtnHandler(e) {
  alert("Log in is process");
}

loginBtn.addEventListener("click", loginBtnHandler);

loginBtn.removeEventListener("click", loginBtnHandler);
//------------------------------------------------
// Виводити "Click me!" коли наводимио курсором на loginBtn

function loginMouseMoveHandler(e) {
  console.log("Click me!");
}

loginBtn.addEventListener("mousemove", loginMouseMoveHandler);

// Додати кнопку і при натисканні на неї виводити "Hello world"

const worldBtn = document.getElementById("worldBtn");

function worldBtnHandling(e) {
  alert("Hello world");
}

worldBtn.addEventListener("mousemove", worldBtnHandling);
