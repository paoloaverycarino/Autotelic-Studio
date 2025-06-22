import React, { useState } from 'react';

const PhotoPage: React.FC = () => {
  const photos = [
    { id: '1', imageSrc: '/images/easy.jpg', title: 'Ephemeral Light', category: 'Portraits', date: '2023-01-15' },
    { id: '2', imageSrc: '/images/easy.jpg', title: 'Green Serenity', category: 'Fashion', date: '2023-02-20' },
    { id: '3', imageSrc: '/images/easy.jpg', title: 'Golden Hour', category: 'Abstract', date: '2023-03-10' },
    { id: '4', imageSrc: '/images/easy.jpg', title: 'Behind the Scenes', category: 'BTS', date: '2023-04-05' },
    { id: '5', imageSrc: '/images/easy.jpg', title: 'Crimson Bloom', category: 'Creative', date: '2023-05-22' },
    { id: '6', imageSrc: '/images/easy.jpg', title: 'Reflections', category: 'Film', date: '2023-06-18' },
    { id: '7', imageSrc: '/images/easy.jpg', title: '1', category: '1', date: '2023-07-30' },
    { id: '8', imageSrc: '/images/easy.jpg', title: '2', category: '2', date: '2023-08-11' },
    { id: '9', imageSrc: '/images/easy.jpg', title: '3', category: 'Fil3m', date: '2023-09-01' },
    { id: '10', imageSrc: '/images/easy.jpg', title: '3', category: 'Fil3m', date: '2023-10-14' },
    { id: '11', imageSrc: '/images/easy.jpg', title: '3', category: 'Fil3m', date: '2023-11-25' },
    { id: '12', imageSrc: '/images/easy.jpg', title: '3', category: 'Fil3m', date: '2023-12-31' },
  ];

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalImage, setModalImage] = useState('');
  const [modalDate, setModalDate] = useState<string | undefined>('');

  const openModal = (src: string, date?: string) => {
    setModalImage(src);
    setModalDate(date);
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

  const columnOffsets = ['0', '5rem']; // Offset for every other column

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
                  onClick={() => openModal(photo.imageSrc, photo.date)}
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
            <button
              className="absolute top-2 right-2 text-white bg-black bg-opacity-50 hover:bg-opacity-75 rounded-full p-2"
              onClick={closeModal}
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            {modalDate && (
              <div className="text-center text-white text-lg mt-4 font-NeueMontreal">
                {modalDate}
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default PhotoPage;