import React from 'react';
import Longform from '../components/Longform';

const LongformPage: React.FC = () => {
  return (
    <main className="min-h-screen flex items-center justify-center bg-gray-900 pt-16">
      <div className="w-full max-w-6xl mx-auto px-4">
        <h1 className="text-white text-4xl font-bold text-center mb-12">
          Long-form Videos
        </h1>
        <Longform 
          videoSrc="/videos/demo.mov"
          title="Featured Long-form Project"
        />
      </div>
    </main>
  );
};

export default LongformPage;