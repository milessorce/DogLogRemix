import { useState, useRef, useEffect } from 'react';
import { useRouteData } from 'remix';
import type { LoaderFunction, LinksFunction, MetaFunction } from 'remix';
import { useLocation } from 'react-router-dom';
import { Article } from '../components';
import styles from '../styles/routes/blog.css';

export let links: LinksFunction = () => {
  return [
    { rel: 'stylesheet', href: styles },
    { rel: 'canonical', href: 'https://www.doglogapp.com/blog' }
  ];
};

export function headers() {
  return {
    'Cache-Control': 'max-age=84600, public' // one day
  };
}

export let meta: MetaFunction = () => {
  return {
    title: 'DogLog - Blog',
    description: 'Stories by DogLog App on Medium'
  };
}

export let loader: LoaderFunction = async () => {
  const res = await fetch('https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@AppDogLog');
  const json = await res.json();
  return json;
};

export interface Feed {
  author?: string,
  description: string,
  image: string,
  link: string,
  title: string,
  utl: string,
  avatar: string
}

export interface BlogPost {
  author: string,
  categories: Array<string>,
  content: string,
  description: string,
  pubDate: string,
  thumbnail: string,
  title: string,
  guid: string
}

interface Data {
  feed: Feed,
  items: Array<BlogPost>
}

export default function Blog() {
  const isBrowser = typeof window !== 'undefined';
  const { feed, items }: Data = useRouteData();
  const location = useLocation();
  const [ page, setPage ] = useState<number>(1);
  const lastPageIndex = items.length % 3 ? 3 * page - items.length % 3 : 3 * page - 1;
  const articleRef = useRef<HTMLElement>(null!);
  const articleObserver = isBrowser ? useRef(new IntersectionObserver(([ entry ], observer: IntersectionObserver) => {
    if (entry.isIntersecting) {
      articleRef.current && observer.unobserve(articleRef.current);
      setPage(page => page + 1);
    }
  }, { threshold: 0.6 })) : useRef(null);

  useEffect(() => {
    if (articleObserver.current && articleRef.current) {
      articleObserver.current.observe(articleRef.current);
    }
    return () => {
      articleObserver.current?.disconnect();
    };
  }, [ articleRef.current ]);

  useEffect(() => {
    window.gtag?.('send', 'pageview');
  }, [ location ]);

  return (
    <section className="section section--blog">
      <div className="section-container section-container--blog">
      <h1 className="section-header">DogLog Blog</h1>
        { items.slice(0, page * 3).map((item: BlogPost, index: number) => (
          <Article
            key={ item.guid }
            feed={ feed }
            post={ item }
            ref={ index === lastPageIndex ? articleRef : null }
          />
        ))}
      </div>
    </section>
  );
}
