import type { Feed, BlogPost } from '../routes/blog';
import { forwardRef, useRef } from 'react';

function shortenText(text: string, startingPoint: number, maxLength: number) {
  return text.length > maxLength ? text.slice(startingPoint, maxLength) : text;
}

function extractContent(str: string) {
  if (typeof window !== 'undefined') {
    const span = document.createElement('span');
    span.innerHTML = str;
    return span.textContent || span.innerText;
  }
  return '';
};

interface ArticleProps {
  feed: Feed;
  post: BlogPost;
}

export const Article = forwardRef<HTMLElement, ArticleProps>(({ feed, post }: ArticleProps, ref) => {
  const description = extractContent(post.description);
  return (
    <article className="article" ref={ ref }>
      <a
        className="article__link"
        href={ post.guid }
        target="_blank"
        rel="noopener noreferrer"
      >
        <img
          className="article__image"
          src={ post.thumbnail }
          alt=""
          loading="lazy"
        />
        <h5 className="article__heading">
          { shortenText(post.title, 0, 50) }
        </h5>
      </a>
      <p className="article__description skeleton" suppressHydrationWarning>
        { description }
      </p>
      <div className="article__medium-link">
        <a
          className="article__author"
          href="https://appdoglog.medium.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img className="article__author-logo" src={ feed.image } loading="lazy" />
          <span className="article__author-link">DogLog Blog</span>
        </a>
      </div>
    </article>
  )
});
