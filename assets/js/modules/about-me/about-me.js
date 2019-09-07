import $ from "jquery"; // если нужен jquery
import "slick-carousel";
import "jquery-mousewheel";
import "malihu-custom-scrollbar-plugin";

export function aboutMeSlider() {
  $(`.about-me__list`).slick({
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
  });
}

// export function customScrollSlides() {
//   $(window).on(`load`, function () {
//     $(`.about-me-wrapper`).mCustomScrollbar();
//   });
// }

export function slideSixView() {
  const sixDot = document.querySelector(`#slick-slide-control05`).parentNode;
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
