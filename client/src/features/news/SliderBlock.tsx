import React, { useRef } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { useSelector } from 'react-redux';
// import { Link } from 'react-router-dom';
// import type { Post, PostId } from './types/Post';
import './style/slider.css';
import type { RootState } from '../../redux/store';
// import NewsItem from './NewsItem';
import SliderItem from './SliderItem';

export default function SliderBlock(): JSX.Element {
  const services = useSelector((store: RootState) => store.servicesSlice.services);

  const sliderRef = useRef<Slider | null>(null);

  // const settings = {
  //   dots: true,
  //   infinite: false,
  //   speed: 500,
  //   arrows: true,
  //   slidesToShow: 2,
  //   slidesToScroll: 1,
  // };
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3, // Количество слайдов для больших экранов
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 768, // На экранах меньше 768px
        settings: {
          slidesToShow: 1, // Показывать 1 слайд на маленьких экранах
          slidesToScroll: 1,
          infinite: false,
          dots: true,
        },
      },
    ],
  };

  const nextSlide = (): void => {
    sliderRef.current ? sliderRef.current.slickNext() : sliderRef;
  };

  const previousSlide = (): void => {
    sliderRef.current ? sliderRef.current.slickPrev() : sliderRef;
  };
  if (!services || services.length === 0) {
    return <div>Загрузка...</div>;
  }
  return (
    <div className='bigslider'>
      <Slider {...settings} ref={sliderRef}>
        {services?.map((service) => <SliderItem key={service.id} service={service} />)}

  
      </Slider>

      {/* <button className='btn' onClick={previousSlide}>Previous</button>
      <button className='btn' onClick={nextSlide}>Next</button> */}
    </div>
  );
}
