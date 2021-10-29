const ingredients = ["Potatoes", "Mushrooms", "Garlic", "Tomatos", "Herbs", "Condiments"];

const list = document.querySelector("#ingredients");

list.append(
	...ingredients.map(ingridient => {
		const item = document.createElement("li");
		item.textContent = ingridient;
		item.className = "item";
		return item;
	})
);
