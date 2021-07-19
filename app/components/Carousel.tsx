import { useState, useRef, useCallback, useContext } from 'react';
import { EnvContext } from '../context/env';
import { Carousel as Slideshow } from 'react-responsive-carousel';


type CarouselItem = {
  imageSrc?: string;
  text?: string;
  author?: string;
};

interface CarouselProps {
  items: CarouselItem[];
  dynamicHeight?: boolean;
}

function Carousel ({ items, dynamicHeight }: CarouselProps) {
  const env = useContext(EnvContext);
  const isMobile = env?.isMobile;
  const [ activeIndex, setActiveIndex ] = useState(0);
  const carouselDotsRef = useRef<(HTMLButtonElement | null)[]>([]);

  const handleArrowClick = useCallback((direction: string) => {
    const itemsLength = carouselDotsRef.current.length;
    let newActiveIndex;
    if (direction === 'right') {
      newActiveIndex = activeIndex < itemsLength - 1 ? activeIndex + 1 : 0;
    } else {
      newActiveIndex = activeIndex > 0 ? activeIndex - 1 : itemsLength - 1;
    }
    const activeDotRef = carouselDotsRef.current[ newActiveIndex ];
    activeDotRef && activeDotRef.focus();
    setActiveIndex(newActiveIndex);
  }, [ activeIndex, carouselDotsRef ]);

  const handleDotClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setActiveIndex(Number(event.currentTarget.dataset.index));
  };

  const handleKeyUp = useCallback((event: React.KeyboardEvent<HTMLButtonElement>) => {
    let direction;
    if ([ 38, 39, ].indexOf(event.keyCode) > -1) {
      direction = 'right';
    } else if ([ 37, 40, ].indexOf(event.keyCode) > -1) {
      direction = 'left';
    }
    direction && handleArrowClick(direction);
  }, [ handleArrowClick ]);

  const handleKeyDown = (event: React.KeyboardEvent<HTMLButtonElement>) => {
    [ 37, 38, 39, 40 ].indexOf(event.keyCode) > -1 && event.preventDefault();
  };

  const handleChange = useCallback((index: number) => {
    index !== activeIndex && setActiveIndex(index);
  }, [ activeIndex ]);
  
  return (
    <>
      <Slideshow
        selectedItem={ activeIndex }
        onChange={ handleChange }
        emulateTouch={ true }
        infiniteLoop={ true }
        autoPlay={ false }
        showArrows={ false }
        showIndicators={ false }
        showThumbs={ false }
        showStatus={ false }
        dynamicHeight={ dynamicHeight }
        interval={ 99999999 } // there seems to be a bug that causes autoPlay even when set to false
      >
        { items.map((item, i) => (
          <div key={ item.imageSrc || item.text }>
            { item.imageSrc ? <img className="screenshot" src={ item.imageSrc } loading="lazy"></img> : null }
            { item.text && <span className="carousel-item-text" id={ `slide-text-${ i }` }>
              { item.text }
              { item.author && <span className="carousel-item-text--author">— { item.author } —</span> }
            </span> }
          </div>))
        }
      </Slideshow>
      <div className="carousel-dot-container">
        <button
          className={`carousel-dot-arrow carousel-dot-arrow--left left-arrow ${ isMobile ? 'carousel-dot-arrow--is-mobile' : '' }` }
          onClick={ () => handleArrowClick('left') }
          aria-label="Previous slide"
          tabIndex={ -1 }
          suppressHydrationWarning
        >
          <i className="fas fa-chevron-left left-arrow" aria-hidden="true"></i>
        </button>
        {
          items.map((item, i) => (
            <button 
              className={ `carousel-dot ${ activeIndex === i ? 'carousel-dot--active ' : '' } ${ isMobile ? 'carousel-dot--is-mobile' : '' }` }
              tabIndex={ activeIndex === i ? undefined : -1 }
              onKeyUp={ handleKeyUp }
              onKeyDown={ handleKeyDown }
              onClick={ handleDotClick }
              ref={ el => carouselDotsRef.current[ i ] = el }
              key={ item.imageSrc || item.text }
              suppressHydrationWarning
              data-index={ i }
              aria-label={ `Slide ${ i + 1 }` }
              aria-describedby={ `slide-text-${ i }` }
            >
            </button>
          ))
        }
        <button
          className={ `carousel-dot-arrow carousel-dot-arrow--right right-arrow ${ isMobile ? 'carousel-dot-arrow--is-mobile' : '' }` }
          onClick={ () => handleArrowClick('right') }
          aria-label="Next slide"
          tabIndex={ -1 }
          suppressHydrationWarning
        >
          <i className="fas fa-chevron-right right-arrow"></i>
        </button>
      </div>
    </>
  );
}

export default Carousel;
