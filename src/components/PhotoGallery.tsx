import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
import { photos } from '../data/photos';

const PhotoGallery: React.FC = () => {
  const [selectedPhoto, setSelectedPhoto] = useState<number | null>(null);

  const openPhoto = (id: number) => {
    setSelectedPhoto(id);
  };

  const closePhoto = () => {
    setSelectedPhoto(null);
  };

  return (
    <div className="relative">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
        {photos.map((photo, index) => (
          <motion.div
            key={photo.id}
            className="relative cursor-pointer group"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            whileHover={{ 
              rotate: index % 2 === 0 ? 2 : -2,
              y: -10,
              transition: { duration: 0.3 }
            }}
            onClick={() => openPhoto(photo.id)}
          >
            {/* Polaroid Frame */}
            <div className={`
              bg-primary-50 p-2 rounded shadow-lg transform 
              ${index % 2 === 0 ? 'rotate-2' : '-rotate-2'}
              transition-all duration-300
            `}>
              {/* Photo */}
              <div className="relative pb-[100%] overflow-hidden">
                <img 
                  src={photo.src} 
                  alt={photo.alt}
                  className="absolute inset-0 w-full h-full object-cover"
                />
              </div>
              
              {/* Caption */}
              <p className="text-center pt-3 pb-1 text-dark-900 font-medium">{photo.caption}</p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Fullscreen Photo Modal */}
      <AnimatePresence>
        {selectedPhoto !== null && (
          <motion.div 
            className="fixed inset-0 bg-primary-900/90 flex items-center justify-center z-50 p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closePhoto}
          >
            <motion.button
              className="absolute top-4 right-4 text-primary-50 bg-primary-800/50 p-2 rounded-full"
              onClick={closePhoto}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <X size={24} />
            </motion.button>

            {photos.map(photo => (
              photo.id === selectedPhoto && (
                <motion.div 
                  key={photo.id}
                  className="max-w-4xl w-full flex flex-col items-center"
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  exit={{ scale: 0.8, opacity: 0 }}
                  onClick={(e) => e.stopPropagation()}
                >
                  <img 
                    src={photo.src} 
                    alt={photo.alt}
                    className="w-full max-h-[80vh] object-contain rounded-lg"
                  />
                  <motion.p 
                    className="mt-4 text-primary-50 text-lg md:text-xl font-cursive"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                  >
                    {photo.caption}
                  </motion.p>
                </motion.div>
              )
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default PhotoGallery;