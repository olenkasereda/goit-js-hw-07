import { galleryItems } from "./gallery-items.js";

// Change code below this line
const galleryImages = document.querySelector(".gallery");
const imagesMarkup = createGalleryItemsMarkup(galleryItems);

galleryImages.innerHTML = imagesMarkup;
galleryImages.addEventListener("click", onModalOriginalImage);

console.log(galleryItems);

function createGalleryItemsMarkup(images) {
  return images
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
  const { target } = e;
  // const target = e.target;
  e.preventDefault();
  if (!target.classList.contains("gallery__image")) {
    return;
  }
  const instance = basicLightbox.create(
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

  galleryImages.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      instance.close();
    }
  });

  //console.log("click");
}
