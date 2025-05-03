import { getImages,resetRequest } from "./js/pixabay-api";
import { createGallery, resetGallery,showButton,hideButton, showLoader, hideLoader } from "./js/render-functions";
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';


const form = document.querySelector(".form");
const input = document.querySelector(".input");
const loadingButton = document.querySelector(".loading-button")
let inputValue;

form.addEventListener("submit", async (e) => {
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
        iconUrl: '/error.png',
      });
    }
    try {
        const images = await getImages(inputValue.trim());
        createGallery(images, 'afterbegin');
      if (images.length <= 0) {
          hideLoader();
          form.reset();
          return iziToast.error({
            message:
              'Sorry, there are no images matching your search query. Please try again!',
            position: 'topRight',
            timeout: 3000,
            iconUrl: '/error.png',
          });
        }
        showButton();
        hideLoader();
    } catch (error) {
        iziToast.error({
          message:`${error.message}`,
          position: 'topRight',
          timeout: 3000,
          iconUrl: './public/error.png',
        });
    }
    form.reset();
})

loadingButton.addEventListener("click", async () => {
  hideButton();
  showLoader();
    const images = await getImages(inputValue.trim());
  createGallery(images, "beforeend");
  hideLoader();
  showButton();

})