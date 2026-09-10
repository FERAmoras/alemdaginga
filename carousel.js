// Seleciona o track do carrossel
const track = document.querySelector('.carousel-track');
let index = 0;

function autoSlide() {
  index++;
  if (index >= track.children.length) {
    index = 0; // volta para a primeira imagem
  }
  track.style.transform = `translateX(-${index * 100}%)`;
}

// troca a cada 4 segundos
setInterval(autoSlide, 4000);

// Drop lateral
const imagens = document.querySelectorAll('.imagens-laterais img');
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightbox-img');

imagens.forEach(img => {
  img.addEventListener('click', () => {
    lightboxImg.src = img.src;
    lightbox.style.display = 'flex'; // mostra no centro
  });
});

lightbox.addEventListener('click', () => {
  lightbox.style.display = 'none'; // fecha ao clicar fora
});

