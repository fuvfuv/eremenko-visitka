export const galleryMasonry = () => {
  let container = document.querySelector(`#gallery`);
  let msnry = new Masonry(container, {
    // Настройки
    itemSelector: `.gallery-item`,
    gutter: 40,
    horizontalOrder: true,
    isResizeBound: true,
    fitWidth: true,
  });
};

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
      modal.style.display = `block`;
      modalWrapper.style.display = `block`;
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
