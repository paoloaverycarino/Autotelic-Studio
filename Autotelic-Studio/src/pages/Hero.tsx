import React from 'react';
import Longform from '../components/Longform';

const Hero: React.FC = () => {
  return (
    <section className="min-h-screen bg-black pt-20">
      <div className="flex items-center justify-center w-full h-[calc(100vh-5rem)] px-4">
        <Longform
          videoSrc="/videos/demo.mov"
          title="Featured Long-Form"
        />
      </div>
    </section>
  );
};

export default Hero;

