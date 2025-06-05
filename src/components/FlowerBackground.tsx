import React from 'react';
import { motion } from 'framer-motion';

const FlowerBackground: React.FC = () => {
  // Generate random positions for flowers
  const flowers = Array.from({ length: 50 }).map((_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: Math.random() * 30 + 15,
    delay: Math.random() * 5,
    duration: Math.random() * 10 + 15,
    rotation: Math.random() * 360,
  }));

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {flowers.map((flower) => (
        <motion.div
          key={flower.id}
          className="absolute"
          style={{
            left: `${flower.x}%`,
            top: `-20%`,
          }}
          animate={{
            y: ['0%', '120%'],
            rotate: [flower.rotation, flower.rotation + 360],
            opacity: [0, 1, 0.8, 0],
          }}
          transition={{
            duration: flower.duration,
            delay: flower.delay,
            repeat: Infinity,
            ease: "linear",
          }}
        >
          <div 
            className="opacity-70"
            style={{ 
              width: `${flower.size}px`,
              height: `${flower.size}px`, 
            }}
          >
            {/* Simplified Flower */}
            <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 2C9.5 2 7.5 4 7.5 6.5C7.5 9 9.5 11 12 11C14.5 11 16.5 9 16.5 6.5C16.5 4 14.5 2 12 2Z" fill="#a18072" />
              <path d="M12 13C9.5 13 7.5 15 7.5 17.5C7.5 20 9.5 22 12 22C14.5 22 16.5 20 16.5 17.5C16.5 15 14.5 13 12 13Z" fill="#a18072" />
              <path d="M2 12C2 9.5 4 7.5 6.5 7.5C9 7.5 11 9.5 11 12C11 14.5 9 16.5 6.5 16.5C4 16.5 2 14.5 2 12Z" fill="#a18072" />
              <path d="M13 12C13 9.5 15 7.5 17.5 7.5C20 7.5 22 9.5 22 12C22 14.5 20 16.5 17.5 16.5C15 16.5 13 14.5 13 12Z" fill="#a18072" />
              <circle cx="12" cy="12" r="2" fill="#e0cec7" />
            </svg>
          </div>
        </motion.div>
      ))}
      
      {/* Additional sparkle effects */}
      {Array.from({ length: 30 }).map((_, i) => (
        <motion.div
          key={`sparkle-${i}`}
          className="absolute rounded-full bg-primary-400/30"
          style={{
            width: Math.random() * 4 + 2,
            height: Math.random() * 4 + 2,
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            scale: [0, 1, 0],
            opacity: [0, 0.8, 0],
          }}
          transition={{
            duration: Math.random() * 2 + 1,
            repeat: Infinity,
            delay: Math.random() * 2,
          }}
        />
      ))}
    </div>
  );
};

export default FlowerBackground;