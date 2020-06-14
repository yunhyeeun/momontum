const form = document.querySelector(".js-form"),
	input = form.querySelector("input");
	greeting = document.querySelector(".js-greetings");

const USER_LS = "currentUser",
	SHOWING_CN = "showing";

function saveName(text) {
	localStorage.setItem(USER_LS, text);
}
function handleSubmit(event) {
	event.preventDefault();
	const currentValue = input.value;
	paintGreeting(currentValue);
	saveName(currentValue);
}

function askForName() {
	form.classList.add(SHOWING_CN);
	form.addEventListener("submit", handleSubmit);
}

function paintGreeting(text) {
	form.classList.remove(SHOWING_CN);
	greeting.classList.add(SHOWING_CN);
	const date = new Date();
	const hours = date.getHours();
	let time = ``;
	if (hours >= 0 && hours < 6) {
		time = `Night`;
	} else if (hours < 12) {
		time = `Morning`;
	} else if (hours < 18) {
		time = `Afternoon`;
	} else {
		time = `Evening`;
	}
	greeting.innerText = `Good ${time}, ${text}`;
}

function loadName() {
	const currentUser = localStorage.getItem(USER_LS);
	if (currentUser === null) {
		askForName();
	} else {
		paintGreeting(currentUser);
	}
}

function init() {
	loadName();
}

init();