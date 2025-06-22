import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from 'swiper/modules';
import Shortform from './Shortform';

// Import Swiper styles
import 'swiper/swiper-bundle.css';
import './styles/shortform-carousel.css';

interface VideoData {
  src: string;
  caption: string;
}

interface ShortformCarouselProps {
  videos: VideoData[];
  className?: string;
}

const ShortformCarousel: React.FC<ShortformCarouselProps> = ({ videos, className = '' }) => {
  return (
    <div className={`w-full bg-white px-4 py-6 ${className}`}>
      <Swiper
        modules={[Pagination, Navigation]}
        spaceBetween={30}
        slidesPerView={3}          // Show 3 slides at once
        centeredSlides={true}      // Center the active slide
        loop={true}
        pagination={{
          clickable: true,
          dynamicBullets: true,
        }}
        navigation={{
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        }}
        breakpoints={{
          320: {
            slidesPerView: 1,     // On small screens, show 1 slide
            spaceBetween: 20,
          },
          640: {
            slidesPerView: 2,     // On medium screens, show 2 slides
            spaceBetween: 25,
          },
          1024: {
            slidesPerView: 3,     // On large screens, show 3 slides
            spaceBetween: 35,
          },
        }}
        className="shortform-swiper"
      >
        {videos.map((video, index) => (
          <SwiperSlide key={index} className="carousel-slide">
            <div className="flex justify-center">
              <Shortform
                videoSrc={video.src}
                caption={video.caption}
              />
            </div>
          </SwiperSlide>
        ))}
        
        {/* Navigation Buttons */}
        <div className="swiper-button-prev !text-gray-800 !opacity-70 hover:!opacity-100 transition-opacity"></div>
        <div className="swiper-button-next !text-gray-800 !opacity-70 hover:!opacity-100 transition-opacity"></div>
      </Swiper>
    </div>
  );
};

export default ShortformCarousel;
