import React from 'react'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation, Pagination } from 'swiper';

// Import Swiper styles
import 'swiper/swiper.scss';
import 'swiper/components/navigation/navigation.scss';
import 'swiper/components/pagination/pagination.scss';
import 'swiper/components/scrollbar/scrollbar.scss';
import CarouselStyles from './Carousel.module.scss';
import './Carousel.scss';

import Banner1 from '../../Images/banner1.jpg';
import Banner2 from '../../Images/banner2.jpg';
import Banner3 from '../../Images/banner3.jpg';

SwiperCore.use([Navigation, Pagination]);

const Carousel = () => {
    return (
        <Swiper
            spaceBetween={50}
            slidesPerView={1.2}
            navigation
            centeredSlides={true}
            pagination={{
                clickable: true,
                bulletClass: `${CarouselStyles.bullet}`,
                bulletActiveClass: `${CarouselStyles.activeBullet}`
            }}
            onSlideChange={() => console.log('slide change')}
            onSwiper={(swiper) => console.log(swiper)}
            loop={true}
            className={CarouselStyles.swiper}
        >
            <SwiperSlide className={CarouselStyles.slide}>{({isActive, isPrev, isNext}) => (
                <img src={Banner1} className={isActive ? CarouselStyles.activeSlide : CarouselStyles.notActiveSlide}/>
            )}</SwiperSlide>
            
            <SwiperSlide className={CarouselStyles.slide}>{({isActive, isPrev, isNext}) => (
                <img src={Banner2} className={isActive ? CarouselStyles.activeSlide : CarouselStyles.notActiveSlide}/>
            )}</SwiperSlide>
             <SwiperSlide className={CarouselStyles.slide}>{({isActive, isPrev, isNext}) => (
                <img src={Banner3} className={isActive ? CarouselStyles.activeSlide : CarouselStyles.notActiveSlide}/>
            )}</SwiperSlide>
        </Swiper>
    )
}

export default Carousel
