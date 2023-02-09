import { galleryItems } from './gallery-items.js';
// Change code below this line

const galeryElem = document.querySelector(".gallery");

const galeryCards = ({ preview, original, description }) => `
<a class="gallery__item" href="${original}"> 
    <img class="gallery__image" src="${preview}" alt="${description}" title="${description}" rel = "noreferrer noopener" />
</a>`;

const galeryMarckup = galleryItems.map(galeryCards).join("");

galeryElem.insertAdjacentHTML("afterbegin", galeryMarckup);

let gallery = new SimpleLightbox('.gallery a', { 
    overlayOpacity: 0.5,
    captions: true,
    captionSelector: "img",
    captionsData: "title",
    captionPosition: "bottom",
    captionDelay: 200,
    animationSpeed: 300,
    // loop: true,
});
gallery.on('error.simplelightbox', function (e) {
	console.log(e); 
});