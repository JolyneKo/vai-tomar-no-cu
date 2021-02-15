const icon = document.querySelector('.icon');
const texto = document.querySelector('.texto');
const bg = document.querySelector('.bg');

window.addEventListener('scroll', e => {
  let valueScroll = window.scrollY;
  icon.style.backgroundSize = 100 + valueScroll * 2 + 'px';
  
  if (valueScroll > 3000) {
    texto.style.transform = 'translateX(0)'
  } else {
    texto.style.transform = 'translateX(-2000px)'
  }
});

icon.addEventListener('click', e => {
  if (icon.style.backgroundSize > '5500px') 
    bg.style.opacity = '100%';
});