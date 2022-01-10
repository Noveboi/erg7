function createStars (stars, domTarget) {
    for(let i = 0; i < stars; i++) {
        star = document.createElement('img');
        star.src = './img/ystar.png';
        star.alt = "*";
        document.getElementById(domTarget).append(star);
    }
}

//For cmpage.hmtl
createStars(3, 'a1');
createStars(4, 'a2');
createStars(4, 'a3');
