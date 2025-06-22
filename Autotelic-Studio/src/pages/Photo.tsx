import React, { useState } from 'react';

const PhotoPage: React.FC = () => {
  const photos = [
    { id: '1', imageSrc: '/images/breanna.jpeg', title: 'breanna' },
    { id: '2', imageSrc: '/images/eli.jpg', title: 'eli' },
    { id: '3', imageSrc: '/images/movie.jpg', title: 'movie' },
    { id: '4', imageSrc: '/images/glass2.jpg', title: 'glass2' },
    { id: '5', imageSrc: '/images/sarah2.jpg', title: 'sarah2' },
    { id: '6', imageSrc: '/images/mockup3.jpg', title: 'mockup3' },
    { id: '7', imageSrc: '/images/fire.jpg', title: 'fire' },
    { id: '8', imageSrc: '/images/erika.jpg', title: 'erika' },
    { id: '9', imageSrc: '/images/vogue.jpeg', title: 'vogue' },
    { id: '10', imageSrc: '/images/glow.jpg', title: 'glow' },
    { id: '11', imageSrc: '/images/mockup.jpg', title: 'mockup' },
    { id: '12', imageSrc: '/images/andy.jpg', title: 'andy' },
    { id: '13', imageSrc: '/images/eli2.jpg', title: 'eli2' },
    { id: '14', imageSrc: '/images/ricebowl.jpg', title: 'ricebowl' },
    { id: '15', imageSrc: '/images/glass.jpg', title: 'glass' },
    { id: '16', imageSrc: '/images/mockup4.jpg', title: 'mockup4' },
    { id: '17', imageSrc: '/images/candid.jpg', title: 'candid' },
    { id: '18', imageSrc: '/images/kate.jpg', title: 'kate' },
    { id: '19', imageSrc: '/images/polaroid.jpg', title: 'polaroid' },
    { id: '20', imageSrc: '/images/abkd.jpg', title: 'abkd' },
    { id: '21', imageSrc: '/images/ski.jpg', title: 'ski' },
    { id: '22', imageSrc: '/images/daniel.jpg', title: 'daniel' },
    { id: '23', imageSrc: '/images/mirror.jpg', title: 'mirror' },
    { id: '24', imageSrc: '/images/bano.jpeg', title: 'bano' },
    { id: '25', imageSrc: '/images/mockup2.jpg', title: 'mockup2' },
    { id: '26', imageSrc: '/images/ate.jpg', title: 'ate' },
    { id: '27', imageSrc: '/images/vogue2.jpg', title: 'vogue2' },
    { id: '28', imageSrc: '/images/emily.jpg', title: 'emily' },
    { id: '29', imageSrc: '/images/poster.jpg', title: 'poster' },
    { id: '30', imageSrc: '/images/jae.jpeg', title: 'jae' },
    { id: '31', imageSrc: '/images/aileen.jpg', title: 'aileen' },
    { id: '32', imageSrc: '/images/head.jpg', title: 'head' },
  ];

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalImage, setModalImage] = useState('');

  const openModal = (src: string) => {
    setModalImage(src);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleBackgroundClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      closeModal();
    }
  };

  const columnOffsets = ['0', '3rem']; // Reduced offset for every other column

  return (
    <div className="min-h-screen bg-black text-white pt-10 pb-20 px-4 sm:px-8">
      {/* Spacing div */}
      <div className="h-10"></div>
      <header className="text-center mb-12">
        <h1 className="text-5xl font-bold font-NeueMontreal tracking-tight">Photography</h1>
        <p className="text-lg pt-10 text-gray-400 mt-2">A moment of time captured in and preserved forever.</p>
      </header>
      {/* Spacing div */}
      <div className="h-10"></div>
      <main>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
          {photos.map((photo, index) => {
            const offset = columnOffsets[index % 2];
            return (
              <div
                key={photo.id}
                className="relative w-full h-0"
                style={{
                  paddingBottom: '150%', // Aspect ratio 2:3
                  transform: `translateY(${offset})`,
                }}
              >
                <img
                  src={photo.imageSrc}
                  alt={photo.title || ''}
                  className="absolute top-0 left-0 w-full h-full object-cover rounded-lg hover:scale-105 transition-transform duration-300 ease-in-out cursor-pointer"
                  onClick={() => openModal(photo.imageSrc)}
                />
              </div>
            );
          })}
        </div>
      </main>

      {/* Modal */}
      {isModalOpen && (
        <div
          className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-80 z-50 p-4"
          onClick={handleBackgroundClick}
        >
          <div className="relative">
            <img
              src={modalImage}
              alt="Enlarged"
              className="max-w-full max-h-[80vh] object-contain rounded-lg"
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default PhotoPage;