import React from 'react';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'; // Import the styles for the slideshow
import './HelpSlider.css'; // Import your CSS file

import slider1Image from '../../images/slider1.png';
import slider2Image from '../../images/slider2.jpeg';
import slider3Image from '../../images/slider3.jpeg';
import slider4Image from '../../images/slider4.jpeg';
import slider5Image from '../../images/slider5.jpeg';

const quotes = [
  {
    image: slider1Image,
    text: 'Early Detection: Early detection can prevent major diseases in up to 90% of cases, significantly improving treatment outcomes.'
  },
  {
    image: slider2Image,
    text: 'Identify various types and subtypes of skin diseases like psoriasis.'
  },
  {
    image: slider3Image,
    text: 'Regular self-examination: This aid in spotting skin abnormalities early and contributes to a 70% reduction in mortality rates from certain cancers.'
  },
  {
    image: slider4Image,
    text: 'Consulting a dermatologist for proper diagnosis is crucial. Identifying health issues early leads to a 50% increase in successful treatment interventions.'
  },
  {
    image: slider5Image,
    text: 'Understanding the ABCDE rule can help identify potential skin disease signs.'
  },
  // Add more quotes as needed
];

const HelpSlider = () => {
  return (
    <>
    <div className='home-heading'>How are we helping you?</div>
    <div className="slide-container">
      <Slide autoplay={true} duration={3000}>
        {quotes.map((quote, index) => (
          <div className="each-slide" key={index}>
            <div className="image-and-text">
              <img src={quote.image} alt={`Slide ${index}`} className="slide-image" />
              <div className="quote-text">
                <p>{quote.text}</p>
              </div>
            </div>
          </div>
        ))}
      </Slide>
    </div>
    </>
  );
};

export default HelpSlider;
