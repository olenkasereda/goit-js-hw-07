import { galleryItems } from "./gallery-items.js";

// Change code below this line
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
        <div class="gallery__item">
        <a class="gallery__link" href="${original}">
        <img
        class="gallery__image"
        src="${preview}"
        data-source="${original}"
      alt="${description}"
      />
      </a>
      </div>
      `;
    })
    .join("");
}

function onModalOriginalImage(e) {
  //функция для проверки и подключению библиотеки
  const { target } = e;
  // const target = e.target;
  e.preventDefault();
  if (!target.classList.contains("gallery__image")) {
    // усли ел-нт не имеет класс gallery__image, то выходим
    return;
  }
  const instance = basicLightbox.create(
    // если все ок подключаем библиотеку
    `   
        <div class="modal">
       <img
       src="${target.dataset.source}"
        width="800"
        height="600"
      />
    </div>
      `
  );
  instance.show();
  galleryImages.addEventListener("keydown", onEscKeyPress); //выход при нажатии Escape
  function onEscKeyPress(evt) {
    if (evt.key === "Escape") {
      instance.close();
      this.removeEventListener("keydown", onEscKeyPress); // снимаем слушателя событий с galleryImages при нажатии Escape
    }
  }
}
