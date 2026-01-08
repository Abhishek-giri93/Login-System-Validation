const inputs = document.querySelectorAll("input");

const validEmail = (email) => {
  const pattern = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/i;
  return pattern.test(email);
};

inputs.forEach(input => {

  input.addEventListener("focus", () => {
    const msg = input.nextElementSibling;
    if (!msg) return;

    if (input.type === "email") {
      msg.innerText = "Use @ in email address";
    } else if (input.type === "password") {
      msg.innerText = "Password must be at least 6 characters";
    }

    msg.style.color = "rgba(121,121,121,0.7)";
    msg.style.fontSize = "12px";
  });

  input.addEventListener("blur", () => {
    const msg = input.nextElementSibling;
    if (!msg) return;

    const value = input.value.trim();

    // Empty field check
    if (value === "") {
      msg.innerText = "This field is required*";
      msg.style.color = "rgba(255,0,0,0.7)";
      return;
    }

    // Email validation
    if (input.type === "email") {
      if (!validEmail(value)) {
        msg.innerHTML = '<i class="fa-solid fa-xmark"></i> Please enter a valid email';
        msg.style.color = "rgba(255,0,0,0.7)";
      } else {
        msg.innerHTML = '<i class="fa-solid fa-check"></i> Valid email';
        msg.style.color = "green";
      }
    }
    if(input.type === "password"){
      if(value.length < 6){
        msg.innerHTML = '<i class ="fa-solid fa xmark"></i> Password is too short';
        msg.style.color = "rgba(255, 0, 0, 0.7)";
      }
      else{
        msg.innerHTML = '<i class = "fa-solid fa-check"></i> Strong password';
        msg.style.color = "green";
      }
    }
  });

});
