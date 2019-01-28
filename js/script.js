const portfolioModal = document.querySelectorAll('.portfolio .project');

const modalImage = document.querySelector('.modal-wrap .middle img');
const modalHref = document.querySelector('.modal-wrap .middle a');

const clickModal = function () {
  const getImg = this.querySelector('.web img').getAttribute('src');
  const getHref = this.querySelector('.web a').getAttribute('href');
  modalImage.src = getImg;
  modalHref.href = getHref;
  document.querySelector('.modal-wrap').classList.toggle('active');
  document.querySelector('#wrapper').classList.toggle('blur');
}

const closeModal = () => {
  document.querySelector('.modal-wrap').classList.toggle('active');
  document.querySelector('#wrapper').classList.toggle('blur');
}

portfolioModal.forEach(img => img.addEventListener('click', clickModal));

document.querySelector('span.close').addEventListener('click', closeModal);