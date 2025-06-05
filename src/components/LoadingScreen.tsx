import React from 'react';
import { motion } from 'framer-motion';
import { Heart } from 'lucide-react';

const LoadingScreen: React.FC = () => {
  return (
    <motion.div 
      className="fixed inset-0 bg-primary-50 flex flex-col items-center justify-center"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1 }}
    >
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ 
          scale: [0.8, 1.2, 0.8], 
          opacity: [0, 1, 0]
        }}
        transition={{ 
          repeat: Infinity, 
          duration: 2,
        }}
        className="relative"
      >
        <Heart className="h-20 w-20 text-primary-600" fill="#a18072" />
        <div className="absolute inset-0 bg-primary-400 rounded-full blur-xl opacity-30 scale-125"></div>
      </motion.div>
      
      <motion.h1 
        className="mt-8 font-cursive text-3xl text-primary-800"
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.5 }}
      >
       Overflowing with Love...please wait.
      </motion.h1>
      
      <div className="absolute inset-0">
        {Array.from({ length: 15 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-primary-400/30"
            style={{
              width: Math.random() * 20 + 5,
              height: Math.random() * 20 + 5,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            initial={{ 
              scale: 0, 
              opacity: 0.7,
              x: 0,
              y: 0
            }}
            animate={{ 
              scale: [0, 1, 0],
              opacity: [0, 0.7, 0],
              x: [0, Math.random() * 100 - 50],
              y: [0, Math.random() * 100 - 50]
            }}
            transition={{
              duration: Math.random() * 3 + 2,
              repeat: Infinity,
              delay: Math.random() * 2
            }}
          />
        ))}
      </div>
    </motion.div>
  );
};

export default LoadingScreen;