import React from 'react';
import Longform from '../components/Longform';

const LongformPage: React.FC = () => {
  return (
    <main className="min-h-screen flex items-center justify-center bg-white pt-16">
      <div className="w-full max-w-6xl mx-auto px-4">
        <Longform 
          videoSrc="/videos/athena.mov" 
          title="Your Video Title Here"
        />
      </div>
    </main>
  );
};

export default LongformPage;