function replayparakai() {
	let s1 = document.getElementById("parakai_scene_1");
	let s2 = document.getElementById("parakai_scene_2");
	s1.style.display = "block";
	s2.style.display = "none";
	setTimeout(s1forwards2, 3000);
}

function s1forwards2() {
	let s1 = document.getElementById("parakai_scene_1");
	let s2 = document.getElementById("parakai_scene_2");
	s1.style.display = "none";
	s2.style.display = "block";
}

(function(){
	setTimeout(s1forwards2, 3000);

	let replay = document.getElementById("parakai");
	replay.addEventListener("dblclick", replayparakai);
})();