import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Heart } from 'lucide-react';

const Footer: React.FC = () => {
  const [timePassed, setTimePassed] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
  });





  

  useEffect(() => {
    const startDate = new Date('2025-03-13T00:00:00');

    const updateTimer = () => {
      const now = new Date();
      const difference = now.getTime() - startDate.getTime();

      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));

      setTimePassed({ days, hours, minutes });
    };

    updateTimer();
    const interval = setInterval(updateTimer, 60000); // Update every minute

    return () => clearInterval(interval);
  }, []);

  return (
    <footer className="relative py-12 bg-primary-100 overflow-hidden">
      {/* Background Hearts */}
      <div className="absolute inset-0 -z-10">
        {Array.from({ length: 20 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -20, 0],
              opacity: [0.3, 0.6, 0.3],
            }}
            transition={{
              duration: Math.random() * 3 + 2,
              repeat: Infinity,
              ease: "easeInOut",
              delay: Math.random() * 2,
            }}
          >
            <Heart 
              className="w-4 h-4 text-primary-600/30" 
              fill="#a18072"
            />
          </motion.div>
        ))}
      </div>

      <div className="container mx-auto px-4">
        <div className="text-center">
          <motion.div
            className="inline-flex items-center gap-2 mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-2xl font-cursive text-primary-800">lovelovelove</span>
            🤎
            {/* <Heart className="w-6 h-6 text-primary-600" fill="#a18072" /> */}
            {/* <span className="text-2xl font-cursive text-primary-800">Arushi</span> */}
          </motion.div>

          <motion.div
            className="text-lg sm:text-xl text-dark-900 mb-8"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            A promise of Love and <br />Light ,Always.☀️❤️‍🔥
          </motion.div>

          {/* <motion.div
            className="flex flex-wrap justify-center gap-6 text-lg sm:text-xl text-dark-900"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
          >
            <div className="bg-primary-200/50 px-6 py-3 rounded-full backdrop-blur-sm">
              <span className="text-primary-800 font-bold">{timePassed.days}</span> days
            </div>
            <div className="bg-primary-200/50 px-6 py-3 rounded-full backdrop-blur-sm">
              <span className="text-primary-800 font-bold">{timePassed.hours}</span> hours
            </div>
            <div className="bg-primary-200/50 px-6 py-3 rounded-full backdrop-blur-sm">
              <span className="text-primary-800 font-bold">{timePassed.minutes}</span> minutes
            </div>
          </motion.div> */}
        </div>
      </div>
    </footer>
  );
};

export default Footer;