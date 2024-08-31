document.getElementById("gjnz_container").addEventListener("dblclick", () => {
	let contextGjnz = document.getElementById("gjnz");

	contextGjnz.classList.remove("gjnz-animation");
	void contextGjnz.offsetWidth; 
	contextGjnz.classList.add("gjnz-animation");
});
