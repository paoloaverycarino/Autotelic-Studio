import React from 'react';
import LottieAnimation from '../components/LottieAnimation';
import animationData from '../assets/lottieanimation.json';

const Hero: React.FC = () => {
  return (
    <div>
      {/* First section (your current hero) */}
      <div
        className="w-full h-screen bg-black flex items-center justify-center pt-20"
        style={{
          backgroundImage: "url('/images/bg3.png')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      >
        <div className="max-w-4xl text-center grid place-items-center gap-0">
          <div className="relative w-full flex items-center justify-center" style={{maxWidth: '400px'}}>
            <img 
              src="/images/paper.png" 
              alt="Paper" 
              className="w-full object-contain rotate-3"
            />
            <h1 className="font-['InkFree'] text-xl absolute inset-0 flex items-center justify-center text-black opacity-70 rotate-2">We can all be a little more...</h1>
          </div>
          <img 
            src="/images/auto.png" 
            alt="Auto Design" 
            className="w-full max-w-8xl rounded-lg shadow-2xl"
          />
          <LottieAnimation
            animationData={animationData}
            className="w-16 h-16"
            loop={true}
            autoplay={true}
          />
        </div>
      </div>

      {/* Second section (add your content here) */}
      <div className="w-full min-h-screen flex items-center justify-center bg-black">
        <h1 className="font-['InkFree'] text-xl">Dear Creator...</h1>
      </div>
    </div>
  );
};

export default Hero;

