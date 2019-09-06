import {MEDIA} from "../constants/constants";

export function galleryInnerSettings() {
  const pageHeader = document.querySelector(`.header--gallery-inner`);
  const likes = document.querySelector(`.likes--reverse`);

  const likesClone = likes.cloneNode(true);

  if (window.innerWidth < MEDIA.XS) {
    moveLikesToHeader();
  }

  function moveLikesToHeader() {
    likesClone.classList.add(`likes--reverse`);
    pageHeader.appendChild(likesClone);
    cutDomElement(likes);
  }

  function cutDomElement(el) {
    el.parentNode.removeChild(el);
  }
}

// модалка для фотогаллереи
export const galleryModal = () => {
  let modal = document.getElementById(`modal`);
  let modalWrapper = document.getElementById(`modalWrapper`);
  let openImg = document.getElementsByClassName(`gallery-item`);
  let close = document.getElementById(`close`);

  for (let i = 0; i < openImg.length; i++) {
    openImg[i].addEventListener(`click`, function (event) {
      event.preventDefault();
      let parentClass = event.currentTarget.classList[1];
      let imageInside = document.querySelector(`.${parentClass} > img`);
      let bigImg = imageInside.getAttribute(`src`);
      modal.style.background = null;
      modal.style.backgroundImage = `url(${bigImg})`;
      modal.style.top = window.pageYOffset + 175 + `px`;
      modal.style.display = `block`;
      modalWrapper.style.display = `block`;
      if (document.body.innerWidth < 990) {
        close.style.top = window.pageYOffset + 115 + `px`;
      } else {
        close.style.top = window.pageYOffset + 55 + `px`;
      }
      close.style.display = `block`;
    });
  }

  close.addEventListener(`click`, function () {
    modal.style.display = `none`;
    modalWrapper.style.display = `none`;
    close.style.display = `none`;
  });

  modalWrapper.addEventListener(`click`, function () {
    if (event.target === this) {
      modal.style.display = `none`;
      modalWrapper.style.display = `none`;
      close.style.display = `none`;
    }
  });
};
