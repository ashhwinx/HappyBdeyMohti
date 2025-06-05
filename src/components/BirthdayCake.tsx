import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const BirthdayCake: React.FC = () => {
  const [candlesBlown, setCandles] = useState<number[]>([]);
  const [showMessage, setShowMessage] = useState(false);
  const [bites, setBites] = useState<number>(0);
  const totalCandles = 5;
  const maxBites = 3;

  useEffect(() => {
    if (candlesBlown.length === totalCandles) {
      setTimeout(() => {
        setShowMessage(true);
      }, 500);
    }
  }, [candlesBlown]);
  
  const handleCandleClick = (index: number) => {
    if (!candlesBlown.includes(index)) {
      setCandles([...candlesBlown, index]);
    }
  };

  const handleCakeClick = () => {
    if (candlesBlown.length === totalCandles && bites < maxBites) {
      setBites(prev => prev + 1);
    }
  };

  const getBiteClipPath = () => {
    const biteStyles = [
      'polygon(0 0, 100% 0, 100% 100%, 80% 85%, 60% 100%, 40% 85%, 20% 100%, 0 85%)',
      'polygon(0 0, 100% 0, 100% 100%, 90% 75%, 70% 100%, 50% 75%, 30% 100%, 10% 75%)',
      'polygon(0 0, 100% 0, 100% 100%, 95% 65%, 75% 90%, 55% 65%, 35% 90%, 15% 65%)',
    ];
    return bites > 0 ? biteStyles[bites - 1] : undefined;
  };

  return (
    <motion.div 
      className="relative mb-20"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.5, delay: 0.8 }}
    >
      {/* Cake */}
      <motion.div 
        className={`relative w-72 h-72 sm:w-96 sm:h-96 flex flex-col mt-[50px] items-center justify-center ${candlesBlown.length === totalCandles ? 'cursor-pointer' : ''}`}
        onClick={handleCakeClick}
        whileHover={candlesBlown.length === totalCandles ? { scale: 1.02 } : {}}
      >
        {/* Cake Base */}
        <div 
          className="absolute bottom-0 w-64 h-40 sm:w-80 sm:h-48 bg-primary-300 rounded-lg rounded-t-3xl shadow-xl transition-all duration-300"
          style={{ clipPath: getBiteClipPath() }}
        >
          <div className="absolute bottom-0 w-full h-1/3 bg-primary-400 rounded-b-lg"></div>
          
          {/* Decorative Elements */}
          <div className="absolute top-1/4 w-full flex justify-around">
            {Array.from({ length: 4 }).map((_, i) => (
              <div key={i} className="w-3 h-3 rounded-full bg-primary-600"></div>
            ))}
          </div>
          <div className="absolute top-2/4 w-full flex justify-around">
            {Array.from({ length: 4 }).map((_, i) => (
              <div key={i} className="w-3 h-3 rounded-full bg-primary-600"></div>
            ))}
          </div>
        </div>
        
        {/* Cake Top */}
        <div className="absolute bottom-40 sm:bottom-48 w-72 h-12 sm:w-88 sm:h-14 bg-primary-200 rounded-full shadow-md"></div>
        
        {/* Candles */}
        <div className="absolute bottom-52 sm:bottom-64 w-full flex justify-center items-end space-x-8 sm:space-x-10 z-10">
          {Array.from({ length: totalCandles }).map((_, index) => (
            <div key={index} className="relative cursor-pointer group" onClick={() => handleCandleClick(index)}>
              {/* Candle Stick */}
              <div className="w-2 h-16 sm:h-20 bg-gradient-to-b from-primary-200 to-primary-400 rounded-sm transform group-hover:scale-105 transition-transform"></div>
              
              {/* Flame */}
              {!candlesBlown.includes(index) && (
                <motion.div 
                  className="absolute -top-6 -left-3 -translate-x-1/2 w-4 h-8 bg-gradient-to-b from-primary-300 to-primary-600 ml-[10px] rounded-full"
                  animate={{ 
                    scale: [1, 1.1, 1],
                    opacity: [1, 0.8, 1],
                  }}
                  transition={{ 
                    repeat: Infinity, 
                    duration: 0.6 + (index * 0.1),
                  }}
                >
                  <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-2 h-4 bg-primary-100/50 rounded-full"></div>
                </motion.div>
              )}
            </div>
          ))}
        </div>
        
        {showMessage && (
          <motion.div 
            className="absolute -top-24 left-1/2 -translate-x-1/2 w-full"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <h2 
              className="font-cursive text-4xl sm:text-5xl text-primary-800 flex justify-center items-center mr-[350px] mt-[50px] whitespace-nowrap"
              style={{ textShadow: '0 0 10px #a18072' }}
            >
              Happy Birthday Mohit
            </h2>
          </motion.div>
        )}
        
        {!showMessage && candlesBlown.length < totalCandles && (
          <div className='flex justify-center items-center'>
            <motion.p 
              className="absolute -top-28 left-1/2 -translate-x-1/2 text-dark-900 text-lg sm:text-xl font-medium"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
            >
              Click each candle to make a wish ✨
            </motion.p>
          </div>
        )}
        
        {showMessage && bites < maxBites && (
          <motion.p 
            className="absolute -bottom-16 left-1/2 -translate-x-1/2 text-dark-900 text-lg sm:text-xl mt-[300px] font-medium"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            Click the cake to take a bite! 🍰
          </motion.p>
        )}
      </motion.div>
    </motion.div>
  );
};

export default BirthdayCake;