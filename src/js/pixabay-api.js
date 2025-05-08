import axios from 'axios';

export const getImages = async (searchQuery,page=1) => {
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
};