import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import '../App.css';

const Hero = () => {
  const media = [
    { type: 'video', src: '/banner/Netflix\'s Chronicles of Narnia (2024) - Teaser Trailer - Greta Gerwig Reboot Concept HD.mp4' },
    { type: 'image', src: '/banner/hero1-banner.jpg' },
    { type: 'image', src: '/banner/hero2-banner.jpg' },
    { type: 'image', src: '/banner/hero3-banner.jpg' },
    { type: 'image', src: '/banner/baby_boss.jpg' },
    { type: 'image', src: '/banner/avatar-banner.jpg' },
    { type: 'image', src: '/banner/banner.jpg' },
    { type: 'image', src: '/banner/avengers.jpg' }
    
  ];

  return (
    <Carousel
      showThumbs={false}
      autoPlay={true}
      infiniteLoop={true}
      showStatus={false}
      interval={3000} // 3 seconds
    >
      {media.map((item, index) => (
        <div key={index} className="hero-slide">
          {item.type === 'image' ? (
            <img src={item.src} alt={`Slide ${index + 1}`} className="hero-img" />
          ) : (
            <video className="hero-video" controls>
              <source src={item.src} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          )}
          <div className="hero-text">
            <h1>Welcome to Digital Movie Saga</h1>
            <p>Watch the best movies and TV shows.</p>
          </div>
        </div>
      ))}
    </Carousel>
  );
};

export default Hero;
