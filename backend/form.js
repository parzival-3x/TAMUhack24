const apiUrl = 'http://localhost:4000/';


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
  codeURL = apiUrl.concat("/airports?code=",input);
  fetch(codeURL)
    .then(response => {
      if (!response.ok) {
        if (response.status === 404) {
          throw new Error('Please enter a valid airport.');
        } else if (response.status === 500) {
          throw new Error('Server error');
        } else {
          throw new Error('Network response was not ok');
        }
      }
      return response.json();
    })
    .then(data => {//do something else
      outputElement.textContent = JSON.stringify(data, null, 2);
    })
    .catch(error => {
      console.error('Error:', error);
      return showError(input, message);
    });
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
