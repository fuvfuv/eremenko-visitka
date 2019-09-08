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
import {galleryMasonry} from "./modules/gallery/gallery";
if (page.classList.contains(PAGE.PHOTOGALLERY) || page.classList.contains(PAGE.PHOTOGALLERY_INNER)) {
  galleryMasonry();
}

import {galleryModal} from "./modules/gallery-inner/gallery-inner";
if (page.classList.contains(PAGE.PHOTOGALLERY_INNER)) {
  galleryModal();
}

// gallery inner
import {galleryInnerSettings} from "./modules/gallery-inner/gallery-inner";
if (page.classList.contains(PAGE.PHOTOGALLERY_INNER)) {
  galleryInnerSettings();
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

// About-me
import {aboutMeSlider} from "./modules/about-me/about-me";
if (page.classList.contains(PAGE.ABOUT_ME)) {
  aboutMeSlider();
}

import {slideSixView} from "./modules/about-me/about-me";
if (page.classList.contains(PAGE.ABOUT_ME)) {
  slideSixView();
}
