import { useEffect, useRef, useState } from 'react';

export default function Hero() {
  const isBrowser = typeof window !== 'undefined';
  const [ isScrollButtonVisible, setIsScrollButtonVisible ] = useState<boolean>(true);
  const rootRef = useRef<HTMLElement>(null!);
  const containerRef = useRef<HTMLDivElement>(null!);
  const featuresSectionObserver = isBrowser ? useRef(new IntersectionObserver(([ entry ], observer: IntersectionObserver) => {
    setIsScrollButtonVisible(!entry.isIntersecting);
  }, { threshold: 0.2 })) : useRef(null);

  useEffect(() => {
    const featuresSection = document.getElementById('features');
    featuresSection && featuresSectionObserver.current?.observe(featuresSection);
    return () => {
      featuresSectionObserver.current?.disconnect();
    };
  }, []);

  useEffect(() => {
    rootRef.current.style.backgroundImage = `url(https://s3-us-west-1.amazonaws.com/doglog-media/header-image.jpg)`;
  }, []);

  return (
    <section
      id="home"
      className="hero-header parallax-container"
      ref={ rootRef }
    >
      <div className="linear-gradient-background">
        <div className="header-container" ref={ containerRef }>
          <img className="header-image" src="https://s3-us-west-1.amazonaws.com/doglog-media/DogLogIconLarge_White.png" />
          <h1 className="header-headline">Track and coordinate your pet's activities and health</h1>
          <div className="header-subcontainer">
            <div className="header-app-store-container">
              <a className="app-icon app-icon--app-store" href="https://itunes.apple.com/us/app/doglog-track-your-pets-life/id1229529595?mt=8">
                <img src="https://s3-us-west-1.amazonaws.com/doglog-media/badgeappstore.png" />
              </a>
              <a className="app-icon app-icon--android-store" href="https://play.google.com/store/apps/details?id=com.mobikode.dog">
                <img src="https://s3-us-west-1.amazonaws.com/doglog-media/badgegoogleplay.png" />
              </a>
            </div>
          </div>
          </div>
          <button
            className={ `scroll-button ${ !isScrollButtonVisible && 'fadeOut' }`}
            onClick={ () => window.scrollTo({ top: window.innerHeight, left: 0, behavior: 'smooth' }) }
            aria-label="scroll down"
          >
            <img src="https://s3-us-west-1.amazonaws.com/doglog-media/down-icon.png" />
          </button>
      </div>
    </section>
  );
}
