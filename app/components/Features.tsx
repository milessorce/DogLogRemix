import { useRef } from 'react';
import useOnScreen from '../hooks/useOnScreen';

export default function Features() {
  const sectionRef = useRef<HTMLDivElement>(null!);
  const sectionVisible = useOnScreen(sectionRef, true);

  return (
    <section
      className={ `section section--dark section--features ${ sectionVisible ? 'section--animated' : '' }` }
      id="features"
      ref={ sectionRef }
    >
      <div className="section-container">
        <h2 className="section-header fadeIn">Features</h2>
        <p className="section-subheader fadeIn">DogLog connects all aspects of your dog's life in one easy-to-use app.</p>
        <div className="features-list-container">
          <ul className="features-column features-column--left">
            <li className="features-column--list-item">
              <h3 className="features-heading">Share everything</h3>
              <p>Coordinate and track pet related activities with family members, dog walkers, and pet sitters.</p>
            </li>
            <li className="features-column--list-item">
              <h3 className="features-heading">Track what's relevant</h3>
              <p>Create custom events to track what matters to you and your dog.</p>
            </li>
          </ul>
          <ul className="features-column features-column--right">
            <li className="features-column--list-item">
              <h3 className="features-heading">Never forget what's important</h3>
              <p>Reminders help you remember your dog's chores, medicines, and appointments.</p>
            </li>
            <li className="features-column--list-item">
              <h3 className="features-heading">Understand trends</h3>
              <p>Analyze your data to figure out trends and enforce a routine.</p>
            </li>
          </ul>
          <div className="features-column features-column--screenshot">
            <img
              className="features-screenshot"
              src="https://res.cloudinary.com/dyrrwpemp/image/upload/f_auto/DogLog/features-screenshot.png"
              loading="lazy"
              alt="Features screenshot"
            />
          </div>
        </div>
      </div>
    </section>
  )  
}
