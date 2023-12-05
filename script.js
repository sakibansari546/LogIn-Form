function togglePasswordVisibility() {
    var passwordInput = document.getElementById("password");
    var passwordIcon = document.getElementById("passwordIcon");
  
    if (passwordInput.type === "password") {
      passwordInput.type = "text";
      passwordIcon.innerHTML = '<i class="fa-regular fa-eye-slash"></i>'
    } else {
      passwordInput.type = "password";
      passwordIcon.innerHTML = '<i class="fas fa-eye"></i>'
    }
  }

  

  