const refs = {
	body: document.querySelector("body"),
	output: document.querySelector(".color"),
	button: document.querySelector(".change-color"),
};

function getRandomHexColor() {
	return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const onClickBtn = () => {
	const color = getRandomHexColor();
	refs.body.style.backgroundColor = color;
	refs.output.textContent = color;
};

refs.button.addEventListener("click", onClickBtn);
