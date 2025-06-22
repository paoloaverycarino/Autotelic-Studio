import React from 'react';
import ShortformCarousel from '../components/ShortformCarousel';
import ShortformCategory from '../components/ShortformCategory';

const ShortformPage: React.FC = () => {

    const carouselVideos = [
        { src: '/videos/athena.mov', caption: 'Athena' },
        { src: '/videos/creative block.mov', caption: 'Creative Block' },
        { src: '/videos/demo.mov', caption: 'Demo' },
        // Duplicate the existing videos to fill the carousel
        { src: '/videos/athena.mov', caption: 'Athena' },
        { src: '/videos/creative block.mov', caption: 'Creative Block' },
        { src: '/videos/demo.mov', caption: 'Demo' },
        { src: '/videos/athena.mov', caption: 'Athena' },
        { src: '/videos/creative block.mov', caption: 'Creative Block' },
        { src: '/videos/demo.mov', caption: 'Demo' },
        { src: '/videos/athena.mov', caption: 'Athena' },
      ];

    const sideBySideVideos = [
        { src: '/videos/athena.mov', caption: 'Athena' },
        { src: '/videos/creative block.mov', caption: 'Creative Block' },
        { src: '/videos/demo.mov', caption: 'Demo' },
        { src: '/videos/athena.mov', caption: 'Athena' },
        { src: '/videos/creative block.mov', caption: 'Creative Block' },
    ];

  return (
    <div className="min-h-screen bg-white px-8 pb-20" style={{ paddingLeft: '2rem', paddingRight: '2rem' }}>

      <br></br>

      
      {/* Shortform Carousel */}
      <div className="flex justify-center">
        <div className="w-full max-w-4xl mx-auto bg-white mb-32">
          <ShortformCarousel videos={carouselVideos} />
        </div>
      </div>

    {/* Spacing div */}
    <div className="h-20"></div>



      {/* Side by Side Videos */}
      <ShortformCategory
        title="Hack Club"
        videos={sideBySideVideos}
        gridCols={5}
        gap={8}
      />

      {/* Spacing div */}
      <div className="h-25"></div>

        {/* Side by Side Videos */}
        <ShortformCategory
        title="Featured Short-form Videos"
        videos={sideBySideVideos}
        gridCols={5}
        gap={8}
      />
    </div>
  );
};

export default ShortformPage;
