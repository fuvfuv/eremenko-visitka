import {MEDIA} from "../constants/constants";
import $ from "jquery"; // если нужен jquery
import "slick-carousel";
import "jquery-mousewheel";

const aboutBlockSlider = $(`.about-me__list`);

export function aboutMeSlider() {
  const dots = document.querySelector(`#about-me__slider-controls`);
  const swap = document.querySelector(`#fake-slider__slider-swap`);
  const arrow = document.querySelector(`#fake-slider__arrow`);
  aboutBlockSlider.on(`init`, function () {
    dots.style.display = `none`;
    swap.style.display = `inline-block`;
    arrow.style.display = `block`;
  });
  aboutBlockSlider.on(`afterChange`, () => {
    dots.style.display = `flex`;
    swap.style.display = `none`;
    arrow.style.display = `none`;
  });
  aboutBlockSlider.slick({
    slidesToShow: 1,
    adaptiveHeight: true,
    dots: true,
    dotsClass: `about-me__slider-bullets`,
    appendDots: $(`.about-me__slider-controls`),
    infinite: false,
    prevArrow: null,
    nextArrow: null,
    responsive: true,
    vertical: true,
    verticalSwiping: true,
    useTransform: true,
    // cssEase: `ease-in-out`,
  });
}

aboutBlockSlider.on(`mousewheel`, function (evt) {
  evt.preventDefault();
  if (evt.deltaX > 0 || evt.deltaY < 0) {
    $(aboutBlockSlider).slick(`slickNext`);
  } else if (evt.deltaX < 0 || evt.deltaY > 0) {
    $(aboutBlockSlider).slick(`slickPrev`);
  }
});

export function slideSixView() {
  const sixDot = document.querySelector(`#slick-slide-control06`).parentNode;
  let changeHeader = () => {
    const pageHeader = document.querySelector(`.header--about-me`);
    const slideSixHeader = document.querySelector(`.header--slideSix`);
    pageHeader.classList.add(`header--slideSix`);
    slideSixHeader.style.display = `flex`;
  };

  let basicHeader = () => {
    const pageHeader = document.querySelector(`.header--about-me`);
    const slideSixHeader = document.querySelector(`.header--slideSix`);
    pageHeader.classList.remove(`header--slideSix`);
    slideSixHeader.style.display = `none`;
    pageHeader.style.display = `flex`;
  };

  let observer = new MutationObserver((mutationRecords) => {
    mutationRecords.forEach((mutationObject) => {
      if (mutationObject.attributeName === `class`) {
        if (mutationObject.oldValue === `slick-active`) {
          basicHeader();
        } else if (mutationObject.target.className === `slick-active`) {
          changeHeader();
        }
      }
    });
  });
  observer.observe(sixDot, {
    attributes: true,
    attributeOldValue: true,
  });
}

// мобтльный слайдер
export function changeToMobileSlider() {
  let desktopView = document.querySelector(`.about-me-desk`);
  let mobileView = document.querySelector(`.about-me-mob`);
  if ($(window).width() < MEDIA.MD) {
    console.log(desktopView);
    console.log(mobileView);
    // desktopView.hide();
    // mobileView.show();
  }
}
