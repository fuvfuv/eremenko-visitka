import $ from "jquery"; // если нужен jquery
import "slick-carousel";

export function reviewsSlider() {
  if ($(window).width() < 1199) {
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
