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
              <h5>Share everything</h5>
              <p>Coordinate and track pet related activities with family members, dog walkers, and pet sitters.</p>
            </li>
            <li className="features-column--list-item">
              <h5>Track what's relevant</h5>
              <p>Create custom events to track what matters to you and your dog.</p>
            </li>
          </ul>
          <ul className="features-column features-column--right">
            <li className="features-column--list-item">
              <h5>Never forget what's important</h5>
              <p>Reminders help you remember your dog's chores, medicines, and appointments.</p>
            </li>
            <li className="features-column--list-item">
              <h5>Understand trends</h5>
              <p>Analyze your data to figure out trends and enforce a routine.</p>
            </li>
          </ul>
          <div className="features-column features-column--screenshot">
            <img className="features-screenshot" src="https://s3-us-west-1.amazonaws.com/doglog-media/features-screenshot.png" loading="lazy" />
          </div>
        </div>
      </div>
    </section>
  )  
}
