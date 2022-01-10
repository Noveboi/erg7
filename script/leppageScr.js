//Refresh once on page load for AJAX to work properly
window.onload = function() {
    if(!window.location.hash) {
        window.location = window.location + '#loaded';
        window.location.reload();
    }
}

//Functionability for audio snippets
const belowBox = document.getElementById('below');
const forcedBox = document.getElementById('forced');
const rewindBox = document.getElementById('rewind');
const memtext = document.getElementById('membertxt');

const BELO = 1;
const WITH = 2;
const FORC = 3;

belowAudio = new Audio("../audio/below.mp3");
rewindAudio = new Audio("../audio/fence.mp3");
forcedAudio = new Audio("../forced_entry.mp3");

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
		}
	});

	rewindBox.addEventListener('wheel', function (e) {
		if (audioIsPlaying) {
			adjustVolume(rewindAudio, e);
		}
	});

	forcedBox.addEventListener('wheel', function (e) {
		if (audioIsPlaying) {
			adjustVolume(forcedAudio, e);
		}
	});

} else console.log("Elements are null!");

function createStars (stars, domTarget) {
    var obj = document.getElementById(domTarget);
    for(i = 0; i < stars; i++) {
        starCropContainer = document.createElement('div');
        star = document.createElement('img');
        star.src = './img/ystar.png';
        star.alt = "*";
        obj.append(starCropContainer);
        starCropContainer.append(star);

        //Add unique class name to each star of each album
        names = obj.id + "_crop_" + Number(i+1);
        starCropContainer.id = names;
        starCropContainer.classList.add("crop");
    }

    if(!Number.isInteger(stars)) {
        //Select highest sta
        query = obj.id + "_crop_" + i;
        
        //Decide the crop amount
        widthPerc = ((stars * 10) % 10) /10;
        console.log(widthPerc);

        //Get cropping...
        document.getElementById(query).style.width = (35 * widthPerc) + "px";
    }
}


createStars(3.8, 'l1')
createStars(4.3, 'l2')
createStars(4.5, 'l3')