//Refresh once on page load for AJAX to work properly
window.onload = function() {
    if(!window.location.hash) {
        window.location = window.location + '#loaded';
        window.location.reload();
    }
}

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

//For cmpage.hmtl
createStars(3.5, 'a1');
createStars(4, 'a2');
createStars(4.5, 'a3');

//Get average star rating from getStarRating.php
var xhr = new XMLHttpRequest;

xhr.onreadystatechange = function() {
    if(this.readyState == 4 && this.status == 200) {
        sessionStorage.setItem('rating', JSON.parse(this.responseText));
    }
};

xhr.open("get", "getStarRating.php", true);
xhr.send();

var rating = sessionStorage.getItem('rating');

createStars(rating, 'a4');

