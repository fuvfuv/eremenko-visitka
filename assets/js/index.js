import $ from "jquery"; // если нужен jquery
// import "core-js/features/promise"; // полифилы core-js большая подборка (смотреть документацию)
// libs
import svg4everybody from "svg4everybody";
svg4everybody();

const page = document.querySelector(`body`);

// // Imported  modules
import {siteMenu} from "./modules/site-menu/site-menu";
siteMenu();

// Gallery and gallery inner
import {galleryModal} from "./modules/gallery/gallery";
import {galleryMasonry} from "./modules/gallery/gallery";
if (page.classList.contains(`photogallery-page`) || page.classList.contains(`photogallery-page--inner`)) {
  galleryMasonry();
  galleryModal();
}

// Reviews and achievements

import {reviewsSlider, customScroll} from "./modules/reviews-achievements/reviews-achievements";
if (page.classList.contains(`rev-achiev-page`)) {
  reviewsSlider();
  customScroll();
}
