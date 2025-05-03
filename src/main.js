import { getImages,resetRequest } from "./js/pixabay-api";
import { createGallery, resetGallery } from "./js/render-functions";
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';


const form = document.querySelector(".form");
const input = document.querySelector(".input");


form.addEventListener("submit", async (e) => {
    e.preventDefault();
    resetGallery();
    resetRequest();
    if(input.value.trim() === ""){
      return iziToast.error({
        message:
          'Sorry, there are no images matching your search query. Please try again!',
        position: 'topRight',
        timeout: 3000,
        iconUrl: '/error.png',
      });
    }
    const images = await getImages(input.value.trim());
    if (images.length <= 0) {
        form.reset();
      return iziToast.error({
        message:
          'Sorry, there are no images matching your search query. Please try again!',
        position: 'topRight',
        timeout: 3000,
        iconUrl: '/error.png',
      });

    }
    createGallery(images);
    form.reset();
})