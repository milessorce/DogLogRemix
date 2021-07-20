import { useRef, useState, useEffect } from 'react';
import Carousel from './Carousel';
import useOnScreen from '../hooks/useOnScreen';

const screenshots = [
  { imageSrc: 'https://res.cloudinary.com/dyrrwpemp/image/upload/f_auto/DogLog/screen__photos.png' },
  { imageSrc: 'https://res.cloudinary.com/dyrrwpemp/image/upload/f_auto/DogLog/screen__log-events.png' },
  { imageSrc: 'https://res.cloudinary.com/dyrrwpemp/image/upload/f_auto/DogLog/screen__reminders.png' },
  { imageSrc: 'https://res.cloudinary.com/dyrrwpemp/image/upload/f_auto/DogLog/screen__chart.png' }
];

export default function Screenshots() {
  const sectionRef = useRef<HTMLDivElement>(null!);
  const sectionVisible = useOnScreen(sectionRef, true);
  const [ breakpoint, setBreakpoint ] = useState<String>('small');

  useEffect(() => {
    let breakpoint = 'small';
    if (window.innerWidth > 767) {
      breakpoint = 'large';
    }
    setBreakpoint(breakpoint);
  }, [])

  return (
    <section
      className={ `section section--dark section--screenshots ${ sectionVisible ? 'section--animated' : '' }` }
      ref={ sectionRef }
    >
      <div className="section-container section-container--screenshots">
        <h2 className="section-header fadeIn">Screenshots</h2>
        <p className="section-subheader fadeIn">DogLog's easy-to-use interface allows you to better track, understand, and communicate everything related to your pets.</p>
        { breakpoint === 'small' ?  <Carousel items={ screenshots } /> : <BasicScreenshots /> }
      </div>
    </section>
  );
}

function BasicScreenshots () {
  return (
    <div className="screenshot-container">
      { screenshots.map((image, i) => (
        <img
          className={`screenshot fadeIn fadeIn--${ i < 2 ? 'left' : 'right'}` }
          src={ image.imageSrc }
          key={ image.imageSrc }
          alt=""
        />))
      }
    </div>
  );
}
