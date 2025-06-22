import React, { useRef, useEffect } from 'react';
import Plyr from 'plyr-react';
import 'plyr-react/plyr.css';
import './styles/plyr-longform.css';

interface LongformProps {
  videoSrc: string;
  title?: string;
  className?: string;
}

const Longform: React.FC<LongformProps> = ({ videoSrc, title, className = '' }) => {
  const playerRef = useRef<any>(null);

  // Convert YouTube URL to embed format
  let videoId = '';
  if (videoSrc.includes('youtube.com/watch?v=')) {
    videoId = videoSrc.split('v=')[1].split('&')[0];
  } else if (videoSrc.includes('youtu.be/')) {
    videoId = videoSrc.split('youtu.be/')[1].split('?')[0];
  }
  
  const videoSource = {
    type: 'video' as const,
    sources: [
      {
        src: `https://www.youtube.com/embed/${videoId}`,
        provider: 'youtube' as const,
      },
    ],
  };

  const plyrOptions = {
    controls: [
      'play-large',
      'play',
      'current-time',
      'mute',
      'volume',
      'captions',
      'settings',
      'pip',
      'airplay',
      'fullscreen'
    ],
    autoplay: false,
    muted: false,
    hideControls: true,
    resetOnEnd: false,
    disableContextMenu: false,
    loadSprite: false,
    iconPrefix: 'plyr',
    iconUrl: 'https://cdn.plyr.io/3.7.8/plyr.svg',
    blankVideo: 'https://cdn.plyr.io/static/blank.mp4',
    ratio: '16:9',
  };

  useEffect(() => {
    if (playerRef.current) {
      const player = playerRef.current;
      
      player.on('play', () => {
        // Hide progress bar when video starts playing
        const progressBar = player.elements.container?.querySelector('.plyr__progress');
        if (progressBar) {
          progressBar.style.display = 'none';
        }
      });

      player.on('pause', () => {
        // Show progress bar when video is paused
        const progressBar = player.elements.container?.querySelector('.plyr__progress');
        if (progressBar) {
          progressBar.style.display = 'block';
        }
      });
    }
  }, []);

  return (
    <div className={`w-full max-w-4xl text-center ${className}`}>
      <div className="aspect-video bg-black rounded-lg overflow-hidden shadow-2xl">
        <Plyr ref={playerRef} source={videoSource} options={plyrOptions} />
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