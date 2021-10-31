const refs = {
	input: document.querySelector("#controls > input"),
	btnCreate: document.querySelector("#controls > [data-create]"),
	btnDestroy: document.querySelector("#controls > [data-destroy]"),
	boxesWrapper: document.querySelector("#boxes"),
};

const BOX_MIN_SIZE = 30;
const BOX_SIZING_STEP = 10;

function getRandomHexColor() {
	return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const getColoredBoxWithSize = size => {
	const color = getRandomHexColor();
	return `<div style="width:${size}px;height:${size}px;background-color:${color};"></div>`;
};

const createBoxes = amount => {
	let size = BOX_MIN_SIZE;
	let markdown = "";

	for (let i = 0; i < amount; i += 1) {
		markdown += getColoredBoxWithSize((size += BOX_SIZING_STEP));
	}

	return markdown;
};

const onClickCreate = () => {
	console.log("refs.input.value :>> ", refs.input.value);
	console.log("markdown: ", createBoxes(refs.input.value));
	refs.boxesWrapper.innerHTML = createBoxes(refs.input.value);
};

const onClickDestroy = () => {
	refs.input.value = "";
	refs.boxesWrapper.innerHTML = "";
};

refs.btnCreate.addEventListener("click", onClickCreate);
refs.btnDestroy.addEventListener("click", onClickDestroy);
