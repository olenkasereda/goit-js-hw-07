import { galleryItems } from "./gallery-items.js";

const galleryImages = document.querySelector(".gallery");
const imagesMarkup = createGalleryItemsMarkup(galleryItems);

galleryImages.innerHTML = imagesMarkup;
galleryImages.addEventListener("click", onModalOriginalImage);

console.log(galleryItems);

function createGalleryItemsMarkup(images) {
  // функция для создания разметки, она должна соответсвовать
  return images // требованиям библиотеки
    .map(({ preview, original, description }) => {
      return `
       <a  class="gallery__link" data-fancybox="gallery" data-src="${original}">
        <img class="gallery__image" src="${preview}" data-caption="${description}"/>
      </a>
      `;
    })
    .join("");
}

Fancybox.bind('[data-fancybox="gallery"]', {
  infinite: false,
});
