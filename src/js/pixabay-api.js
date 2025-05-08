import axios from 'axios';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

let totalPages = 0;

export const getImages = async (searchQuery,page) => {
  const params = new URLSearchParams({
    key: '49926039-70f4c194fbb0b63068557ead5',
    page: page,
    per_page: 40,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: true,
  });
  const finishedURL = `https://pixabay.com/api/?${params.toString()}&q=${searchQuery}`;
  const result = (await axios.get(finishedURL)).data;
  totalPages = Math.ceil(result.totalHits / 40);
  return result;
};

export const loadMore = async (searchQuery, page) => {
  if (page > totalPages) {
    iziToast.info({
      message: "We're sorry, but you've reached the end of search results",
      position: 'topRight',
      timeout: 3000,
      iconUrl: '/goit-js-hw-12/error.png',
    });
    return;
  }
  const params = new URLSearchParams({
    key: '49926039-70f4c194fbb0b63068557ead5',
    page: page,
    per_page: 40,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: true,
  });
  const finishedURL = `https://pixabay.com/api/?${params.toString()}&q=${searchQuery}`;
  const result = (await axios.get(finishedURL)).data;
  return result;
}