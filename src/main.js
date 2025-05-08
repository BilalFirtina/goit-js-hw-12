import {getImages} from './js/pixabay-api';
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
let page = 1;
let totalPages = 0;

form.addEventListener('submit', async e => {
  inputValue = input.value;
  e.preventDefault();
  clearGallery();
  showLoader();
  hideButton();
  page = 1;
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
  const images = (await getImages(inputValue.trim(), page));
  totalPages = Math.ceil(images.totalHits / 40);
  if (images.totalHits > 0 && images.totalHits < 40) {
    createGallery(images.hits);
    hideLoader();
    form.reset();
    return;
  }
  if (images.hits.length === 0) {
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
    createGallery(images.hits);
    showButton();
    hideLoader();
    form.reset();
});

loadingButton.addEventListener('click', async () => {
  showLoader();
  page += 1;
  if (page > totalPages) {
    iziToast.info({
      message: "We're sorry, but you've reached the end of search results",
      position: 'topRight',
      timeout: 3000,
      iconUrl: '/goit-js-hw-12/error.png',
    });
    hideLoader();
    hideButton();
    return;
  }


  try {
    const images = (await getImages(inputValue.trim(), page));
    createGallery(images.hits);
    hideLoader();
    showButton();
  } catch (error) {
    hideLoader();
    hideButton();
    return;
  }
  const { height:cardHeight } = gallery.firstElementChild.getBoundingClientRect();
  let options={
    top: cardHeight*2,
    left: 0,
    behavior: 'smooth',
  };
  window.scrollBy(options)
});