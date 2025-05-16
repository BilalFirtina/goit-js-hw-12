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
let searchText = '';
let currentPage = 1;
let totalHits = 0;

form.addEventListener('submit', formSubmit);
loadingButton.addEventListener('click', loadMore);

async function formSubmit(e) {
  e.preventDefault();
  searchText = input.value.trim();
  showLoader();
  hideButton(); // Galeri temizlenirken butonu da gizle
  gallery.innerHTML = '';

  if (!searchText) {
    hideLoader();
    return iziToast.error({
      message:
        'Sorry, there are no images matching your search query. Please try again!',
      position: 'topRight',
      timeout: 3000,
      iconUrl: '/goit-js-hw-12/error.png',
    });
  }

  input.value = '';
  input.placeholder = `En son arama: ${searchText}`;
  currentPage = 1;
  totalHits = 0;

  try {
    const images = await getImages(searchText, currentPage);
    hideLoader();

    if (!images || !images.hits || images.hits.length === 0) {
      return iziToast.info({
      message:
        'Sorry, there are no images matching your search query. Please try again!',
        position: 'topRight',
        timeout: 3000,
        iconUrl: '/goit-js-hw-12/error.png',
      });
    }

    totalHits = images.totalHits;
    handleSearchResults(images.hits);
  } catch (error) {
    hideLoader();
    iziToast.error({
      message: error.message,
      position: 'topRight',
      timeout: 3000,
      iconUrl: '/goit-js-hw-12/error.png',
    });
  }
}

async function loadMore() {
  currentPage += 1;
  showLoader();

  try {
    const images = await getImages(searchText, currentPage);
    hideLoader();

    if (!images || !images.hits || images.hits.length === 0) {
      hideButton(); // yeni sonuç yoksa butonu gizle
      return iziToast.info({
        message:
          'Sorry, there are no images matching your search query. Please try again!',
        position: 'topRight',
        timeout: 3000,
        iconUrl: '/goit-js-hw-12/error.png',
      });
    }

    handleSearchResults(images.hits);
  } catch (error) {
    hideLoader();
    iziToast.error({
      message: error.message,
      position: 'topRight',
      timeout: 3000,
      iconUrl: '/goit-js-hw-12/error.png',
    });
  }
}

function handleSearchResults(images) {
  if (!images.length) {
    hideLoader();
    hideButton();
    return iziToast.error({
      message:
        'Sorry, there are no images matching your search query. Please try again!',
      position: 'topRight',
      timeout: 3000,
      iconUrl: '/goit-js-hw-12/error.png',
    });
  }

  createGallery(images);
  const galleryLength = gallery.querySelectorAll('.image-li').length;

  if (galleryLength >= totalHits) {
    hideButton();
    iziToast.info({
      message: "We're sorry, but you've reached the end of search results.",
      position: 'topRight',
      timeout: 3000,
      iconUrl: '/goit-js-hw-12/error.png',
    });
  } else {
    showButton();
    smoothScroll();
  }

  hideLoader();
}

function smoothScroll() {
  const { height: cardHeight } =
    gallery.firstElementChild.getBoundingClientRect();
  window.scrollBy({
    top: cardHeight * 2,
    left: 0,
    behavior: 'smooth',
  });
}
