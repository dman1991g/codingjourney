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

const body = document.querySelector("body");
const modeToggle = document.getElementById("mode-toggle");
const modeStatus = document.querySelector(".mode-status");

function toggleMode() {
	body.classList.toggle("dark-mode");

	const modeMessage = body.classList.contains("dark-mode") ? "Dark Mode" : "Light Mode";

	modeStatus.innerText = "Currently in " + modeMessage;
}
modeToggle.addEventListener("click", toggleMode);