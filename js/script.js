const portfolioModal = document.querySelectorAll('.portfolio .project');

const image = document.querySelector('.modal-wrap .middle img');

const clickModal = function () {
  let img = this.querySelector('.web img').getAttribute('src');
  image.src = img;
  document.querySelector('.modal-wrap').classList.toggle('active');
  document.querySelector('#wrapper').classList.toggle('blur');

}

const closeModal = () => {
  document.querySelector('.modal-wrap').classList.toggle('active');
  document.querySelector('#wrapper').classList.toggle('blur');
}

portfolioModal.forEach(img => img.addEventListener('click', clickModal));

document.querySelector('span.hide').addEventListener('click', closeModal);