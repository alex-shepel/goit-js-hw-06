const refs = {
	input: document.querySelector("#controls > input"),
	btnCreate: document.querySelector("#controls > [data-create]"),
	btnDestroy: document.querySelector("#controls > [data-destroy]"),
	boxesWrapper: document.querySelector("#boxes"),
};

const BOX_MIN_SIZE = 30;
const BOX_SIZING_STEP = 10;
const BOX_POSITION =
	"display:flex; justify-content:center; align-items:center;";

function getRandomHexColor() {
	return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const getColoredBoxWithSize = (size, innerBox) => {
	const color = getRandomHexColor();
	return `<div style="${BOX_POSITION} width:${size}px; height:${size}px; background-color:${color};">${innerBox}</div>`;
};

const createBoxes = amount => {
	let markdown = "";

	for (let i = 0; i < amount; i += 1) {
		markdown = getColoredBoxWithSize(
			BOX_MIN_SIZE + BOX_SIZING_STEP * i,
			markdown
		);
	}

	return markdown;
};

const onClickCreate = () => {
	refs.boxesWrapper.innerHTML = createBoxes(refs.input.value);
};

const onClickDestroy = () => {
	refs.input.value = "";
	refs.boxesWrapper.innerHTML = "";
};

refs.btnCreate.addEventListener("click", onClickCreate);
refs.btnDestroy.addEventListener("click", onClickDestroy);
