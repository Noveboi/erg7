//Functionability for audio snippets
const belowBox = document.getElementById('below');
const forcedBox = document.getElementById('forced');
const rewindBox = document.getElementById('rewind');

const BELO = 1;
const WITH = 2;
const FORC = 3;

belowAudio = new Audio("../audio/below.mp3");
rewindAudio = new Audio("../audio/fence.mp3");
forcedAudio = new Audio("../audio/forced_entry.mp3");

let audioIsPlaying = false;
let vol = 1.0;
let currentlyPlaying = 0; // 0 - nothing | 1 - below | 2 - within my fence | 3 - forced entry

//Play audio iff there's no other audio source playing
function PlayAudio(audio, id) {
	if (!audioIsPlaying) {
		audio.play();
		audioIsPlaying = true;
	}
	else if (audioIsPlaying && currentlyPlaying === id) {
		audio.pause();
		audioIsPlaying = false;
	}
	else if (audioIsPlaying && currentlyPlaying != id) {
		audio.load();
		audioIsPlaying = false;
	}
}

//Identify corresponding element and play the audio accordingly
function CheckAndPlay(box) {
	if (box === belowBox) {
		PlayAudio(belowAudio, BELO);
		currentlyPlaying = BELO;
	}
	else if (box === rewindBox) {
		PlayAudio(rewindAudio, WITH);
		currentlyPlaying = WITH;
	}
	else if (box === forcedBox) {
		PlayAudio(forcedAudio, FORC);
		currentlyPlaying = FORC;
	}
}

//For MouseWheel
function checkScrollDirIsUp(e) {
	let delta;
	if (e.wheelDelta) {
		delta = e.wheelDelta;
	} else {
		delta = -1 * e.deltaY;
	}

	if (delta > 0) return true;
	return false;
}

function adjustVolume(audio, e) {
	if (checkScrollDirIsUp(e)) {
		if (vol < 1) {
			vol += 0.1;
			console.log(vol);
			audio.volume = vol;
		}
	} else {
		if (vol > 0.1) {
			vol -= 0.1;
			console.log(vol);
			audio.volume = vol;
		}
	}
}

function noScroll() {
	//Get scroll pos
	scrollTop = window.pageYOffset || document.documentElement.scrollTop;
	scrollLeft = window.pageXOffset || document.documentElement.scrollLeft;

	//If scroll is attempted, reset pos
	window.onscroll = function () {
		window.scrollTo(Math.round(scrollLeft), Math.round(scrollTop));
		console.log("noscroll triggered");
	}
}

if (belowBox && forcedBox && rewindBox) {
	//Click events
	belowBox.addEventListener('click', function () {
		CheckAndPlay(belowBox);
	})

	rewindBox.addEventListener('click', function () {
		CheckAndPlay(rewindBox);
	})

	forcedBox.addEventListener('click', function () {
		CheckAndPlay(forcedBox);
	})

	//Scroll events
	belowBox.addEventListener('wheel', function (e) {
		if (audioIsPlaying) {
			adjustVolume(belowAudio, e);
			noScroll();
		}
	});

	rewindBox.addEventListener('wheel', function (e) {
		if (audioIsPlaying) {
			adjustVolume(rewindAudio, e);
			noScroll();
		}
	});

	forcedBox.addEventListener('wheel', function (e) {
		if (audioIsPlaying) {
			adjustVolume(forcedAudio, e);
			noScroll();
		}
	});

} else console.log("Elements are null!");
