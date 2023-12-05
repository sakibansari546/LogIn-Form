function togglePasswordVisibility() {
  var passwordInput = document.getElementById("password");
  var passwordIcon = document.getElementById("passwordIcon");

  if (passwordInput.type === "password") {
    passwordInput.type = "text";
    passwordIcon.innerHTML = '<i class="fa-regular fa-eye-slash"></i>'
  } else {
    passwordInput.type = "password";
    passwordIcon.innerHTML = '<i class="fa-regular fa-eye"></i>'
  }
}




const form = document.querySelector('form');
const loginContainer = document.querySelector('.login-container');
const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");
const emailIcon = document.getElementById("emailIcon");
const tickEmailIcon = document.querySelector(".tick");

const passwordIcon = document.getElementById("passwordIcon");

let emailIsValid = false;
let passwordIsValid = false;

emailInput.addEventListener('keyup', emailValidate);
function emailValidate() {
  let emailValue = emailInput.value.trim();
  emailIsValid = /\S+@\S+\.\S+/.test(emailValue);
  if (emailIsValid) {
    tickEmailIcon.style.display = 'block';
    emailIcon.style.display = 'none'
    tickEmailIcon.style.color = 'rgb(0, 195, 0)'
    emailIcon.style.animation = "";
  } else {
    emailIcon.style.animation = "horizontal-shaking .2s 5 ";
    emailIcon.style.color = "red";
  }
}

passwordInput.addEventListener('keyup', validatePassword)
function validatePassword() {
  var passwordValue = passwordInput.value.trim();
  passwordIsValid = passwordValue.length >= 8;

  if (passwordIsValid) {
    passwordIcon.style.animation = "";
    passwordIcon.style.color = "rgb(0, 195, 0)";
  } else {
    passwordIcon.style.animation = "horizontal-shaking .2s 5 ";
    passwordIcon.style.color = "red";
  }
}

function afterSubmitPage() {
  const submitPage = document.querySelector('.submit-container');
  const errorIcon = document.querySelector('.icon-error');
  const validateInputError = document.querySelector('.valid-input');
  const loginError = document.querySelector('.valid-error');

  if (emailIsValid && passwordIsValid) {
    submitPage.style.display = 'flex';
    loginContainer.style.display = 'none';
    errorIcon.innerHTML = '<i class="fa-solid fa-check"></i>';
    errorIcon.style.color = 'rgb(0, 195, 0)';
    validateInputError.innerHTML = 'Login successfully';
    loginError.innerHTML = 'Go to your profile page';
  } else{
    submitPage.style.display = 'flex';
    loginContainer.style.display = 'none';
  }
}



const submitPageBtn = document.querySelector('.ok-btn');
submitPageBtn.onclick = onload;
function onload() {
  window.location.reload();
}


form.addEventListener('submit', (e) => {
  e.preventDefault();
  afterSubmitPage();
});
























