const pianoKeys = document.querySelectorAll(".piano-keys .key");

volumeSlider = document.querySelector(".volume-slider input");

keysCheckbox = document.querySelector(".keys-checkbox input");


//setting up Audio//
let allKeys = [],
audio = new Audio("/home/sabbath/Desktop/projos/virtual_piano/tunes/a.wav");

//this function sets the key desired sound e.g key C for audio. c.wav
const playTune = (key) => {
	audio.src = `tunes/${key}.wav`; //passing audio src based on pressed key
	audio.play(); //playing audio
	console.log(allKeys);

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



const handleVolume = (e) => {
	audio.volume = e.target.value; //passing the range slider value as an audio volume
}



const showHideKeys = () => {
	//toggling hide class from each key on the checkbox click
	pianoKeys.forEach(key => key.classList.toggle("hide"));
}




const pressedKey = (e) => {
	if (allKeys.includes(e.key)) playTune(e.key);
}
 

keysCheckbox.addEventListener("click", showHideKeys);
volumeSlider.addEventListener("input", handleVolume);
document.addEventListener("keydown", pressedKey);