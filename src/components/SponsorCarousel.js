import React, { useState, useEffect } from 'react';
import './SponsorCarousel.css';
import ArrowCircleRightIcon from '@mui/icons-material/ArrowCircleRight';
import ArrowCircleLeftIcon from '@mui/icons-material/ArrowCircleLeft';

const SponsorCarousel = ({ images }) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    // Auto-scroll effect
    useEffect(() => {
        const interval = setInterval(() => {
            nextSlide();
        }, 3000); // Adjust the time for auto-scroll
        return () => clearInterval(interval);
    }, [currentIndex]);

    const nextSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    };

    const prevSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
    };

    const getSlideStyle = (index) => {
        if (index === currentIndex) return "center-slide";
        if (index === (currentIndex - 1 + images.length) % images.length) return "left-slide";
        if (index === (currentIndex + 1) % images.length) return "right-slide";
        return "hidden-slide";
    };

    return (
        <div className="carousel">
            <button className="control left" onClick={prevSlide}><ArrowCircleLeftIcon className="color"/></button>
            <div className="carousel-slides">
                {images.map((image, index) => (
                    <img
                        key={index}
                        src={image.src}
                        alt={`Sponsor ${index + 1}`}
                        className={`carousel-image ${getSlideStyle(index)}`}
                    />
                ))}
                <div
                    key={images[currentIndex].name} // Add unique key for each name to trigger re-render
                    className="sponsor-name"
                >
                    {images[currentIndex].name}
                </div>
            </div>
            <button className="control right" onClick={nextSlide}><ArrowCircleRightIcon className="color"/></button>
        </div>
    );
};

export default SponsorCarousel;
