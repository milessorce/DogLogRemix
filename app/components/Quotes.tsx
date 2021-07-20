import { useRef } from 'react';
import useOnScreen from '../hooks/useOnScreen';
import Carousel from './Carousel';

const quotes = [
  {
    text: `I use this daily to record our dog's activities, very useful when there's more than one caregiver! Custom events are great. Tried other apps and this was the best one.`,
    author: 'Martin P.'
  },
  {
    text: `I really love this app! It allows me to keep up with my pup and her sensitive stomach. I can log all of her feedings, bathroom breaks, weight, and even customize some tasks. It is a must have!`,
    author: 'Heather M.'
  },
  {
    text: `DogLog is essential to not feeding the dog twice when there is more than one person caring for a dog; to know when the last time he got his meds; track his weight to determine if he's being overfed; etc. And the fact that all entries are kept "in the cloud" means your app is automatically updated whenever anyone makes an entry. And you can program reminders so that infrequent tasks are not completely forgotten. I highly recommend DogLog.`,
    author: 'John B.'
  },
  {
    text: `Tracking my 11-week old puppy for the past 2 weeks has been extremely helpful. I can see patterns in what times he eats, when we go outside, when he's most likely to have an accident.`,
    author: 'Mel A.'
  },
  {
    text: `This app is essential for tracking our pup's day. My wife and I are able to keep her bathroom activities straight so we know whether she's acting out because she might have to go to the bathroom or she's just being mischievous! When she ate something that caused her to be sick, we were able to show the vet just how many bowel movements she had in the last 48 hours. We love being able to check the reports and statistics too! All around, the experience using this app has been great!`,
    author: 'Zan P.'
  },
  {
    text: `It’s worked great to keep track of the intake and “outtake” of our senior dog. It’s also great for keeping track of monthly tick treatments and exercise too. That way we have a central location to check if the dog has been walked in our busy household.`,
    author: 'Penny M.'
  }
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
