import { useState, useEffect, useRef } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { debounce } from '../utilties/debounce';

const links = [
  { path: '/#features', text: 'FEATURES' },
  { path: '/about-us', text: 'ABOUT US' },
  { path: '/blog', text: 'BLOG' },
  { path: '/media', text: 'MEDIA' },
];

export default function NavBar() {
  const isBrowser = typeof window !== 'undefined';
  const location = useLocation();
  const rootRef = useRef<HTMLDivElement>(null!);
  const [ open, setOpen ] = useState(false);
  const [ isDropdown, setIsDropdown ] = useState(false);
  const [ isVisible, setIsVisible ] = useState(location.pathname !== '/');
  const navbarObserver = isBrowser ? useRef(new IntersectionObserver((entries: IntersectionObserverEntry[], observer: IntersectionObserver) => {
    setIsVisible(!entries[ 0 ].isIntersecting);
  }, { threshold: 0.75 })) : useRef(null);

  useEffect(() => {
    if (navbarObserver.current && location.pathname === '/') {
      const heroHeader = document.querySelector('.hero-header');
      heroHeader && navbarObserver.current.observe(heroHeader);
    }
    setOpen(false);
    return () => {
      navbarObserver.current?.disconnect();
    }
  }, [ location ]);

  useEffect(() => {
    rootRef.current.style.transition = 'all 1.5s ease';

    const debouncedResizeHandler = debounce(() => {
      setIsDropdown(window.innerWidth <= 768);
    }, 250);
    setIsDropdown(window.innerWidth <= 768);
    window.addEventListener('resize', debouncedResizeHandler);
    return () => {
      window.removeEventListener('resize', debouncedResizeHandler);
    }
  }, []);

  const handleLogoClick = () => {
    scrollTo(0, 0);
    setOpen(false);
    setIsVisible(false);
  };

  return (
    <div className={ `navbar navbar--${ isVisible ? 'visible' : 'hidden' }` } ref={ rootRef }>
      <div className="navbar-content-container">
        <div className={ `top-drawer ${ open ? 'top-drawer--open' : '' }` }>
          <Link
            className="navbar-logo-anchor"
            to={ location.pathname === '/' ? '' : '/' }
            onClick={ handleLogoClick }
            aria-label="Home"
          >
            <img className="navbar-logo" src="https://res.cloudinary.com/dyrrwpemp/image/upload/f_auto/DogLog/DogLogIcon_Red.png" loading="lazy" aria-hidden="true" />
          </Link>
          <button
            type="button"
            className="navbar-toggle"
            onClick={ () => setOpen(!open) }
          >
            { Array(3).fill(null).map((el, i) => <span key={ `toggle-icon-bar-${ i }` } className="toggle-icon-bar"></span>) }
          </button>
        </div>
        <div className={ `links ${ open ? 'links--visible' : '' } ${ isDropdown ? 'links--dropdown' : '' }` }>
          { links.map(link => (
            <NavLink
              to={ link.path }
              onClick={ () => setOpen(false) }
              key={ link.text }
              aria-current="page"
              end
            >
              { link.text }
            </NavLink>))
          }
        </div>
      </div>
    </div>
  );
}
