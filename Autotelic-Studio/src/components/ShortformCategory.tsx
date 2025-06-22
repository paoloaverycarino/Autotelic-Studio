import React from 'react';
import Shortform from './Shortform';

interface VideoData {
  src: string;
  caption: string;
}

interface ShortformCategoryProps {
  title: string;
  videos: VideoData[];
  className?: string;
  gridCols?: 1 | 2 | 3 | 4 | 5 | 6;
  gap?: 2 | 4 | 6 | 8 | 10 | 12;
  marginBottom?: 8 | 16 | 24 | 32 | 40 | 48;
}

const ShortformCategory: React.FC<ShortformCategoryProps> = ({
  title,
  videos,
  className = '',
  gridCols = 2,
  gap = 2,
  marginBottom = 8,
}) => {
  // Proper mappings for Tailwind classes
  const gridColsMap = {
    1: 'grid-cols-1',
    2: 'grid-cols-2',
    3: 'grid-cols-3',
    4: 'grid-cols-4',
    5: 'grid-cols-5',
    6: 'grid-cols-6',
  };

  const gapMap = {
    2: 'gap-2',
    4: 'gap-4',
    6: 'gap-6',
    8: 'gap-8',
    10: 'gap-10',
    12: 'gap-12',
  };

  const marginBottomMap = {
    8: 'mb-8',
    16: 'mb-16',
    24: 'mb-24',
    32: 'mb-32',
    40: 'mb-40',
    48: 'mb-48',
  };

  return (
    <div className={`w-full ${marginBottomMap[marginBottom]} ${className}`}>
      <h2 className="text-4xl font-bold text-gray-800 text-center mb-4 font-NeueMontreal">
        {title}
      </h2>

      <br></br>
      <div className={`grid ${gridColsMap[gridCols]} ${gapMap[gap]}`}>
        {videos.map((video, index) => (
          <div key={index} className="flex justify-center">
            <Shortform
              videoSrc={video.src}
              caption={video.caption}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ShortformCategory; 