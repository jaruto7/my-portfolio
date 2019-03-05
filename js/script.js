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
  const slideRight = document.querySelector('.slide-right');
  const gallery = document.querySelector('.slider');
  const galleryFromTop = gallery.offsetTop;
  const galleryHeight = gallery.offsetHeight;
  const windowLeftHeight = slideLeft.clientHeight;
  const windowRightHeight = slideRight.clientHeight;
  const windowGalleryHeight = gallery.clientHeight;
  const scrollValue = window.scrollY;
  // console.log(windowHeight)

  const slideLeftFromTop = slideLeft.offsetTop;
  const slideLeftHeight = slideLeft.offsetHeight;

  const slideRightFromTop = slideRight.offsetTop;
  const slideRightHeight = slideRight.offsetHeight;

  // Sprawdź czy wartość naszego scrolla jest większa od odległości naszego elementu div plus jego wysokość
  //Pozycja scrolla nigdy sie nie pojawi gdy strona nie jest wieksza jak okno przegladarki wiec musimy od tego odjac ponownie wysokosc okna przegladarki
  // Pierwsze okno przegladarki nie jest scrollowane poniewaz te okno od razu jest widoczne przy zaladowaniu strony dlatego musimy odjac wysokosc okna przegladarki ponownie bo elementy ktorym chcemy nadac klase sa pod oknem przegladarki domyslnie
  if (scrollValue > slideLeftFromTop + slideLeftHeight - windowLeftHeight * 2.5) {
    slideLeft.classList.add('active');
  }

  if (scrollValue > slideRightFromTop + slideRightHeight - windowRightHeight * 2.9) {
    slideRight.classList.add('active');
  }

  if (scrollValue > galleryFromTop + galleryHeight - windowGalleryHeight * 2) {
    gallery.classList.add('active');
  }

  if (scrollValue < 100) {
    slideLeft.classList.remove('active');
    slideRight.classList.remove('active');
    gallery.classList.remove('active');
  }
})