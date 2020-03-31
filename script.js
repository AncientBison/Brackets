function select_from_input(from_input, to_div) {
	document.getElementById(to_div).innerText =
			document.getElementById(from_input).value;
	persist();
}

function select(from_div, to_div) {
	document.getElementById(to_div).innerText =
			document.getElementById(from_div).innerText;
	persist();
}

function persist() {
	// Do something here.
}
