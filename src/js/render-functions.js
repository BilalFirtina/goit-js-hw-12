import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

export const gallery = document.querySelector(".gallery");
const loader = document.querySelector(".loader-div");
const button = document.querySelector('.loading-button');
const lightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
});

export const createGallery = function (images) {
    const createdHtml = images.map(({ largeImageURL, webformatURL, tags, likes, views, comments, downloads }) => {
        return `<li class="image-li">
           <a href="${largeImageURL}"> <img class="li-img" src="${webformatURL}" alt="${tags
          .split(',')
          .slice(0, 3)
          .join(',')}"> </a>
          <div class="div-upper">
            <ul>
            <li>
              <div class="div-inner"><b>Likes</b>
            ${likes}</div>
            </li>

            <li>
             <div class="div-inner"><b>Views</b>
            ${views}</div>
            </li>

            <li>
              <div class="div-inner"><b>Comments</b>
            ${comments}</div>
            </li>

            <li>
             <div class="div-inner"><b>Downloads</b>
            ${downloads}</div>
            </li>

            </ul>
          </div>
        </li>`;
    }).join("");
  console.log(createdHtml);
    gallery.insertAdjacentHTML("beforeend", createdHtml);
  lightbox.refresh();
}
export const clearGallery = () => {
  gallery.innerHTML = "";
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