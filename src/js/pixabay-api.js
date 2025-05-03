import axios from "axios";

const URL = "https://pixabay.com/api/"
const key = '49926039-70f4c194fbb0b63068557ead5';
export let request = 1;

export const getImages = async (input) => {
    const finishedURL = `${URL}?key=${key}&q=${input}&image_type=photo&orientation=horizontal&safesearch=true&page=${request}&per_page=40`;
    request++;
    return (await axios.get(finishedURL));
}
export const resetRequest = () => {
    return request = 1;
}