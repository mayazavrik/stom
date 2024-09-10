import React, { useState } from 'react';
import { useSelector } from 'react-redux';
// import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
// import { Swiper, SwiperSlide } from 'swiper/react';
import NewsItem from './NewsItem';
import './style/style.css';
import AddNewsForm from '../admin/AddNewsForm';
import type { RootState } from '../../redux/store';
// import spinner from '../../assets/Spinner-1s-200px.svg';
// import 'swiper/css';
// import 'swiper/css/navigation';
// import 'swiper/css/pagination';
// import 'swiper/css/scrollbar';

function NewsBlock(): JSX.Element {
  const posts = useSelector((store: RootState) => store.news.posts);
  const error = useSelector((store: RootState) => store.news.error);
  const loading = useSelector((store: RootState) => store.news.loading);
  // const [modalActive, setModalActive]=useState(false)
  const user = useSelector((store: RootState) => store.auth.user);
  const checkError = <h1 style={{ color: 'red' }}>{error}</h1>;
  // const spin = <img src={spinner} alt="preloader" />;

  //   let indexValue = 0;
  // function slideShow() {
  //   setTimeout(slideShow, 2000);
  //   var x;
  //   const img = document.querySelectorAll("post_container");
  //   for(x = 0; x < img.length; x++) {
  //     img[x].style.display = "none";
  //   }
  //   indexValue++;
  //   if (indexValue > img.length) {
  //     indexValue = 1
  //   }
  //   img[indexValue - 1].style.display = "block";
  // }
  // slideShow();
  return (
    <div className="containerPostForm">
  {user && user.isAdmin && (
      <AddNewsForm />)}

      <div className="swiper">
        <div className="posts__container">
          {posts?.map((post) => <NewsItem key={post.id} post={post} />)}
        </div>

        {/* <div className="swiper-pagination"></div>

        <div className="swiper-button-prev"></div>
        <div className="swiper-button-next"></div>

        <div className="swiper-scrollbar"></div> */}
      </div>
    </div>
  );
}

export default NewsBlock;
