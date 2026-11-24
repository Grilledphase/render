const username = document.getElementById("username");
const password = document.getElementById("password");
const button = document.getElementById("btn");

function login(e) {
  e.preventDefault();
  console.log(username.value + password.value);
}
