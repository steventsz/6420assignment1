document.getElementById("gjnz_container").addEventListener("dblclick", () => {
	let contextGjnz = document.getElementById("gjnz");
	let newSelf = contextGjnz.cloneNode(true);
	contextGjnz.replaceWith(newSelf);
});

