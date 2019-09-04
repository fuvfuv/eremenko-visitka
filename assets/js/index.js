// import $ from "jquery"; // если нужен jquery
// import "core-js/features/promise"; // полифилы core-js большая подборка (смотреть документацию)
// libs
import svg4everybody from "svg4everybody";
svg4everybody();

// // Imported  modules
const page = document.querySelector(`body`);
import {PAGE} from "./modules/constants/constants";

import {siteMenu} from "./modules/site-menu/site-menu";
siteMenu();

// Gallery and gallery inner
import {galleryModal} from "./modules/gallery/gallery";
import {galleryMasonry} from "./modules/gallery/gallery";
if (page.classList.contains(PAGE.PHOTOGALLERY) || page.classList.contains(PAGE.PHOTOGALLERY_INNER)) {
  galleryMasonry();
  galleryModal();
}

// Reviews and achievements
import {reviewsSlider, customScroll} from "./modules/reviews-achievements/reviews-achievements";
if (page.classList.contains(PAGE.REV_ACHIEV)) {
  reviewsSlider();
  customScroll();
}

// blog-inner-page
import {blogInnerPageSettings} from "./modules/blog-inner-page/blog-inner-page";
if (page.classList.contains(PAGE.BLOG_INNER)) {
  blogInnerPageSettings();
}
