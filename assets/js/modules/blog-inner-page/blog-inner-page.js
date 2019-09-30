import {MEDIA} from "../constants/constants";

export function blogInnerPageSettings() {
  const pageHeader = document.querySelector(`.header--article-inner`);
  const article = document.querySelector(`.article-inner`);
  const articleContent = document.querySelector(`.article-inner__content`);
  const likes = document.querySelector(`.article-inner__likes`);
  const tags = document.querySelector(`.article-inner__tags`);

  if (window.matchMedia(`(max-width: ${MEDIA.MD}px)`).matches) {
    likes.classList.add(`likes--reverse`);
    pageHeader.appendChild(likes);
    article.insertBefore(tags, articleContent);
  }
}
