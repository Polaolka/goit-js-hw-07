import { galleryItems } from "./gallery-items.js";
const galeryElem = document.querySelector(".gallery");
let instance = null;

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
  evt.preventDefault;
  if (!evt.target.classList.contains("gallery__image")) {
    return;
  }
  const activeImg = evt.target;
  openModal(activeImg);
};
const openModal = (el) => {
  let src = el.dataset.source;
  let alt = el.getAttribute("alt");
  const originalIMG = `
  <img width="1280" src="${src}" alt="${alt}">
`;
  instance = basicLightbox.create(originalIMG);
  instance.show();
  window.addEventListener("keydown", handleEscPress);
};

const closeModalOnEscape = () => {
  window.removeEventListener("keydown", handleEscPress);
  instance.close();
};

const handleEscPress = (evt) => {
  const ESC_KEY_CODE = "Escape";
  const isEscKey = evt.code === ESC_KEY_CODE;
  if (isEscKey) {
    closeModalOnEscape();
  }
};
galeryElem.addEventListener("click", handlePreviewImgClick);
