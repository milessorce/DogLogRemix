import type { Feed, BlogPost } from '../routes/blog';
import { forwardRef } from 'react';

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
  return (
    <article className="article" ref={ ref }>
      <a
        className="article__link"
        href={ post.guid }
        target="_blank"
        rel="noreferrer"
      >
        <img
          className="article__image"
          src={ post.thumbnail }
          alt=""
          loading="lazy"
        />
        <h2 className="article__heading" suppressHydrationWarning>
          { post.title }
        </h2>
      </a>
      <p className="article__description skeleton" suppressHydrationWarning>
        { extractContent(post.description) }
      </p>
      <div className="article__medium-link">
        <a
          className="article__author"
          href="https://appdoglog.medium.com/"
          target="_blank"
          rel="noreferrer"
        >
          <img
            className="article__author-logo"
            src="https://res.cloudinary.com/dyrrwpemp/image/upload/f_auto,w_28/DogLog/DogLogIcon.png"
            loading="lazy"
            alt=""
            width="28"
          />
          <span className="article__author-link">DogLog Blog</span>
        </a>
      </div>
    </article>
  )
});
