let password = document.getElementById(`password`).value;
let confirmPassword = document.getElementById(`confirm_password`).value;
const signButton = document.querySelector(`.sign-up-button`);
const passwordContainer = document.querySelector(`#password`);
const passwordConfContainer = document.querySelector(`#confirm_password`);

signButton.addEventListener(`click`, () => {
  confirmPassword = document.getElementById(`confirm_password`).value;
  password = document.getElementById(`password`).value;

  confirmPassword === password
    ? console.log(`Matching passwords`)
    : ((passwordContainer.style.border = `1px solid red`),
      (passwordConfContainer.style.border = `1px solid red`));
});
