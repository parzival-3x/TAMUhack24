// show a message with a type of the input
function showMessage(input, message, type) {
	// get the small element and set the message
	const msg = input.parentNode.querySelector("small");
	msg.innerText = message;
	// update the class for the input
	input.className = type ? "success" : "error";
	return type;
}

function showError(input, message) {
	return showMessage(input, message, false);
}

function showSuccess(input) {
	return showMessage(input, "", true);
}

function hasValue(input, message) {
	if (input.value.trim() === "") {
		return showError(input, message);
	}
	return showSuccess(input);
}

function validateAirport(input, message) {
	// check if the value is not empty
	if (!hasValue(input)) {
		return false;
	}
  //if /airports?code=<IATA-CODE>
  // returns 404, return "please enter a valid code"
	
	if (!emailRegex.test(email)) {
		return showError(input, message);
	}
	return true;
}

const form = document.querySelector("#signup");

const AIRPORT_REQUIRED = "Please enter a valid airport code";

form.addEventListener("submit", function (event) {
	// stop form submission
	event.preventDefault();

	// validate the form
	let originValid = validateAirport(form.elements["start"], AIRPORT_REQUIRED);
  let endpointValid = validateAirport(form.elements["end"], AIRPORT_REQUIRED);
  let connectionValid = hasValue(form.elements["connect"]);
  let leaveValid = hasValue(form.elements["leave"]);
	let arriveemailValid = hasValue(form.elements["arrive"]);
	// if valid, submit the form.
	if (originValid && endpointValid && connectionValid && leaveValid && arriveemailValid) {
		alert("Demo only. No form was posted.");
	}
});

