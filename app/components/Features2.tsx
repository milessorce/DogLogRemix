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
                  <h5>Save photos to your feed</h5>
                  <p>Photograph events and log your pet's life with photos.</p>
                </div>
                <div className="features-icon-list-item fadeIn fadeIn--right">
                  <i className="icon material-icons" aria-hidden="true">thumb_up</i>
                  <h5>Like & Comment</h5>
                  <p>Keep in touch about all of your dog's activities in the Feed.</p>
                </div>
                <div className="features-icon-list-item features-icon-list-item--connect fadeIn fadeIn--left">
                  <i className="icon material-icons" aria-hidden="true">people</i>
                  <h5>Connect all pet caretakers</h5>
                  <p>Invite family members, friends, vets, walkers, and sitters.</p>
                </div>
                <div className="features-icon-list-item fadeIn fadeIn--right">
                  <i className="icon icon--health material-icons" aria-hidden="true">timeline</i>
                  <h5>Long-term health tracking</h5>
                  <p>Aggregate all health and behavioral records in one place.</p>
                </div>
                <div className="features-icon-list-item features-icon-list-item--notifications fadeIn fadeIn--left">
                  <i className="icon material-icons" aria-hidden="true">notifications</i>
                  <h5>Event Notification</h5>
                  <p>Stay up to date on your pet's day.</p>
                </div>
                <div className="features-icon-list-item features-icon-list-item--tracking fadeIn fadeIn--right">
                  <img
                    src="https://s3-us-west-1.amazonaws.com/doglog-media/DogLogIconInverted.png"
                    className="icon icon--tracking"
                    loading="lazy"
                    aria-hidden="true"
                  />
                  <h5>Multi-pet tracking</h5>
                  <p>Track each of your pets' information together in one Pack.</p>
                </div>
            </div>
          </div>
          <div className="more-features-screenshot-container fadeIn fadeIn--screenshot">
            <img
              src="https://s3-us-west-1.amazonaws.com/doglog-media/features-screenshot-2.png"
              loading="lazy"
              alt="Features screenshot"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
