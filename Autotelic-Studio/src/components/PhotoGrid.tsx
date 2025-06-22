import React from 'react';
import Photocard from './Photocard';

interface PhotoData {
  id: string;
  imageSrc: string;
  title?: string;
  description?: string;
  category?: string;
}

interface PhotoGridProps {
  photos: PhotoData[];
  columns?: number;
  gap?: number;
  className?: string;
}

const PhotoGrid: React.FC<PhotoGridProps> = ({
  photos,
  columns = 6,
  gap = 4,
  className = '',
}) => {
  const gridColsClass = `grid-cols-${columns}`;
  const gapClass = `gap-${gap}`;

  return (
    <div className={`grid ${gridColsClass} ${gapClass} ${className}`}>
      {photos.map((photo) => (
        <div key={photo.id} className="relative" style={{ paddingTop: '133.33%' }}> {/* 3:4 Aspect Ratio */}
          <div className="absolute inset-0">
            <Photocard
              imageSrc={photo.imageSrc}
              title={photo.title}
              description={photo.description}
              category={photo.category}
              className="h-full w-full"
              onClick={() => console.log(`Clicked on ${photo.title}`)}
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default PhotoGrid; 