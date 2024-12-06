import React, { Fragment, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import Swiper from 'swiper';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css'; // Core Swiper styles
import 'swiper/css/navigation'; // Navigation module styles
import 'swiper/css/pagination'; // Pagination module styles
import 'swiper/css/autoplay'; // Autoplay module styles
import './gallery8.css';

Swiper.use([Navigation, Pagination, Autoplay]);

// Utility function to shuffle an array
const shuffleArray = (array) => {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]]; // Swap elements
  }
  return array;
};

// Utility function to load images dynamically
const loadImages = (context) =>
    context.keys().map((key) => ({
      src: context(key),
      alt: key.replace('./', '').replace(/\.\w+$/, ''),
    }));

// Load images from Assets folder
const images = loadImages(require.context('../Assets', false, /\.(png|jpe?g|svg)$/));

const Gallery8 = (props) => {
  const [shuffledImages, setShuffledImages] = useState([]);

  useEffect(() => {
    // Shuffle the images array and set it to state
    setShuffledImages(shuffleArray([...props.images]));

    // Initialize the Swiper after images are set
    const swiperInstance = new Swiper('.swiper', {
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      autoplay: {
        delay: 3000, // Delay between slides (3 seconds)
        disableOnInteraction: false, // Keep autoplay running even when interacting
      },
      loop: true, // Enable infinite loop
    });

    // Cleanup function to destroy swiper instance when component unmounts or re-renders
    return () => {
      swiperInstance.destroy();
    };
  }, [props.images]); // Only run on first load or when images change

  return (
      <div className="gallery8-gallery3 thq-section-padding">
        <div className="gallery8-max-width thq-section-max-width">
          <div className="gallery8-section-title">
            <h2 className="gallery8-text1 thq-heading-2">
              {props.heading1 ?? (
                  <Fragment>
                    <span className="gallery8-text3">Gallery</span>
                  </Fragment>
              )}
            </h2>
            <span className="gallery8-text2 thq-body-large">
            {props.content1 ?? (
                <Fragment>
                  <span className="gallery8-text4">Photos from our activity</span>
                </Fragment>
            )}
          </span>
          </div>
          <div className="gallery8-container">
            <div className="gallery8-content">
              <div className="gallery8-slider swiper">
                <div className="swiper-wrapper">
                  {shuffledImages.map((image, index) => (
                      <div key={index} className="swiper-slide">
                        <img
                            alt={image.alt || `Slide ${index + 1}`}
                            src={image.src}
                            className={`gallery8-image${index + 1} thq-img-ratio-4-3`}
                        />
                      </div>
                  ))}
                </div>
                <div className="swiper-button-prev"></div>
                <div className="swiper-button-next"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
  );
};

Gallery8.defaultProps = {
  images, // Use dynamically loaded images
  heading1: undefined,
  content1: undefined,
};

Gallery8.propTypes = {
  images: PropTypes.arrayOf(
      PropTypes.shape({
        src: PropTypes.string.isRequired,
        alt: PropTypes.string,
      })
  ),
  heading1: PropTypes.element,
  content1: PropTypes.element,
};

export default Gallery8;
