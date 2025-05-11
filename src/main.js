import getImages from './js/pixabay-api';
import {
  createGallery,
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
  inputValue = input.value.trim();
  e.preventDefault();
  input.value ="";
  showLoader();
  hideButton();
  page = 1;
  if (inputValue === '') {
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
    const images = (await getImages(inputValue, page));
    totalPages = Math.ceil(images.totalHits / 40);
    handleImages(images.hits);
    createGallery(images.hits);
    checkButton(images.totalHits);
  } catch (error) {
    console.error(error.message)
  } finally {
    hideLoader();
  }
    showButton();
    hideLoader();
    form.reset();
});

function checkButton(images) {
  if (gallery.children.length === images) {
    hideLoader();
    form.reset();
    return;
  }
}

function handleImages(images) {
  if (images.length === 0) {
    form.reset();
    return iziToast.error({
      message:
        'Sorry, there are no images matching your search query. Please try again!',
      position: 'topRight',
      timeout: 3000,
      iconUrl: '/goit-js-hw-12/error.png',
    });
  }
}

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
    const images = (await getImages(inputValue, page));
    createGallery(images.hits);
    showButton();
  } catch (error) {
    console.error(error);
    hideButton();
    return;
  } finally {
    hideLoader();
  }
  const { height:cardHeight } = gallery.firstElementChild.getBoundingClientRect();
  let options={
    top: cardHeight*2,
    left: 0,
    behavior: 'smooth',
  };
  window.scrollBy(options)
});