 
function showError(inputElement) {
   
   // Selecting error paragraph 
   const errorPara = inputElement.nextElementSibling;
   errorPara.style.display = 'block';
   errorPara.style.color = 'red';
   inputElement.style.border = '2px solid hsl(0, 100%, 74%)';
   inputElement.style.background = 'url("images/icon-error.svg")';
   inputElement.style.backgroundRepeat = 'no-repeat';
   inputElement.style.backgroundPosition = 'right 1em center';
}

function hideError(inputElement) {

   // Selecting error paragraph 
   const errorPara = inputElement.nextElementSibling;
   errorPara.style.display = 'none';
   inputElement.style.border = '1px solid rgb(203 213 225)';
   inputElement.style.background = 'none';
}

const form = document.querySelector(".sign_up");
let firstName = document.querySelector("input[name='firstName']");
let lastName = document.querySelector("input[name='lastName']");
let email = document.querySelector("input[name='email']");
let password = document.querySelector("input[name='password']");

form.addEventListener("submit", (event) => {

 // Validate the form 
 let isFormValid = true;

  // Stop from submission
  event.preventDefault();

  // Validate the first name
  if(firstName.value.trim() === "") {
     showError(firstName);
     isFormValid = false;
  } else {
    hideError(firstName);
  }
  
  // Validate the last name
  if(lastName.value.trim() === "") {
     showError(lastName);
     isFormValid = false;
  } else {
     hideError(lastName);
  }

  // Validate the email
   const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

   if(email.value.trim() === "" || !emailPattern.test(email.value)) {
      showError(email);
      email.setAttribute("placeholder", "email@example/com");
      isFormValid = false;
   } else {
      hideError(email);
   }

   // Validate password
   if(password.value.trim() === ""){
      showError(password);
      isFormValid = false;
   } else {
      hideError(password);
   }

   // Showing alert after successfull submission of form
   if (isFormValid) {

      // Showing alert after 1/2 sec
      setTimeout(() => {
         alert("Form Submitted sucessfully!");
      }, 500);
    }

});

// Happy code


 


 