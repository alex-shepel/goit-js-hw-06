const refs = {
	btnDecrement: document.querySelector('button[data-action="decrement"]'),
	btnIncrement: document.querySelector('button[data-action="increment"]'),
	spanValue: document.querySelector("#value"),
};

let counterValue = 0;

const refreshIface = value => (refs.spanValue.textContent = value);

const onClickBtnDecrement = () => refreshIface((counterValue -= 1));
const onClickBtnIncrement = () => refreshIface((counterValue += 1));

refs.btnDecrement.addEventListener("click", onClickBtnDecrement);
refs.btnIncrement.addEventListener("click", onClickBtnIncrement);
