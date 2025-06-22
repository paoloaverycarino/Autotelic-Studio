import React from 'react';
import Plyr from 'plyr-react';
import 'plyr-react/plyr.css';
import './styles/plyr-longform.css';

interface LongformProps {
  videoSrc: string;
  title?: string;
  className?: string;
}

const Longform: React.FC<LongformProps> = ({ videoSrc, title, className = '' }) => {
  const videoSource = {
    type: 'video' as const,
    sources: [
      {
        src: videoSrc,
        type: 'video/mp4',
      },
    ],
  };

  return (
    <div className={`w-full max-w-4xl ${className}`}>
      <div className="aspect-video bg-black rounded-lg overflow-hidden shadow-2xl">
        <Plyr source={videoSource} />
      </div>
      {title && (
        <h1 className="text-white text-4xl font-bold font-NeueMontreal mt-10 text-center">
          {title}
        </h1>
      )}
    </div>
  );
};

export default Longform; 