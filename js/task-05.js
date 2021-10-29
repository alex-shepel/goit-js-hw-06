const refs = {
	input: document.querySelector("#name-input"),
	output: document.querySelector("#name-output"),
};

const onInput = event => {
	refs.output.textContent = event.currentTarget.value
		? event.currentTarget.value
		: "Anonymous";
};

refs.input.addEventListener("input", onInput);
