import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

const gallery = document.querySelector(".gallery");
const loader = document.querySelector(".loader-div");
const button = document.querySelector('.loading-button');
const lightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
});

export const createGallery = function (images,position) {
    const createdHtml = images.map(({ largeImageURL, webformatURL, tags, likes, views, comments, downloads }) => {
        return `<div class="img-div"><a href="${largeImageURL}"><img class="image" src="${webformatURL}" alt="${tags
          .split(',')
          .slice(0, 3)
          .join(',')}"></a>
    <section class="inner-section">
      <div class="info-div">
        <strong>Likes</strong>${likes}
      </div>
      <div class="info-div">
        <strong>Views</strong>${views}
      </div>
      <div class="info-div">
        <strong>Comments</strong>${comments}
      </div>
      <div class="info-div">
        <strong>Downloads</strong>${downloads}
      </div>
    </section></div>`;
    }).join("");
    gallery.insertAdjacentHTML(position, createdHtml);
    lightbox.refresh();
}
export const resetGallery = () => {
    gallery.innerHTML="";
}
export const showLoader = () => {
  loader.style.display = "flex";
}
export const showButton = () => {
  button.style.display = "block";
}
export const hideButton = () => {
  button.style.display = "none";
}
export const hideLoader = () => {
  loader.style.display = "none";
}