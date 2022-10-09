const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting span");
const logoutForm = document.querySelector("#logout-form");
const todo = document.getElementById("todo");

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";

function onLoginSubmit(event) {
  event.preventDefault();
  const usernameThatTheUserWrote = loginInput.value;
  localStorage.setItem(USERNAME_KEY, usernameThatTheUserWrote);
  loginForm.classList.add(HIDDEN_CLASSNAME);
  todo.classList.remove(HIDDEN_CLASSNAME);

  paintGreetings(usernameThatTheUserWrote);
}

function paintGreetings(username) {
  greeting.innerText = `Hello, ${username}`;
  greeting.classList.remove(HIDDEN_CLASSNAME);
  logoutForm.classList.remove(HIDDEN_CLASSNAME);
}

function onLogoutSubmit(event) {
  event.preventDefault();
  todo.classList.add(HIDDEN_CLASSNAME);
  localStorage.removeItem(USERNAME_KEY);
  window.location.reload();
}

loginForm.addEventListener("submit", onLoginSubmit);

const savedUsername = localStorage.getItem(USERNAME_KEY);

if (savedUsername === null) {
  // show the form
  loginForm.classList.remove(HIDDEN_CLASSNAME);
  todo.classList.add(HIDDEN_CLASSNAME);
} else {
  // show the greetings
  todo.classList.remove(HIDDEN_CLASSNAME);
  paintGreetings(savedUsername);
}

logoutForm.addEventListener("submit", onLogoutSubmit);
