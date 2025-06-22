import Plyr from 'plyr-react';
import 'plyr-react/plyr.css';

import { Swiper, SwiperSlide } from 'swiper/react';


function Carousel() {
  const videos = [
    { src: 'video1.mp4', title: 'Video 1' },
    { src: 'video2.mp4', title: 'Video 2' },
  ];

  return (
    <Swiper spaceBetween={10} slidesPerView={1}>
      {videos.map((video) => (
        <SwiperSlide key={video.title}>
          <Plyr
            source={{
              type: 'video',
              sources: [{ src: video.src, type: 'video/mp4' }],
            }}
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}

export default Carousel;