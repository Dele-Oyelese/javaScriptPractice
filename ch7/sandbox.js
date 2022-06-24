const form = document.querySelector(".signup-form");
const feedback = document.querySelector(".feedback");
const usernamePattern = /^[a-zA-Z]{6,12}$/;
//const username = document.querySelector('#username');
form.addEventListener("submit", (e) => {
  e.preventDefault();
  //validation

  username = form.username.value;

  if (usernamePattern.test(username)) {
    feedback.textContent = "That username is valid";
  } else {
    feedback.textContent =
      "That username is invalid! Username must be only letters and 6-12 charaters long";
  }
});

// live feedback

form.username.addEventListener('keyup', e => {
    if(usernamePattern.test(e.target.value)){
        form.username.setAttribute('class', 'success');
    }
    else{
        form.username.setAttribute('class', 'error');
    }

})