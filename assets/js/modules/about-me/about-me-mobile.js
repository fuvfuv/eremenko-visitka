import {MEDIA} from "../constants/constants";
import $ from "jquery"; // если нужен jquery
import "slick-carousel";
import "jquery-mousewheel";

const aboutMobileSlider = $(`.slider`);

export function aboutMeMobileSlider() {
  aboutMobileSlider.slick({
    dots: true,
    dotsClass: `about-me-mobile__slider-bullets`,
    slidesToShow: 1,
    adaptiveHeight: true,
    infinite: false,
    prevArrow: null,
    nextArrow: null,
    responsive: true,
  });
}
