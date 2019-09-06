export const galleryMasonry = () => {
  let container = document.querySelector(`#gallery`);
  let msnry = new Masonry(container, {
    // Настройки
    itemSelector: `.gallery-item`,
    gutter: `.gutter-width`,
    horizontalOrder: true,
    isResizeBound: true,
    fitWidth: true,
  });
};
