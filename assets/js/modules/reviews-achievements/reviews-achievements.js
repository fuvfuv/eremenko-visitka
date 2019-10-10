import $ from "jquery"; // если нужен jquery
import "slick-carousel";
import "jquery-mousewheel";
import "malihu-custom-scrollbar-plugin";

export function certificatesMsnry() {
  const container = document.querySelector(`.certificates`);
  const msnry = new Masonry(container, {
    itemSelector: `.certificates__item`,
    gutter: `.certificates__gap`,
    horizontalOrder: true,
    isResizeBound: true,
  });
}

export function reviewsSlider() {
  if ($(window).width() <= 991) {
    $(`.reviews__list`).slick({
      slidesToShow: 1,
      adaptiveHeight: true,
      dots: true,
      dotsClass: `reviews__slider-bullets`,
      appendDots: $(`.reviews__slider-controls`),
      infinite: false,
      prevArrow: null,
      nextArrow: null,
      responsive: true,
    });
  } else {
    $(`#items.slick-initialized`).slick(`unslick`);
  }
}

export function customScroll() {
  $(window).on(`load`, function () {
    $(`.reviews__body`).mCustomScrollbar();
  });

  $(window).on(`load`, function () {
    $(`.achievements__body`).mCustomScrollbar();
  });
}
