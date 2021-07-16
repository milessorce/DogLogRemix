import { Form } from '@remix-run/react';
import { useEffect, useState } from 'react';
import Modal from './Modal';

interface SubscribeProps {
  pending: boolean;
  subscribed: boolean;
}

export default function Subscribe({ pending, subscribed }: SubscribeProps) {
  const [ modalVisible, setModalVisible ] = useState(false);

  useEffect(() => {
    subscribed && setModalVisible(true);
  }, [ subscribed ])

  return (
    <section className="section section--subscribe section--dark">
      <div className="section-container section-container--subscribe">
        <h2 className="section-header">Sign up for our Newsletter</h2>
        <p className="section-subheader">Enter your email address below for monthly updates from the DogLog family.</p>
        <Form method="post" className="form">
          <div className="form__input-wrapper">
            <input
              className="form__input"
              placeholder="Enter your email address"
              type="email"
              name="email"
              required
              readOnly={ !!subscribed }
            />
            { !subscribed && pending && <Loading /> }
            { !!subscribed && <i className="fas fa-check form__input--confirmation" /> }
          </div>
          { !subscribed && <button className="form__submit" type="submit">Subscribe</button> }
        </Form>
        { modalVisible && <Modal closeModal={ () => setModalVisible(false) } /> }
      </div>
    </section> 
  );
}

function Loading() {
  return (
    <svg
      className="spinner"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={ 2 }
        d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
      />
    </svg>
  );
}
