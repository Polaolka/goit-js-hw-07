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

galeryElem.addEventListener("click", onPreviewImgClick);

function onPreviewImgClick(evt) {
  if (!evt.target.classList.contains("gallery__image")) {
    return;
  }
  removeActiveImgClass();
  const activeImg = evt.target;
  addActiveImgClass(activeImg);

  openModal(activeImg);
}

function removeActiveImgClass() {
  const currentActiveImg = document.querySelector(".js-open-img");
  if (currentActiveImg) {
    currentActiveImg.classList.remove("js-open-img");
  }
}

function addActiveImgClass(el) {
  el.classList.add("js-open-img");
}

function openModal(el) {
  window.addEventListener('keydown', onEscPress());
  let src = el.dataset.source;
  let alt = el.getAttribute("alt");

  basicLightbox
    .create(
      `
    <img width="1280" src="${src}" alt="${alt}">
`, {	
	onShow: (instance) => {},
	onClose: (instance) => {}
}
    );
}
instance.show()
function onEscPress(evt) {
  if(evt.code === "Escape") {
    instance.close();
  }
  onCloseModal();
}
function onCloseModal() {
  window.removeEventListener('keydown', onEscPress())
}