import type { LinksFunction, MetaFunction } from 'remix';
import { useLocation } from 'react-router-dom';
import { useEnvDetection } from '../hooks';
import { EnvContext } from '../context/env';
import { Features, Hero, Features2 as MoreFeatures, Quotes, Screenshots, Subscribe } from '../components';
import styles from '../styles/routes/index.css';
import { useEffect } from 'react';

export let links: LinksFunction = () => {
  return [
    { rel: 'stylesheet', href: styles },
    { rel: 'stylesheet', href: 'https://unpkg.com/react-responsive-carousel@3.2.19/lib/styles/carousel.min.css' },
    { rel: 'preload', href: 'https://doglog-media.s3-us-west-1.amazonaws.com/header-image-blurred.jpg', as: 'image' },
    { rel: 'preload', href: 'https://s3-us-west-1.amazonaws.com/doglog-media/header-image.jpg', as: 'image' }
  ];
};

export function headers() {
  return {
    'Cache-Control': 'max-age=2592000, public' // 30 days
  };
}

export let meta: MetaFunction = () => {
  return {
    title: 'DogLog',
    description: `Track your pet's health and wellbeing. Coordinate pet-related tasks.`
  };
}

export default function Index() {
  const env = useEnvDetection(typeof navigator === 'undefined' ? null : navigator);
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (pathname === '/' && hash === '#features') {
      const features = document.getElementById('features');
      features && features.scrollIntoView({ behavior: 'smooth' });
    }
  }, [ pathname, hash ] );

  return (
     <EnvContext.Provider value={ env }>
      <Hero />
      <Features />
      <MoreFeatures />
      <Screenshots />
      <Quotes />
    </EnvContext.Provider>
  );
}
