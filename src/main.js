import {getImages, loadMore} from './js/pixabay-api';
import {
  createGallery,
  clearGallery,
  showButton,
  hideButton,
  showLoader,
  hideLoader,
  gallery,
} from './js/render-functions';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const form = document.querySelector('.form');
const input = document.querySelector('.input');
const loadingButton = document.querySelector('.loading-button');
let inputValue;

form.addEventListener('submit', async e => {
  inputValue = input.value;
  e.preventDefault();
  clearGallery();
  showLoader();
  hideButton();
  if (inputValue.trim() === '') {
    hideLoader();
    return iziToast.error({
      message:
        'Sorry, there are no images matching your search query. Please try again!',
      position: 'topRight',
      timeout: 3000,
      iconUrl: '/goit-js-hw-12/error.png',
    });
  }
  const images = await getImages(inputValue.trim());
    if (images.length <= 0) {
      hideLoader();
      form.reset();
      return iziToast.error({
        message:
          'Sorry, there are no images matching your search query. Please try again!',
        position: 'topRight',
        timeout: 3000,
        iconUrl: '/goit-js-hw-12/error.png',
      });
    }
    createGallery(images, 'afterbegin');
    showButton();
    hideLoader();
    form.reset();
});

loadingButton.addEventListener('click', async () => {
  hideButton();
  showLoader();
  try {
    const images = await loadMore(inputValue.trim());
    createGallery(images, 'beforeend');
    hideLoader();
    showButton();
  } catch (error) {
    hideLoader();
    hideButton();
    return;
  }
  const { height:cardHeight } = gallery.firstElementChild.getBoundingClientRect();
  console.log(cardHeight);
  let options={
    top: cardHeight*2,
    left: 0,
    behavior: 'smooth',
  };
  window.scrollBy(options)
});