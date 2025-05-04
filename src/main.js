import {
  getImages,
  increaseRequest,
  request,
  resetRequest,
} from './js/pixabay-api';
import {
  createGallery,
  resetGallery,
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
  resetGallery();
  showLoader();
  resetRequest();
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
  try {
    const images = (await getImages(inputValue.trim())).data.hits;
    createGallery(images, 'afterbegin');
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
    showButton();
    hideLoader();
  } catch (error) {
    iziToast.error({
      message: `a:${error.message}`,
      position: 'topRight',
      timeout: 3000,
      iconUrl: '/goit-js-hw-12/error.png',
    });
  }
  form.reset();
});

loadingButton.addEventListener('click', async () => {
  hideButton();
  showLoader();
  increaseRequest();
  const images = await getImages(inputValue.trim());
  if (images.data.totalHits < request*40) {
    hideLoader();
    hideButton();
    return iziToast.info({
      message: "We're sorry, but you've reached the end of search results",
      position: 'topRight',
      timeout: 3000,
      iconUrl: '/goit-js-hw-12/error.png',
    });
  }
  createGallery(images.data.hits, 'beforeend');
  hideLoader();
  showButton();
  const position = gallery.getBoundingClientRect();
  let options={
    top: position.bottom,
    left: 0,
    behavior: 'smooth',
  };
  window.scrollBy(options)
});
