function checkMe() {
    var errors = "";

    //Έλεγχος εισόδου του χρήστη στο πεδίο του Username
    username = document.getElementById("username");
    if (/^([a-zA-Z0-9_]{3,15})+$/.test(username.value)) {
        username.style = "";
    } else {
        username.style = "border: 3px dotted red;";
        errors += "\n\nError: Your username must have at least 3 characters and contain latin letters, numbers or an underscore. ";
    }

    birthyear = document.getElementById("birthyear");
    if (cpCheck) {
        if (!/^(19[0-9][0-9])|(20([0-1][0-9]|2[0-2]))+$/.test(birthyear.value)) {
            birthyear.style = "border: 3px dotted red;";
            errors += "\n\nBirthyear must be a four digit number between 1900 - 2022";
        } else {
            birthyear.style = "";
        }
    } 

    stars = document.getElementById("star-rating");
    if(stars.value === "") {
        errors += "\n\nYou must give a star rating for the song above";
    }

    //Εκτύπωση των λαθών της φόρμας, σε περίπτωση που έχει
    if (errors.length > 0) {
        alert(errors);
    }

    //Αποστολή των δεδομένων της φόρμας, αν δεν έχει λάθη, έχει πατηθεί το login button κουμπί και έχουν συμπληρωθεί τα 2 checkbox πεδία
    if (errors.length == 0) {
        document.getElementById("rateNew").submit();
    }
}

document.getElementById("btn2").addEventListener("click", function () { checkMe(); });

//

function createStars(stars, domTarget) {
    for (let i = 0; i < stars; i++) {
        let star = document.createElement('img');
        star.id = (i + 1).toString();
        star.src = './img/ystar.png';
        star.alt = "*";
        document.getElementById(domTarget).append(star);
    }
}

createStars(5, 'rating');

var isClicked = false;
var clickedStar;

// -- Styling functions Start --
function makeItShineBabyyy(element) {
    element.style.filter = "saturate(275%) brightness(100%) drop-shadow(0 0 0.2rem rgba(251, 255, 0, 0.6))";
    element.style.animation = "shine 0.2s linear normal forwards";
}

function brighten(element) {
    element.style.filter = "saturate(105%) brightness(85%)";
}

function darken(element) {
    element.style.filter = "saturate(50%) brightness(50%)";
}

function deshine(element) {
    element.style.animation = "";
    element.style.filter = "saturate(65%) brightness(90%) drop-shadow(0 0 0.2rem rgba(211, 215, 0, 0.4))";
}

function shine(element) {
    element.style.animation = "";
    element.style.filter = "saturate(275%) brightness(100%) drop-shadow(0 0 0.2rem rgba(251, 255, 0, 0.6))";
}

// -- Styling functions end --

//Dim and brighten stars according to the current star the mouse is hovering over
function properSelectStars(currentStar, mode) {
    if (mode === false) {
        //Brighten current and all stars to the left of the cursor yellow
        for (let i = currentStar.id; i > 0; i--) {
            brighten(document.getElementById(i));
        }

        //Darken current and all stars to the right of the cursor
        for (let j = currentStar.id; j <= 5; j++) {
            darken(document.getElementById(j));
        }

        //Brighten current star again due to overlap
        brighten(document.getElementById(currentStar.id));
    } else {
        if (currentStar.id <= clickedStar) {

            //Visual fix
            if (currentStar.id === clickedStar && currentStar.id != 5) {
                let nextStar = Number(currentStar.id) + 1
                darken(document.getElementById(nextStar));
            }

            for (let i = currentStar.id; i > 0; i--) {
                shine(document.getElementById(i));
            }
            for (let j = currentStar.id; j <= clickedStar; j++) {
                deshine(document.getElementById(j));
                console.log(document.getElementById(j));
            }
            shine(document.getElementById(currentStar.id));
        } else {
            for (let i = currentStar.id; i > clickedStar; i--) {
                brighten(document.getElementById(i));
            }
            for (let j = currentStar.id; j <= 5; j++) {
                darken(document.getElementById(j));
            }
            brighten(document.getElementById(currentStar.id));
        }
    }
}

//
document.getElementById('rating').addEventListener('mouseover', function () {
    var currentStar = document.querySelector("#rating :hover");
    if (currentStar) {
        currentStar.style.cursor = "pointer";

        properSelectStars(currentStar, isClicked)

        currentStar.addEventListener('click', function () {
            isClicked = true;
            clickedStar = currentStar.id;
            document.getElementById("star-rating").value = clickedStar;
            for (let i = currentStar.id; i > 0; i--) {
                makeItShineBabyyy(document.getElementById(i));
            }
            for (let i = clickedStar; i <= 5; i++) {
                darken(document.getElementById(i));
            }
        });
    }
});

document.getElementById('rating').addEventListener('mouseout', function () {
    if (!isClicked) {
        for (let i = 1; i <= 5; i++) {
            darken(document.getElementById(i));
        }
    } else {
        for (let i = clickedStar; i <= 5; i++) {
            darken(document.getElementById(i));
        }
        for (let i = clickedStar; i > 0; i--) {
            shine(document.getElementById(i));
        }
    }
});

cpCheck = false;

document.getElementById('checkmark').addEventListener('click', function () {
    console.log("123", document.querySelector("label[for=birthyear]"));
    setTimeout(function () {
        cpCheck = true;
        document.querySelector('.checkbox').remove();
        document.querySelector('div > p').remove();

        document.querySelector("#byform").style.display = 'flex';
        document.querySelector('#birthyear').required = true
    }, 1200);
});