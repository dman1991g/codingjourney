var modal = document.getElementById("myModal");

var btn = document.getElementById("myBtn");

var span = document.getElementsByClassName("close")[0];

btn.onclick = function() {
  modal.style.display = "block";
}

span.onclick = function() {
  modal.style.display = "none";
}

window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
} 

const form = document.querySelector('form');
const birthdateInput = document.querySelector('#birthdate');
const ageOutput = document.querySelector('#age');

form.addEventListener('submit', function(e) {
  e.preventDefault();

  const birthdateString = birthdateInput.value;
  const dateRegex = /^\d{2}\/\d{2}\/\d{4}$/;

  if(!dateRegex.test(birthdateString)) {
    alert('Please enter a valid birthdate in MM/DD/YYYY format.');
    return;
  }

  const birthdate = new Date(birthdateString);

  const ageInMilliseconds = Date.now() - birthdate.getTime();
  const ageDate = new Date(ageInMilliseconds);
  const age = Math.abs(ageDate.getUTCFullYear() - 1970);

  const body = document.querySelector('body');
const modeToggle = document.getElementById('mode-toggle');
const modeStatus = document.querySelector('.mode-status');

function toggleMode() {
  body.classList.toggle('dark-mode');

  const modeMessage = body.classList.contains('dark-mode') ?
    'Dark Mode' 
    : "Light Mode"

  modeStatus.innerText = "Currently in " + modeMessage;
}
modeToggle.addEventListener('click', toggleMode);


