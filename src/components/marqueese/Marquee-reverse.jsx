import React from 'react'
import './marquee.css'
import image6 from '../../assets/gallery6.webp'
import image7 from '../../assets/gallery7.webp'
import image8 from '../../assets/gallery8.webp'
import image9 from '../../assets/gallery9.webp'
import image10 from '../../assets/gallery10.webp'

const MarqueeReversed = () => {
  return (
    <>
      <div className="marquee marquee--reverse">
        <div className="marquee__group">
          <img
             src={image6}
    
            alt="logo"
          />
          <img
              src={image7}

            alt="logo"
          />
          <img
              src={image8}
            
            alt="logo"
          />
          <img
             src={image9}
          
            alt="logo"
          />
          <img
              src={image10}
           
            alt="logo"
          />
        </div>
        <div aria-hidden="true" className="marquee__group">
          <img
              src={image6}
    
            alt="logo"
          />
          <img
              src={image7}
             
            alt="logo"
          />
          <img
             src={image8}
             
           alt="logo"
          />
          <img
              src={image9}
            
            alt="logo"
          />
          <img
              src={image10}
            
            alt="logo"
          />
        </div>
      </div>
    </>
  );
};

export default MarqueeReversed;
