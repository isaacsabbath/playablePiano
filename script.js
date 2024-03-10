const pianoKeys = document.querySelectorAll(".piano-keys .key")

//setting up Audio//
let allKeys = [],
audio = new Audio("/home/sabbath/Desktop/projos/virtual_piano/tunes/a.wav");

//this function sets the key desired sound e.g key C for audio. c.wav
const playTune = (key) => {
	audio.src = `tunes/${key}.wav`; //passing audio src based on pressed key
	audio.play(); //playing audio
	console,log(allKeys);

	const clickedKey = document.querySelector(`[data-key-"${key}"]`);
	clickedKey.classList.add("active");
	setTimeout(() => {
		clickedKey.classList.remove("active");
	
	}, 150);
}

  
pianoKeys.forEach(key => {
	allKeys.push(key.dataset.key)
	key.addEventListener("click", () => playTune(key.dataset.key));
});

const pressdKey = (e) => {
	playTune(e.key);
}
 
document.addEventListener("keydown", pressdKey);