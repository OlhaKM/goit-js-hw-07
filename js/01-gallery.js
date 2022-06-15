import { galleryItems } from './gallery-items.js';
// Change code below this line
const galleryEl = document.querySelector('.gallery');
const imagesEl = galleryItems.map(({preview, description, original}) => 
`<div class="gallery__item">
<a class="gallery__link" href="${original}">
  <img
    class="gallery__image"
    src="${preview}"
    data-source="${original}"
    alt="${description}"
  />
</a>
</div>`).join("");
galleryEl.insertAdjacentHTML('beforeend', imagesEl);
galleryEl.addEventListener('click', modalIn);
function  modalIn(event){
  event.preventDefault();
  const isImage = event.target.classList.contains('gallery__image');
  if(!isImage){
    return;
  };
  const instance = basicLightbox.create(`
            <img class="gallery__image" src="${event.target.dataset.source}">`);
  instance.show()
};