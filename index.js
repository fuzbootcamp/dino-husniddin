let dino = document.querySelector('.dino')

let cactus = document.querySelector('.cactus')

let count = document.querySelector('.count')

window.addEventListener('DOMContentLoaded', () => {
    dino.style.backgroundImage = `url('${sessionStorage.getItem(`hero`)}')`;
  });
  

function jump() {

    if(dispatchEvent.classList != 'jump') {

        dino.classList.add('jump')

        setTimeout(() => {

            dino.classList.remove('jump') ;

        }, 500) ;
    }
}


const funcLive = setInterval(() => {

    let dinoSakra = parseInt(

        window.getComputedStyle(dino).getPropertyValue('top')
    )

    let cactusChapga = parseInt(

        window.getComputedStyle(cactus).getPropertyValue('left')
    ) ;

    if (cactusChapga > 0 && cactusChapga < 60 && dinoSakra >= 150) {

        dino.computedStyleMap.animationPlayState = 'pause'

        alert("GAME OVER")

        window.location.replace('/home.html')

    }



}) ;


document.addEventListener('keydown', () => {

    jump(); 

    count.innerHTML++; 

    if (count.innerHTML >= 6) {

        cactus.computedStyleMap.animation = 'cactus 1.8s infinite linear';
    }

    else if (count.innerHTML >= 12) {

        cactus.computedStyleMap.animation = 'cactus 1.6s infinite linear'
    }

    else if (count.innerHTML >= 18) {

        cactus.computedStyleMap.animation = 'cactus 1.4s infinite linear'
    }

    else if (count.innerHTML >= 24) {

        cactus.computedStyleMap.animation = 'cactus 1.2s infinite linear'
    }

    else if (count.innerHTML >= 40) {

        cactus.computedStyleMap.animation = 'cactus 1.1s infinite linear'
    }

    else if (count.innerHTML >= 60) {

        cactus.computedStyleMap.animation = 'cactus 1.0s infinite linear'
    }

    else if (count.innerHTML >= 80) {

        cactus.computedStyleMap.animation = 'cactus 0.8s infinite linear'
    }

});