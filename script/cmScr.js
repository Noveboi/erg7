function createStars (stars, album) {
    for(let i = 0; i < stars; i++) {
        var star = document.createElement('img');
        star.src = "./img/ystar.png";
        star.alt = stars.toString() + " stars";
        document.getElementById(album).appendChild(star);
    }
}

createStars(3, 'a1');
createStars(4, 'a2');
createStars(4, 'a3');