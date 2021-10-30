const refs = {
	input: document.querySelector("#validation-input"),
};

const onBlurInput = event => {
	event.currentTarget.value.length < refs.input.dataset.length
		? (refs.input.className = "invalid")
		: (refs.input.className = "valid");
};

refs.input.addEventListener("blur", onBlurInput);
