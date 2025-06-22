import React, { useState } from 'react';

interface PhotocardProps {
  imageSrc: string;
  title?: string;
  description?: string;
  category?: string;
  className?: string;
  onClick?: () => void;
}

const Photocard: React.FC<PhotocardProps> = ({
  imageSrc,
  title,
  description,
  category,
  className = '',
  onClick,
}) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className={`relative group cursor-pointer rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-[1.02] ${className}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={onClick}
    >
      {/* Image */}
      <div className="relative w-full h-full">
        <img
          src={imageSrc}
          alt={title || 'Photo'}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
        
        {/* Overlay */}
        <div className={`absolute inset-0 bg-black transition-opacity duration-300 ${
          isHovered ? 'opacity-40' : 'opacity-0'
        }`} />
        
        {/* Content Overlay */}
        <div className={`absolute inset-0 p-4 flex flex-col justify-end transition-all duration-300 ${
          isHovered ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
        }`}>
          {/* Category Badge */}
          {category && (
            <div className="inline-block bg-white bg-opacity-90 text-black text-xs font-semibold px-2 py-1 rounded-full mb-2 self-start">
              {category}
            </div>
          )}
          
          {/* Title */}
          {title && (
            <h3 className="text-white text-lg font-bold mb-1 drop-shadow-lg">
              {title}
            </h3>
          )}
          
          {/* Description */}
          {description && (
            <p className="text-white text-sm opacity-90 drop-shadow-lg line-clamp-2">
              {description}
            </p>
          )}
        </div>
      </div>
      
      {/* Hover Border Effect */}
      <div className={`absolute inset-0 border-2 border-white transition-opacity duration-300 rounded-lg ${
        isHovered ? 'opacity-30' : 'opacity-0'
      }`} />
    </div>
  );
};

export default Photocard; 