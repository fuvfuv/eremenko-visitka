import $ from "jquery"; // если нужен jquery
import "slick-carousel";
import "jquery-mousewheel";
import "malihu-custom-scrollbar-plugin";

export function reviewsSlider() {
  if ($(window).width() < 1200) {
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
  if ($(window).width() > 1200) {
    $(`.reviews__body`).mCustomScrollbar({
      alwaysShowScrollbar: 0,
    });

    $(`.achievements__body`).mCustomScrollbar({
      alwaysShowScrollbar: 0,
    });
  }
}
