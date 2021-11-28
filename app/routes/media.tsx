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
