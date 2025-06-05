import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import Confetti from 'react-confetti';
import { useInView } from 'react-intersection-observer';

const Fireworks: React.FC = () => {
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  useEffect(() => {
    if (inView) {
      setDimensions({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    }
  }, [inView]);

  return (
    <div ref={ref} className="absolute inset-0 overflow-hidden pointer-events-none">
      {inView && (
        <>
          {/* Confetti */}
          <Confetti
            width={dimensions.width}
            height={dimensions.height}
            numberOfPieces={200}
            gravity={0.05}
            colors={['#a18072', '#e0cec7', '#bfa094', '#977669', '#eaddd7']}
            recycle={false}
          />
          
          {/* Fireworks */}
          <div className="absolute inset-0">
            {Array.from({ length: 15 }).map((_, i) => (
              <Firework key={i} delay={i * 0.5} />
            ))}
          </div>
        </>
      )}
    </div>
  );
};

interface FireworkProps {
  delay: number;
}

const Firework: React.FC<FireworkProps> = ({ delay }) => {
  const x = Math.random() * 100;
  const y = Math.random() * 50 + 30;
  const color = Math.random() > 0.5 ? '#a18072' : '#eaddd7';
  
  return (
    <motion.div
      className="absolute"
      style={{ left: `${x}%`, top: `${y}%` }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay }}
    >
      <motion.div
        initial={{ scale: 0, opacity: 1 }}
        animate={{
          scale: [0, 1, 1.2],
          opacity: [1, 1, 0],
        }}
        transition={{
          duration: 2,
          delay,
          times: [0, 0.1, 1],
        }}
      >
        <div className="relative">
          {Array.from({ length: 12 }).map((_, i) => {
            const angle = (i / 12) * 360;
            const length = Math.random() * 30 + 30;
            
            return (
              <motion.div
                key={i}
                className="absolute h-0.5 origin-left"
                style={{
                  backgroundColor: color,
                  width: length,
                  transform: `rotate(${angle}deg)`,
                  boxShadow: `0 0 8px ${color}`,
                }}
                initial={{ scaleX: 0, opacity: 0 }}
                animate={{ scaleX: 1, opacity: [0, 1, 0] }}
                transition={{
                  duration: 1.5,
                  delay: delay + 0.1,
                  ease: "easeOut",
                }}
              />
            );
          })}
        </div>
      </motion.div>
    </motion.div>
  );
};

export default Fireworks;