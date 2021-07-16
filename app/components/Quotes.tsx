import { useRef } from 'react';
import useOnScreen from '../hooks/useOnScreen';
import Carousel from './Carousel';

const quotes = [
  {text: 'Responsive developer. Definitely the best app available.', author: 'Megan Calla'},
  {text: 'Very easy to use, awesome for keeping track with multiple people involved in the care of your dogs.', author: 'G.U.'},
  {text: 'This is a great app! Very simple and straightforward, easy to use. I have a pet sitting business and have began to implement this with my clients for easy tracking.', author: 'F.G.'},
  {text: 'We have a large family and this app is exactly what we needed to keep track of our new puppy\'s care. I love getting notified of how things are going while I\'m at work.', author: 'Kate H.'},
  {text: 'Love, love, love the new update! This app is so useful with having a new puppy and keeping track of her schedule, especially during potty training. I love the fact that we can customize events that are relevant to us.', author: 'G.F.'},
  {text: 'This app has been very helpful for me and my wife to log our two dogs’ feeding schedule. Very easy to use and just what we needed! Must try it!!', author: 'J.B.'}
];

export default function Quotes() {
  const sectionRef = useRef<HTMLDivElement>(null!);
  const sectionVisible = useOnScreen(sectionRef, true);

  return (
    <section className={ `section section--quotes ${ sectionVisible ? 'section--animated' : '' }` } ref={ sectionRef }>
      <div className="section-container">
        <Carousel items={ quotes } dynamicHeight={ true } />
      </div>
    </section>
  );
}
