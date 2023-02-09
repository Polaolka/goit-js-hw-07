import { galleryItems } from "./gallery-items.js";
const galeryElem = document.querySelector(".gallery");

const galeryCards = ({ preview, original, description }) => `
<div class="gallery__item">
  <a class="gallery__link" href="#" rel = "noreferrer noopener", >
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</div>`;

const galeryMarckup = galleryItems.map(galeryCards).join("");

galeryElem.insertAdjacentHTML("afterbegin", galeryMarckup);

const handlePreviewImgClick = (evt) => {
  if (!evt.target.classList.contains("gallery__image")) {
    return;
  }

  const activeImg = evt.target;

  openModal(activeImg);
};
let instance = '';
const openModal = (el) => {
  let src = el.dataset.source;
  let alt = el.getAttribute("alt");
  const originalIMG = `
  <img width="1280" src="${src}" alt="${alt}">
`;
  instance = basicLightbox.create(originalIMG);
  instance.show();
  window.addEventListener('keydown', handleEscPress);
};


const handleWindowClick = (evt) => {
  if(evt.code === "Escape") {
    console.log("Escape");
  }
}

const closeModalOnEscape = () => {
  window.removeEventListener('keydown', handleWindowClick);
  // console.log(instance);
  instance.close();
}

const handleEscPress = (evt) => {
  const ESC_KEY_CODE = "Escape";
  // console.log("Escape");
  const isEscKey = evt.code === ESC_KEY_CODE;
  if (isEscKey) {
    closeModalOnEscape();
  }
}
galeryElem.addEventListener("click", handlePreviewImgClick);

