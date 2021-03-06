import {MEDIA} from "../constants/constants";
import $ from "jquery"; // если нужен jquery
import "slick-carousel";
import "jquery-mousewheel";

export function indexPage() {
  const indexSlider = $(`.index-slider`);

  const nameLettering = $(`.js-name-lettering`);

  const viewResumeBtn = document.querySelector(`.index-header__link`);
  const viewResumeBtnClone = viewResumeBtn.cloneNode(true);

  const ierominFooter = $(`.ieromin__footer`);
  const swapElement = $(`.index-slider__swap`);

  if ($(window).width() > MEDIA.MD) {
    indexSlider.slick({
      slidesToShow: 1,
      adaptiveHeight: true,
      dots: true,
      speed: 1200,
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

  if ($(window).width() > MEDIA.MD) {
    indexSlider.on(`mousewheel`, function (evt) {
      evt.preventDefault();
      if (evt.deltaX > 0 || evt.deltaY < 0) {
        $(indexSlider).slick(`slickNext`);
      } else if (evt.deltaX < 0 || evt.deltaY > 0) {
        $(indexSlider).slick(`slickPrev`);
      }
    });

    indexSlider.on(`beforeChange`, function (event, slick, currentSlide, nextSlide) {
      if (nextSlide === slick.slideCount - 1) {
        swapElement.addClass(`hidden`);
      } else {
        swapElement.removeClass(`hidden`);
      }
    });
  }

  if ($(window).width() > MEDIA.MD) {
    nameLettering.hover(
        function () {
          $(`body`).addClass(`name-lettering-hovered`);
        },
        function () {
          $(`body`).removeClass(`name-lettering-hovered`);
        }
    );
  }

  if ($(window).width() < MEDIA.MD) {
    ierominFooter.append(viewResumeBtnClone);
  }
}
