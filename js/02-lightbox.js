import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const gallery = document.querySelector(".gallery");

const renderCard = crateGalleryCard(galleryItems);

gallery.insertAdjacentHTML('beforeend',renderCard);



function crateGalleryCard(galleryItems) {

    return galleryItems.map(({preview,original,description}) => {
        return `
            <li><a class="gallery__item" href="${original}">
                <img
                    class="gallery__image"
                    src="${preview}"
                    alt="${description}"
                    title="${description}"
                />
            </a></li>
        `
    }).join("");
}

const lightbox = new SimpleLightbox(".gallery a", {
    captionsData: "alt",
    captionDelay: 250,
    captionType: "alt",
});