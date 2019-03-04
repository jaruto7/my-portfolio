// Interfejs

// Przypisz do zmiennych stałych pobrane elementy portfolio
const portfolioModal = document.querySelectorAll('.portfolio .project');
// Pobierz element modala i zapisz w zmiennej stałej
const modalImage = document.querySelector('.modal-wrap .middle img');
const modalHref = document.querySelector('.modal-wrap .middle a');

// Implementacja

// Wywołaj funkcję anonimową po kliknięciu w daną sekcję portfolio
const clickModal = function () {
  // Przypisz do zmiennych elementy i pobierz ich atrybuty w zależności od tego co użytkownik kliknął 
  const getImg = this.querySelector('.web img').getAttribute('src');
  const getHref = this.querySelector('.web a').getAttribute('href');
  // Odwołaj się do pobranych elementów i podmień ich zawartość atrybutów aby zmienić ścieżki obrazka i linku prowadzącego do Githuba 
  modalImage.src = getImg;
  modalHref.href = getHref;
  // Użyj metody toggle aby przełączać się pomiędzy klasami aby wyświetlić modal
  document.querySelector('.modal-wrap').classList.toggle('active');
  // Użyj toggle aby dodawać lub zabierać blur gdy modal zostanie aktywowany
  document.querySelector('#wrapper').classList.toggle('blur');
}

// Stwórz funkcję która odpowiada za zamknięcie modala
const closeModal = () => {
  // Użyj metody toggle aby zamknąć modal i wyłączyć blur jeśli jest aktywny
  document.querySelector('.modal-wrap').classList.toggle('active');
  document.querySelector('#wrapper').classList.toggle('blur');
}


//Użyj metody forEach aby iterować elementy portfolio i nasłuchuj na zdarzenie kliknięcia przez użytkownika
portfolioModal.forEach(img => img.addEventListener('click', clickModal));
// Pobierz element odpowiedzialny za zamykanie modala i nasłuchuj na zdarzenie kliknięcia
document.querySelector('span.close').addEventListener('click', closeModal);

document.addEventListener('scroll', function () {
  const slideLeft = document.querySelector('.slide-left');
  const windowSlideLeftHeight = slideLeft.clientHeight;
  const scrollSlideLeftValue = window.scrollY;
  const slideLeftFromTop = slideLeft.offsetTop;
  const slideLeftHeight = slideLeft.offsetHeight;

  const slideRight = document.querySelector('.slide-right');
  const windowSlideRightHeight = slideRight.clientHeight;
  const scrollSlideRightValue = window.scrollY;
  const slideRightFromTop = slideRight.offsetTop;
  const slideRightHeight = slideRight.offsetHeight;

  if (scrollSlideLeftValue > slideLeftFromTop + slideLeftHeight - windowSlideLeftHeight * 3) {
    slideLeft.classList.add('active');
  }

  if (scrollSlideRightValue > slideRightFromTop + slideRightHeight - windowSlideRightHeight * 2.5) {
    slideRight.classList.add('active');
  }



  if (scrollSlideLeftValue < 100 && scrollSlideRightValue < 100) {
    slideLeft.classList.remove('active');
    slideRight.classList.remove('active');
  }
})