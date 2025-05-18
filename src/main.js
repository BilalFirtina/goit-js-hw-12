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

let liElem;
let heightScroll = 0;
let inputData = '';
let page = 1;

//------------------ form handler -------------------------
form.addEventListener('submit', handleFormSubmit);

async function handleFormSubmit(e) {
  e.preventDefault();
  inputData = input.value.trim().toLowerCase();
  page = 1;
  if (!inputData) {
    iziToast.info({
      message: 'The input field is empty, try again.',
      position: 'topRight',
      timeout: 3000,
      iconUrl: '/goit-js-hw-12/error.png',
    });
    form.reset();
    return
  }
  gallery.innerHTML = "";
  showImages();
}
async function showImages() {
  showLoader();
  try {
    const data = await getImages(inputData, page);

    if (data.hits.length === 0) {
      iziToast.warning({
        message:
          'Sorry, there are no images matching your search query. Please try again!',
        position: 'topRight',
        timeout: 3000,
        iconUrl: '/goit-js-hw-12/error.png',
      });
      form.reset();
      return;
    }

    const images = data.hits;
    createGallery(images);
    liElem = document.querySelector('.image-li');
    heightScroll = liElem.getBoundingClientRect().height * 2;
    showButton();
    let maxPages = Math.ceil(data.totalHits / 40);
    if (maxPages === page) {
      hideButton();
      iziToast.info({
        message: "We're sorry, but you've reached the end of search results.",
        position: 'topRight',
        timeout: 3000,
        iconUrl: '/goit-js-hw-12/error.png',
      });
    }
  } catch (error) {
    iziToast.warning({
      message: 'An error occurred. Please try again later.',
      position: 'topRight',
      timeout: 3000,
      iconUrl: '/goit-js-hw-12/error.png',
    });
  } finally {
    hideLoader();
    form.reset();
  }
}

loadingButton.addEventListener("click",async () => {
  page++;
  hideButton();
  await showImages();
  scroll(0, heightScroll);
})

function scroll(x,y) {
  window.scrollBy({
    top: y,
    left: x,
    behavior: 'smooth',
  });
}