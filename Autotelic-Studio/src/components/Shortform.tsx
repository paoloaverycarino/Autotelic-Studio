import React, { useRef, useState, useEffect } from 'react';
import Plyr from 'plyr-react';
import 'plyr-react/plyr.css';
import './styles/shortform-player.css';

interface ShortformProps {
  videoSrc: string;
  caption?: string;
  className?: string;
}

const Shortform: React.FC<ShortformProps> = ({
  videoSrc,
  caption,
  className = '',
}) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const previewRef = useRef<HTMLVideoElement>(null);

  // Debug logging
  console.log('Shortform render:', { videoSrc, isPlaying });

  const handleClick = () => {
    console.log('Video clicked, switching to player mode');
    if (!isPlaying) {
      setIsPlaying(true);
      previewRef.current?.pause();
    }
  };

  const handleMouseEnter = () => {
    if (!isPlaying) {
      previewRef.current?.play();
    }
  };

  const handleMouseLeave = () => {
    if (!isPlaying) {
      previewRef.current?.pause();
      if (previewRef.current) previewRef.current.currentTime = 0;
    }
  };

  const videoSource = {
    type: 'video' as const,
    sources: [
      {
        src: videoSrc,
        type: 'video/mp4',
      },
    ],
  };

  console.log('Video source:', videoSource);

  const plyrOptions = {
    autoplay: true,
    loop: { active: true },
    muted: true,
    controls: [
      'play-large',
      'play',
      'progress',
      'current-time',
      'duration',
      'mute',
      'volume',
      'fullscreen'
    ],
    clickToPlay: true,
    hideControls: false,
  };

  return (
    <div className={`w-full ${className}`}>
      {/* Video Container */}
      <div
        className="relative aspect-[9/16] bg-black rounded-2xl overflow-hidden shadow-2xl cursor-pointer group"
        onClick={handleClick}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        {/* Hover Preview Video */}
        {!isPlaying && (
          <video
            ref={previewRef}
            src={videoSrc}
            muted
            loop
            playsInline
            preload="metadata"
            className="absolute inset-0 w-full h-full object-cover transition duration-300 group-hover:scale-[1.01]"
          />
        )}

        {/* Full Player */}
        {isPlaying && (
          <div className="absolute inset-0 w-full h-full bg-black">
            <video
              src={videoSrc}
              autoPlay
              loop
              muted
              controls
              playsInline
              className="w-full h-full object-cover"
              onError={(e) => console.error('Video error:', e)}
              onLoadStart={() => console.log('Video loading started')}
              onCanPlay={() => console.log('Video can play')}
            />
          </div>
        )}
      </div>

      {/* Caption */}
      {caption && (
        <p className="text-gray-800 text-center mt-4 text-sm opacity-80">
          {caption}
        </p>
      )}
    </div>
  );
};

export default Shortform;
