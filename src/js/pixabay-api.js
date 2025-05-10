import axios from 'axios';
const getImages = async (query,page) => {
  const options = {
    params: {
    key: '49926039-70f4c194fbb0b63068557ead5',
    page: page,
    per_page: 40,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: true,
    q: query,
    }
  };
  try {
    const response = (await axios.get("https://pixabay.com/api/", options));
    return response.data;
  } catch (error) {
    console.log(error.message)
  }
};
export default getImages;