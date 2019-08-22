export const siteMenu = () => {
  const switcher = document.querySelector(`.menu__switcher`);
  const menu = document.querySelector(`.menu`);
  const commonBlock = document.querySelector(`.common-block`);

  const mediaMobile = 1200;

  function onWindow() {
    switcher.classList.remove(`hidden`);
    if (window.innerWidth > mediaMobile) {
      switcher.classList.add(`hidden`);
      commonBlock.classList.add(`hidden`);
    }
  }

  function onSwitcherClick() {
    menu.classList.toggle(`is-active`);
    switcher.classList.toggle(`is-active`);
    commonBlock.classList.remove(`hidden`);
  }

  switcher.addEventListener(`click`, onSwitcherClick);
  window.addEventListener(`load`, onWindow);
  window.addEventListener(`resize`, onWindow);
};
