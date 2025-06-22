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
  gridCols?: number;
  gap?: number;
  marginBottom?: number;
}

const ShortformCategory: React.FC<ShortformCategoryProps> = ({
  title,
  videos,
  className = '',
  gridCols = 5,
  gap = 8,
  marginBottom = 32,
}) => {
  const gridColsClass = `grid-cols-${gridCols}`;
  const gapClass = `gap-${gap}`;
  const marginBottomClass = `mb-${marginBottom}`;

  return (
    <div className={`w-full ${marginBottomClass} ${className}`}>
      <h2 className="text-3xl font-bold text-gray-800 text-center mb-16 font-NeueMontreal">
        {title}
      </h2>

      <br></br>
      <div className={`grid ${gridColsClass} ${gapClass}`}>
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