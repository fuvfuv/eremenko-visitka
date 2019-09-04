import {MEDIA} from "../constants/constants";

export function blogInnerPageSettings() {
  const pageHeader = document.querySelector(`.header--article-inner`);
  const article = document.querySelector(`.article-inner`);
  const articleContent = document.querySelector(`.article-inner__content`);
  const likes = document.querySelector(`.article-inner__likes`);
  const tags = document.querySelector(`.article-inner__tags`);

  const likesClone = likes.cloneNode(true);
  const tagsClone = tags.cloneNode(true);

  if (window.innerWidth < MEDIA.XS) {
    moveLikesToHeader();
    moveTagsToArticle();
  }

  function moveLikesToHeader() {
    likesClone.classList.add(`likes--reverse`);
    pageHeader.appendChild(likesClone);
    cutDomElement(likes);
  }

  function moveTagsToArticle() {
    article.insertBefore(tagsClone, articleContent);
    cutDomElement(tags);
  }

  function cutDomElement(el) {
    el.parentNode.removeChild(el);
  }
}
