import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Carousel = () => {
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1
  };

  return (
    <Slider {...settings}>
      <div className="slider-image">
        <img src="https://plus.unsplash.com/premium_photo-1670884127314-6b29ba4d831d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80'" />
      </div>
      <div className="slider-image">
        <img src="https://images.unsplash.com/photo-1504609813442-a8924e83f76e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" />
      </div>
      <div className="slider-image">
        <img src="https://plus.unsplash.com/premium_photo-1664530452611-69a2895ce19d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=872&q=80" />
      </div>
      <div className="slider-image">
        <img src="https://images.unsplash.com/photo-1621976498727-9e5d56476276?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" />
      </div>
    </Slider>
  );
}

export default Carousel;


