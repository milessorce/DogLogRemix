import type { LinksFunction, MetaFunction } from 'remix';
import { useLocation } from 'react-router-dom';
import { useEnvDetection } from '../hooks';
import { EnvContext } from '../context/env';
import { Features, Hero, Features2 as MoreFeatures, Quotes, Screenshots, Subscribe } from '../components';
import styles from '../styles/routes/index.css';
import { useEffect } from 'react';

export let links: LinksFunction = () => {
  return [
    { rel: 'preconnect', href: 'https://res.cloudinary.com/' },
    { rel: 'stylesheet', href: styles },
    { rel: 'stylesheet', href: 'https://unpkg.com/react-responsive-carousel@3.2.19/lib/styles/carousel.min.css' },
    { rel: 'preload', href: 'https://res.cloudinary.com/dyrrwpemp/image/upload/f_auto,q_50/DogLog/header-image-blurred.jpg', as: 'image' },
    { rel: 'preload', href: 'https://res.cloudinary.com/dyrrwpemp/image/upload/f_auto/DogLog/header-image.jpg', as: 'image' },
    { rel: 'canonical', href: 'https://www.doglogapp.com/' }
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
    description: `Track your pet's health and wellbeing. Coordinate pet-related tasks. Organize your pet's life and be the best pet owner you can be.`
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
