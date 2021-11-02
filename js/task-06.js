const refs = {
	input: document.querySelector("#validation-input"),
};

const onBlurInput = event => {
	const lenExpect = parseInt(event.currentTarget.value.length);
	const lenActual = parseInt(refs.input.dataset.length);
	refs.input.className = lenExpect === lenActual ? "valid" : "invalid";
};

refs.input.addEventListener("blur", onBlurInput);
