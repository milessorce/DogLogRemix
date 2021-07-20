import { useRef } from 'react';
import useOnScreen from '../hooks/useOnScreen';

export default function MoreFeatures() {
  const sectionRef = useRef<HTMLDivElement>(null!);
  const sectionVisible = useOnScreen(sectionRef, true);

  return (
    <section
      className={ `section section--features-2 ${ sectionVisible ? 'section--animated' : '' }` }
      ref={ sectionRef }
    >
      <div className="section-container">
        <div className="more-features-container">
          <div className="more-features-column">
            <h2 className="section-header fadeIn">Even More Features</h2>
            <p className="section-subheader fadeIn">Even more ways DogLog helps you care for happier, healthier pups.</p>
            <div className="features-icon-list">
                <div className="features-icon-list-item fadeIn fadeIn--left">
                  <i className="icon material-icons" aria-hidden="true">photo_camera</i>
                  <h3 className="features-heading">Save photos to your feed</h3>
                  <p>Photograph events and log your pet's life with photos.</p>
                </div>
                <div className="features-icon-list-item fadeIn fadeIn--right">
                  <i className="icon material-icons" aria-hidden="true">thumb_up</i>
                  <h3 className="features-heading">Like & Comment</h3>
                  <p>Keep in touch about all of your dog's activities in the Feed.</p>
                </div>
                <div className="features-icon-list-item features-icon-list-item--connect fadeIn fadeIn--left">
                  <i className="icon material-icons" aria-hidden="true">people</i>
                  <h3 className="features-heading">Connect all pet caretakers</h3>
                  <p>Invite family members, friends, vets, walkers, and sitters.</p>
                </div>
                <div className="features-icon-list-item fadeIn fadeIn--right">
                  <i className="icon icon--health material-icons" aria-hidden="true">timeline</i>
                  <h3 className="features-heading">Long-term health tracking</h3>
                  <p>Aggregate all health and behavioral records in one place.</p>
                </div>
                <div className="features-icon-list-item features-icon-list-item--notifications fadeIn fadeIn--left">
                  <i className="icon material-icons" aria-hidden="true">notifications</i>
                  <h3 className="features-heading">Event Notification</h3>
                  <p>Stay up to date on your pet's day.</p>
                </div>
                <div className="features-icon-list-item features-icon-list-item--tracking fadeIn fadeIn--right">
                  <img
                    src="https://res.cloudinary.com/dyrrwpemp/image/upload/f_auto/DogLog/DogLogIconInverted.png"
                    className="icon icon--tracking"
                    loading="lazy"
                    aria-hidden="true"
                  />
                  <h3 className="features-heading">Multi-pet tracking</h3>
                  <p>Track each of your pets' information together in one Pack.</p>
                </div>
            </div>
          </div>
          <div className="more-features-screenshot-container fadeIn fadeIn--screenshot">
            <img
              src="https://res.cloudinary.com/dyrrwpemp/image/upload/f_auto/DogLog/features-screenshot-2.png"
              loading="lazy"
              alt="Features screenshot"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
