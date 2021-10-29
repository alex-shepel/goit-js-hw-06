const items = document.querySelector("#categories").children;

console.log(`Number of categories: ${items.length}`);

[...items].map(item => {
	console.log("");
	console.log(`Category: ${item.querySelector("h2").textContent}`);
	console.log(`Elements: ${item.querySelector("ul").children.length}`);
});
