import { useEffect } from 'react';
import type { LinksFunction, MetaFunction } from 'remix';
import { useLocation } from 'react-router-dom';
import styles from '../styles/routes/media.css';

export let links: LinksFunction = () => {
  return [
    { rel: 'stylesheet', href: styles },
    { rel: 'canonical', href: 'https://www.doglogapp.com/media' }
  ];
};

export function headers() {
  return {
    'Cache-Control': 'max-age=84600, public' // one day
  };
}

export let meta: MetaFunction = () => {
  return {
    title: 'DogLog - Media',
    description: 'DogLog in the media'
  };
}

interface ArticleProps {
  imageSrc: string,
  articleUrl: string,
  title: string,
  date: string
}

const articles = [
  {
    imageSrc: 'data:image/png;base64,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',
    articleUrl: 'https://startupsavant.com/pet-tech-startup-doglog-origin-story',
    title: 'DogLog on the Startup Savant Podcast',
    date: 'March 2022'
  },
  {
    imageSrc: 'https://appoftheday.downloadastro.com/wp-content/themes/appoftheday/assets/img/logo-01.png',
    articleUrl: 'https://appoftheday.downloadastro.com/app/doglog-track-your-pets-life/',
    title: 'Interview with App of the Day',
    date: 'November 2021'
  },
  {
    imageSrc: 'https://res.cloudinary.com/dyrrwpemp/image/upload/v1638129272/DogLog/kiclogo.png',
    articleUrl: 'https://www.youtube.com/watch?v=zLE79n9vqLc',
    title: 'DogLog at iPitch 2021',
    date: 'November 2021'
  },
  {
    imageSrc: 'https://www.doobert.com/wp-content/themes/wt_metro_child/img/logo-doobert.svg',
    articleUrl: 'https://www.doobert.com/doglog-app-lynn-marks-gideon-marks/',
    title: 'DogLog on the Animal Innovations Show Podcast',
    date: 'August 2021'
  },
  {
    imageSrc: 'https://static.wixstatic.com/media/fa7e92_9650e9722b274a41b367ce39eed506b3~mv2.png/v1/fill/w_200,h_156,al_c,q_85,usm_0.66_1.00_0.01/MellaLogo-01.webp',
    articleUrl: 'https://www.mella.ai/podcast/episode/22f8161e/21-how-can-you-track-your-pets-activities-lynn-and-gideon-marks',
    title: 'DogLog on the Mella Podcast',
    date: 'March 2021'
  },
  {
    imageSrc: 'https://fox40.com/wp-content/uploads/sites/13/2021/05/FOX40_Logo_Horizontal_GENERIC_Color.png',
    articleUrl: 'https://fox40.com/news/local-news/local-siblings-create-app-to-help-busy-dog-owners-keep-track-of-their-pets-schedules/',
    title: 'Local Siblings Create App to Help Busy Dog Owners Keep Track of Their Pet’s Schedules',
    date: 'November 2018'
  },
  {
    imageSrc: 'https://bloximages.newyork1.vip.townnews.com/losaltosonline.com/content/tncms/custom/image/37c9728a-8666-11eb-8535-570adb2075d9.png?resize=1200%2C187',
    articleUrl: 'https://www.losaltosonline.com/business/local-siblings-create-pet-tracker-app-inspired-by-their-own-dog/article_ee743a9f-2744-503d-99fe-941cf63a64ff.html',
    title: 'Local siblings create pet tracker app inspired by their own dog',
    date: 'August 2018'
  },
];

function Article({ imageSrc, articleUrl, title, date }: ArticleProps) {
  const location = useLocation();

  useEffect(() => {
    window.gtag?.('send', 'pageview');
  }, [ location ]);

  return (
    <div className="article">
      <a
        className="article__link"
        href={ articleUrl }
        target="_blank"
      />
      <img
        className="article__image"
        src={ imageSrc }
        alt={ title }
      />
      <div className="article__content-container">
        <h3 className="article__date">{ date }</h3>
        <h2 className="article__title">{ title }</h2>
      </div>
    </div>
  );
}

export default function Media() {
  return (
    <section className="section section--media">
      <div className="section-container section-container--media">
        <h1 className="section-header">Media</h1>
        <div className="media__articles">
          { articles.map(article => <Article { ...article } key={ article.articleUrl } />)}
        </div>
      </div>
    </section>
  );
}
