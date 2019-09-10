import {MEDIA} from "../constants/constants";

export const siteMenu = () => {
  const switcher = document.querySelector(`.menu__switcher`);
  const menu = document.querySelector(`.menu`);
  const commonBlock = document.querySelector(`.common-block`);
  const links = document.querySelectorAll(`.menu__link`);

  function onWindow() {
    menu.classList.add(`menu--animated`);

    switcher.classList.remove(`hidden`);
    if (window.innerWidth > MEDIA.MD) {
      switcher.classList.add(`hidden`);
      commonBlock.classList.add(`hidden`);
    }
  }

  function onSwitcherClick() {
    menu.classList.toggle(`is-active`);
    switcher.classList.toggle(`is-active`);
    commonBlock.classList.remove(`hidden`);
  }

  function onLinkMouseover() {
    document.body.classList.add(`menu-hovered`);
  }

  function onLinkMouseout() {
    document.body.classList.remove(`menu-hovered`);
  }

  switcher.addEventListener(`click`, onSwitcherClick);
  window.addEventListener(`load`, onWindow);
  window.addEventListener(`resize`, onWindow);

  [...links].map((el) => {
    el.addEventListener(`mouseover`, onLinkMouseover);
    el.addEventListener(`mouseout`, onLinkMouseout);
  });

};
