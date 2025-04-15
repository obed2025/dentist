import '@fontsource-variable/roboto';

document.addEventListener('DOMContentLoaded', initApp);

function initApp() {
  const servicesImageAndCardsEl = document.querySelector(
    '.services__image-and-cards'
  );
  const servicesCardsEl = document.querySelector('.services__cards');
  const servicesImageAndCardsElHeight =
    servicesImageAndCardsEl.getClientRects()[0].height;
  const servicesCardsElHeight = servicesCardsEl.getClientRects()[0].height;

  servicesImageAndCardsEl.style.setProperty(
    '--height-from-js',
    `${servicesImageAndCardsElHeight - servicesCardsElHeight / 2}px`
  );
}
