import {MEDIA} from "../constants/constants";
import $ from "jquery"; // если нужен jquery
import "slick-carousel";
import "jquery-mousewheel";

const indexSlider = $(`.index-slider`);

const nameLettering = $(`.js-name-lettering`);

export function indexPage() {
  if ($(window).width() > MEDIA.LG) {
    indexSlider.slick({
      slidesToShow: 1,
      adaptiveHeight: true,
      dots: true,
      dotsClass: `index-slider__bullets`,
      appendDots: $(`.index-slider__controls`),
      infinite: false,
      prevArrow: null,
      nextArrow: null,
      responsive: true,
    });
  } else {
    $(`#items.slick-initialized`).slick(`unslick`);
  }
}

indexSlider.on(`mousewheel`, function (evt) {
  evt.preventDefault();
  if (evt.deltaX > 0 || evt.deltaY < 0) {
    $(indexSlider).slick(`slickNext`);
  } else if (evt.deltaX < 0 || evt.deltaY > 0) {
    $(indexSlider).slick(`slickPrev`);
  }
});

nameLettering.hover(function () {
  $(`body`).addClass(`name-lettering-hovered`);
}, function () {
  $(`body`).removeClass(`name-lettering-hovered`);
});
