const refs = {
	form: document.querySelector(".login-form"),
};

const onSubmit = event => {
	event.preventDefault();

	const form = event.currentTarget;
	const data = {};

	[...form.elements]
		.filter(elem => elem.tagName === "INPUT")
		.map(elem => (data[elem.name] = elem.value));

	if (Object.values(data).some(value => !value)) {
		alert("Please, fill in all fields.");
	} else {
		console.log("data :>> ", data);
		form.reset();
	}
};

refs.form.addEventListener("submit", onSubmit);
