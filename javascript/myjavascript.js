var modal = document.getElementById("myModal");

var btn = document.getElementById("myBtn");

var span = document.getElementsByClassName("close")[0];

btn.onclick = function () {
	modal.style.display = "block";
};

span.onclick = function () {
	modal.style.display = "none";
};

window.onclick = function (event) {
	if (event.target == modal) {
		modal.style.display = "none";
	}
};

const form = document.querySelector("form");
const birthdateInput = document.querySelector("#birthdate");
const ageOutput = document.querySelector("#age");

// The script stops running because the form is not found on the page.

// form.addEventListener("submit", function (e) {
// 	e.preventDefault();

// 	const birthdateString = birthdateInput.value;
// 	const dateRegex = /^\d{2}\/\d{2}\/\d{4}$/;

// 	if (!dateRegex.test(birthdateString)) {
// 		alert("Please enter a valid birthdate in MM/DD/YYYY format.");
// 		return;
// 	}

// 	const birthdate = new Date(birthdateString);

// 	const ageInMilliseconds = Date.now() - birthdate.getTime();
// 	const ageDate = new Date(ageInMilliseconds);
// 	const age = Math.abs(ageDate.getUTCFullYear() - 1970);
// 	ageOutput.textContent = `You are ${age} years old.`;
// });
// form.addEventListener("reset", function () {
// 	ageOutput.textContent = null;
// });
const body = document.querySelector("body");
const modeToggle = document.getElementById("mode-toggle");
const modeStatus = document.querySelector(".mode-status");

function toggleMode() {
	body.classList.toggle("dark-mode");

	const modeMessage = body.classList.contains("dark-mode") ? "Dark Mode" : "Light Mode";

	modeStatus.innerText = "Currently in " + modeMessage;
}
modeToggle.addEventListener("click", toggleMode);

const form = document.getElementById('exampleForm')
const submitButton = document.querySelector('.submit')
const successMessage = document.getElementById('form-submitted-msg')
const formElements = [ ...form.elements ]

const allInputsValid = () => {
  const valid = formElements.every((element) => {
  
    }
  })


  return valid
}

// Define a function to handle changes to any form element
const handleChange = () => {
  // Use the forEach() function to execute the provided function once for each element in the formElements array
  formElements.forEach((element) => {

 
    }

    if (!element.checkValidity()
          && (element.type === 'checkbox'
              || element.type === 'radio')
    ) {
      element.style.borderColor = 'red'
      element.nextElementSibling.style.color = 'red'
    }

    if (element.checkValidity()
          && (element.type === 'checkbox'
              || element.type === 'radio')
    ) {
      element.style.borderColor = '#CED4DA'
      element.nextElementSibling.style.color = '#212529'
    }

    if (element.nodeName === 'SELECT'
          && element.value === 'Please select an option'
    ) {
      element.style.borderColor = 'red'
      element.nextElementSibling.style.color = 'red'
      element.nextElementSibling.style.display = 'block'
      element.previousElementSibling.style.color = 'red'
    }

    if (element.nodeName === 'SELECT'
          && element.value !== 'Please select an option'
    ) {
      element.style.borderColor = '#CED4DA'
      element.nextElementSibling.style.color = '#CED4DA'
      element.nextElementSibling.style.display = 'none'
      element.previousElementSibling.style.color = '#212529'
    }
  })

  if (allInputsValid()) {
    submitButton.removeAttribute('disabled', '')
  } else {
    submitButton.setAttribute('disabled', '')
  }

const handleSubmit = (e) => {
  
  e.preventDefault()

  if (allInputsValid()) {
    successMessage.style.display = 'block'
    form.reset()
    submitButton.setAttribute('disabled', '')

    setTimeout(() => {
      successMessage.style.display = 'none'
    }, 3000)
  }
}

formElements.forEach((element) => {
  element.addEventListener('change', handleChange)
})

form.addEventListener('submit', (e) => handleSubmit(e))
}
