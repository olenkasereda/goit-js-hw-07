import { galleryItems } from "./gallery-items.js";
// Change code below this line

const galleryImages = document.querySelector(".gallery");
const imagesMarkup = createGalleryItemsMarkup(galleryItems);

function createGalleryItemsMarkup(images) {
  return images
    .map(({ preview, original, description }) => {
      return `
        <a class="gallery__item" href="${original}">
        <img class="gallery__image" src="${preview}" alt="${description}" />
        </a>      `;
    })
    .join("");
}

galleryImages.innerHTML = imagesMarkup;

var lightBox = new SimpleLightbox(".gallery .gallery__item", {
  captionsData: "alt",
  captionDelay: 250,
});
