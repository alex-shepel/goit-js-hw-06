const refs = {
	input: document.querySelector("#font-size-control"),
	span: document.querySelector("#text"),
};

const onInput = event => {
	const value = event.currentTarget.value;
	refs.span.style.fontSize = `${value}px`;
};

refs.input.addEventListener("input", onInput);
