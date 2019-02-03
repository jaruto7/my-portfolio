// Stwórz zmienną stałą przechowującą obiekty slidera
const slideList = [{
    img: "images/motto.jpg",
    text: "Sukces jest wtedy gdy okazja spotyka się z przygotowaniem.",
    author: "Jimmy Johnson"
  },
  {
    img: "images/motto2.jpg",
    text: "Do sukcesu nie ma windy, trzeba iść po schodach.",
    author: "Emil Oesch"
  },
  {
    img: "images/motto3.jpg",
    text: "Tańcz tak, jakby nikt nie patrzył. Śpiewaj tak, jakby nikt nie słuchał. Kochaj to co robisz jakby nikt się nigdy o tym nie dowiedział i żyj tak, jakby to niebo było na ziemi.",
    author: "Mark Twain"
  }
];

// Przypisz do zmiennych stałych pobrane elementy portfolio
const portfolioModal = document.querySelectorAll('.portfolio .project');
// Pobierz element modala i zapisz w zmiennej stałej
const modalImage = document.querySelector('.modal-wrap .middle img');
const modalHref = document.querySelector('.modal-wrap .middle a');
// Przypisz do zmiennych stałych elementy slidera
const image = document.querySelector('img.slider');
const h1 = document.querySelector('p.text');
const author = document.querySelector('p.author');
// Zamień węzły listy na obiekt tablicy aby użyć metody finIndex w funkcji changeDot() i pobierz wszystkie kropki znajdujące się w elemencie span
const dots = [...document.querySelectorAll('.dots span')];

// Interfejs
// Ustaw czas i zapisz w zmiennej (tysiąc milisekund = 1 sekunda)
const time = 13000;
// Ustaw zmienną która będzie pełniła rolę indexu tablicy i przypisz jej wartość poczatkową 
let activeSlide = 0;

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

// Stwórz funkcję która przechowuje odwołanie do indexu konkretnego obiektu listy slidera
const setSlideList = () => {
  image.src = slideList[activeSlide].img;
  h1.textContent = slideList[activeSlide].text;
  author.textContent = slideList[activeSlide].author;
  // wywołaj funkcję odpowiedzialną za zmianę położenia kropek w sliderze 
  changeDot();
  // przypisz aktualny index aby setInterval się włączył ponownie za każdym razem gdy funkcja setSlideList jest wywołana
  indexInterval = setInterval(changeSlide, time);
}

// Stwórz funkcję anonimową która odpowiada za zmianę położenia kropek w sliderze 
const changeDot = () => {
  // Użyj metody findIndex aby przeszukać elementy które zawierają klasę active i zwróć numer indexu do nowej zmiennej stałej
  const activeDot = dots.findIndex(dot => dot.classList.contains('active'));
  // Wyszukaj zwrócony index elementu kropki i zabierz jej klasę 
  dots[activeDot].classList.remove('active');
  // Dodaj klasę następnemu elementowi który jej nie ma
  dots[activeSlide].classList.add('active');
}

// Stwórz zmienną która będzie przełączać slider po określonym czasie
const changeSlide = () => {
  // Inkrementuj index tablicy
  activeSlide++;
  // Jeśli index tablicy jest równy długości tablicy to przypisz wartość początkową aby wrócić do 1 elementu tablicy
  if (activeSlide === slideList.length) {
    activeSlide = 0;
  }
  // Przypisz wartości elementom tablicy obiektu aby podmienić elementy za każdym razem gdy funkcja jest wywoływana
  image.src = slideList[activeSlide].img;
  h1.textContent = slideList[activeSlide].text;
  author.textContent = slideList[activeSlide].author;
  // Wywołaj funkcję która odpowiada za położenie kropek w sliderze
  changeDot();
}

const checkSlider = () => {
  // Jeśli index tablicy jest równy długości tablicy to przypisz wartość początkową
  if (activeSlide === slideList.length) {
    activeSlide = 0;
    // Jeśli zmienna jest mniejsza niż zero to przypisz jej długość tablicy minus 1 aby równał się indexowi tablicy która przechowuje właściwą ilość obiektów tej tablicy
  } else if (activeSlide < 0) {
    activeSlide = slideList.length - 1;
  }
  setSlideList();
}

// Ustaw zmienną i przypisz metodę setInterval która będzie się wykonywać ciągle po określonym czasie
let indexInterval = setInterval(changeSlide, time);

// Stwórz funkcję anonimową odpowiedzialną za przełączanie strzałki slidera w prawo
const goForward = () => {
  // preinkrementuj zmienną odp. za nr. indexu tablicy
  ++activeSlide;
  // Wyczyść i zatrzymaj interwał i przekaż index interwału aby nie powodował konfliktu z interwałem przy przełączaniu slidera
  clearInterval(indexInterval);
  // Wywołaj funkcję sprawdzającą czy długość tablicy odpowiada długości elementom indexu tablicy
  checkSlider();
}

// Stwórz funkcję anonimową odpowiedzialną za przełączanie strzałki slidera w lewo
const goBack = () => {
  // console.log(activeSlide);
  // Predekrementuj zmienną odp. za nr. indexu tablicy
  --activeSlide;
  clearInterval(indexInterval);
  checkSlider();
}

//Użyj metody forEach aby iterować elementy portfolio i nasłuchuj na zdarzenie kliknięcia przez użytkownika
portfolioModal.forEach(img => img.addEventListener('click', clickModal));
// Pobierz element odpowiedzialny za zamykanie modala i nasłuchuj na zdarzenie kliknięcia
document.querySelector('span.close').addEventListener('click', closeModal);
// Pobierz obrazki strzałek slidera i nasłuchuj na ich kliknięcie 
document.querySelector('div.trans-right').addEventListener('click', goForward);

document.querySelector('div.trans-left').addEventListener('click', goBack);