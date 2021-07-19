import type { LinksFunction, MetaFunction } from 'remix';
import styles from '../styles/routes/about-us.css';

export let links: LinksFunction = () => {
  return [{ rel: 'stylesheet', href: styles }];
};

export let meta: MetaFunction = () => {
  return {
    title: 'DogLog - About Us',
    description: 'Read about the DogLog family',
  };
}

export function headers() {
  return {
    'cache-control': 'max-age=15552000, public' // 180 days
  };
}

const members = [
  {
    name: 'Lynn',
    title: 'Co-Founder & President',
    photoUrl: 'https://s3-us-west-1.amazonaws.com/doglog-media/lynn.jpg',
    linkedInUrl: 'https://www.linkedin.com/in/lynnmarks1/'
  },
  {
    name: 'Gideon',
    title: 'Co-Founder & Advisor',
    photoUrl: 'https://s3-us-west-1.amazonaws.com/doglog-media/gideon.jpg',
    linkedInUrl: 'https://www.linkedin.com/in/gideonmarks/'
  },
  {
    name: 'Ron',
    title: 'Co-Founder',
    photoUrl: 'https://s3-us-west-1.amazonaws.com/doglog-media/ron.jpg',
    linkedInUrl: 'https://www.linkedin.com/in/ron-marks-50023b76/'
  },
  {
    name: 'Miles',
    title: 'Developer & Advisor',
    photoUrl: 'https://s3-us-west-1.amazonaws.com/doglog-media/miles.jpg',
    linkedInUrl: 'https://www.linkedin.com/in/milessorce/'
  },
  {
    name: 'Emily',
    title: 'UI/UX Designer',
    photoUrl: 'https://s3-us-west-1.amazonaws.com/doglog-media/emily.jpg',
    linkedInUrl: 'https://www.linkedin.com/in/emily-garverick'
  },
  {
    name: 'Joy',
    title: 'Chief Cuddles Officer',
    photoUrl: 'https://s3-us-west-1.amazonaws.com/doglog-media/joy.jpg',
  },
  {
    name: 'Cali',
    title: 'Chief Fluff Officer',
    photoUrl: 'https://s3-us-west-1.amazonaws.com/doglog-media/cali.jpg',
  }
];

export default function AboutUs () {
  return (
    <div id="about-us" className="about-us">
      <section id="our-family" className="section section--animated section--our-family">
        <div className="section-container section-container--our-family">
            <h1 className="section-header fadeIn">Our Pack</h1>
            <div className="headshots-container fadeIn">
              { members.map(member => <Tile { ...member } key={ member.name } />) }
            </div>
          </div>
          <div className="section-container section-container--our-story">
            <h2 className="section-header fadeIn">Our Story</h2>
            <div className="our-story-image-container">
              <img src="https://s3-us-west-1.amazonaws.com/doglog-media/lynn-cali.jpg" loading="lazy" alt="Founder Lynn Marks and her dog Cali" />
            </div>
            <div className="our-story-container">
              <p>
                DogLog was inspired by our family’s life in San Francisco.
                We needed a system to coordinate caring for our dog, Joy. We wanted to ensure that she never went too long without being taken outside, or suceeded in tricking us into giving her double feedings. We needed an easier way to verify what Joy had and hadn’t done yet.
                After attempting to keep a log with sticky notes and texts, we developed DogLog to keep all dog-related information in one centralized place that was accessible by all family members.
                Now, we use DogLog to track Cali's (our puppy) health, feedings, and walks.
              </p>
              
              <h3 className="go-fund-me">Help us improve DogLog</h3>
              <p>
                DogLog has been entirely self-funded by our dog-loving family. We offer DogLog as a free service because we want to help pet owners everywhere provide the best possible care for their pets. You can help us build new features, grow the DogLog community, and make it easier to care for your pets by making a contribution today.
              </p>
              <a
                className="go-fund-me-link go-fund-me-button"
                href="https://www.gofundme.com/f/doglogapp"
                aria-label="Contribute to DogLog's GoFundMe"
              >
                Contribute
              </a>
            </div>
          </div>
      </section>
    </div>
  );
}

interface TileProps {
  name: string,
  title: string,
  photoUrl: string,
  linkedInUrl?: string
}

function Tile({ name, title, photoUrl, linkedInUrl}: TileProps) {
  const content = [
    <img src={ photoUrl } loading="lazy" key={ photoUrl } alt="" />,
    <p className="name" key={ name }>{ name }</p>,
    <p className="title" key={ title }>{ title }</p>
  ];

  return linkedInUrl
    ? <a className="headshot-container" href={ linkedInUrl } target="_blank">{ content }</a>
    : <div className="headshot-container">{ content }</div>;
}

