import { galleryItems } from './gallery-items.js';

console.log(galleryItems);

const gallery = document.querySelector(".gallery");

const renderCard = crateGalleryCard(galleryItems);

gallery.insertAdjacentHTML('beforeend',renderCard);

function crateGalleryCard(galleryItems) {

    return galleryItems.map(({preview, original, description}) => {
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
        </div>`
    }).join("");

}

function onImageClick(event) {
    event.preventDefault(); 
    const galleryCard = event.target.classList.contains('gallery__image');
    
    if (!galleryCard) {
        return;
    }

    const instance = basicLightbox.create(`
    <img src="${event.target.dataset.source}" width="800" height="600">`,
    {onShow: () => {document.addEventListener('keydown', closeInstance)}}, 
    {onClose: () => {document.removeEventListener('keydown', closeInstance)}}
    );

    instance.show();

    function closeInstance(event) {
    if(event.key === "Escape"){
        instance.close();
    }
}
}



gallery.addEventListener('click', onImageClick);