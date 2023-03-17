const validationIcons = document.querySelectorAll(".icon-verif");
const validationTexts = document.querySelectorAll(".error-msg");

const userInput = document.querySelector(".input-group:nth-child(1)input")

userInput.addEventListener("blur", userValidation)
userInput.addEventListener("input", userValidation)

function userValidation() {
    if (userInput.value.length >= 6){
        validationIcons[0].style.display = "inline";
        validationIcons[0].src = "resources/check.svg";
        validationTexts[0].style.display = "none";
    }else {
        validationIcons[0].style.display = "inline";
        validationIcons[0].src ="ressources/errors.svg";
        validationTexts[0].style.display = "block";
    }
}
const mailInput = document.querySelector(".input-group:nth-child(2)input")

mailInput.addEventListener("blur", mailValidation)
mailInput.addEventListener("input", mailValidation)

const regexEmail = //
    function mailValidation(){

}