import { Link } from 'react-router-dom';

const links = [
  {
    path: '/#features',
    text: 'Features'
  },
  {
    path: '/about-us',
    text: 'About Us'
  },
  {
    path: '/blog',
    text: 'Blog'
  },
  {
    path: '/media',
    text: 'Media'
  }
];

export default function Footer() {
  return (
    <footer className="section section--footer footer">
      <div className="download-buttons">
        <a
          className="app-icon app-icon--app-store"
          href="https://itunes.apple.com/us/app/doglog-track-your-pets-life/id1229529595?mt=8"
          aria-label="Download DogLog on the Apple App Store"
        >
          <img src="https://res.cloudinary.com/dyrrwpemp/image/upload/f_auto,w_208/DogLog/badgeappstore.png" aria-hidden="true" loading="lazy" width="208" />
        </a>
        <a
          className="app-icon app-icon--android-store"
          href="https://play.google.com/store/apps/details?id=com.mobikode.dog"
          aria-label="Download DogLog on the Google Play Store"
        >
          <img src="https://res.cloudinary.com/dyrrwpemp/image/upload/f_auto,w_208/DogLog/badgegoogleplay.png" aria-hidden="true" loading="lazy" width="208" />
        </a>
      </div>
      <div className="social-media-links">
        <a href="https://www.facebook.com/DogLogApp/" aria-label="DogLog Facebook">
          <i className="fab fa-facebook-f"></i>
        </a>
        <a href="https://www.instagram.com/doglogapp/" aria-label="DogLog Instagram">
          <i className="fab fa-instagram"></i>
        </a>
        <a href="https://www.linkedin.com/company/doglog/" aria-label="DogLog LinkedIn">
          <i className="fab fa-linkedin-in"></i>
        </a>
        <a href="mailto:support@doglogapp.com" aria-label="Email DogLog Support">
          <i className="fa fa-envelope"></i>
        </a>
      </div>
      <div className="footer__links">
        { links.map(link => <Link to={ link.path } key={ link.text }>{ link.text }</Link>) }
        <a href="mailto:support@doglogapp.com">Contact Us</a>
      </div>
      <p className="copyright">Copyright © 2021 DogLog, All rights reserved</p>
    </footer>
  );
}
