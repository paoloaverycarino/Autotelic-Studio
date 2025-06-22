import React from 'react';

const LongformPage: React.FC = () => {
  return (
    <div>

        
      {/* Intro Section */}
      <div className="w-full min-h-screen bg-white flex items-center justify-center">
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
          <br />
          <h1 className="text-black text-4xl font-['InkFree'] mt-10 text-center">
            My name is Paolo.
          </h1>
        </div>
      </div>

      {/* Analytics Section */}
      <div className="w-full min-h-[100px] flex flex-col items-center justify-center bg-white">

      <div className="mt-8 text-3xl text-black font-['InkFree'] text-center">
          Over the past 1.5 years, I've attributed...
        </div>

        {/* Spacing div */}
        <div className="h-15"></div>

        <div className="flex flex-row flex-wrap gap-12 justify-center items-center">
          <div className="w-48 h-48 bg-white rounded-2xl shadow-2xl flex flex-col items-center justify-center text-center">
            <div className="text-7xl font-bold text-black font-NeueMontreal">10M</div>
            <div className="text-2xl text-black font-NeueMontreal">Views</div>
          </div>
          <div className="w-48 h-48 bg-white rounded-2xl shadow-2xl flex flex-col items-center justify-center text-center">
            <div className="text-7xl font-bold text-black font-NeueMontreal">25K</div>
            <div className="text-2xl text-black font-NeueMontreal">Followers</div>
          </div>
          <div className="w-48 h-48 bg-white rounded-2xl shadow-2xl flex flex-col items-center justify-center text-center">
            <div className="text-7xl font-bold text-black font-NeueMontreal">~300</div>
            <div className="text-2xl text-black font-NeueMontreal">Posts</div>
          </div>
          <div className="w-48 h-48 bg-white rounded-2xl shadow-2xl flex flex-col items-center justify-center text-center">
            <div className="text-7xl font-bold text-black font-NeueMontreal">500</div>
            <div className="text-2xl text-black font-NeueMontreal">Collaborations</div>
          </div>
        </div>
      </div>

      {/* Section 3 */}
      <div className="w-full min-h-screen flex flex-col items-center justify-center bg-white">
        <h2 className="text-8xl font-NeueMontreal font-bold text-yellow-400 text-center mb-12">Experience</h2>
        <br></br>
        <div className="flex flex-wrap gap-8 justify-center items-center w-full max-w-5xl mx-auto">
          {/* Card 1 */}
          <button className="bg-white rounded-lg shadow-lg p-8 flex-1 min-w-[250px] max-w-xs flex flex-col justify-center items-center min-h-[400px] transition hover:shadow-2xl hover:bg-gray-100 focus:outline-none">
            <h3 className="text-2xl font-semibold text-black text-center">Mikayla Mags</h3>
          </button>
          {/* Card 2 */}
          <button className="bg-white rounded-lg shadow-lg p-8 flex-1 min-w-[250px] max-w-xs flex flex-col justify-center items-center min-h-[400px] transition hover:shadow-2xl hover:bg-gray-100 focus:outline-none">
            <h3 className="text-2xl font-semibold text-black text-center">Hack Club</h3>
          </button>
          {/* Card 3 */}
          <button className="bg-white rounded-lg shadow-lg p-8 flex-1 min-w-[250px] max-w-xs flex flex-col justify-center items-center min-h-[400px] transition hover:shadow-2xl hover:bg-gray-100 focus:outline-none">
            <h3 className="text-2xl font-semibold text-black text-center">Misc</h3>
          </button>
        </div>
      </div>
    </div>
  );
};

export default LongformPage;