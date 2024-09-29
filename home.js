let dino = document.querySelector('.dino');

function changeHero(hero) {
  sessionStorage.setItem('hero', hero);
  window.location.replace('/index.html')
}
