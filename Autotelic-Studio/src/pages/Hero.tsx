import React from 'react';

const Hero: React.FC = () => {
  return (
    <div className="w-full h-screen bg-black flex items-center justify-center">
      
      <div className="max-w-4xl text-center">
        <iframe 
          width="800" 
          height="450" 
          src="https://www.youtube.com/embed/YPUDYPx5fOo?si=Ozt4zXWVGtzb-g-o" 
          title="YouTube video player" 
          frameBorder="0" 
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
          referrerPolicy="strict-origin-when-cross-origin" 
          allowFullScreen
          className="rounded-lg shadow-2xl"
        ></iframe>

        <br></br>
        
        <h1 className="text-white text-4xl font-bold font-NeueMontreal mt-10 text-center">
          Start Here.
        </h1>
      </div>

    </div>
  );
};

export default Hero;

