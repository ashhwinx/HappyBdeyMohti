import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Heart } from 'lucide-react';
import { timelineItems } from '../data/timelineItems';

const Timeline: React.FC = () => {
  return (
    <div className="max-w-3xl mx-auto relative">
      {/* Vertical Line */}
      <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-primary-400/30 transform -translate-x-1/2"></div>
      
      <div className="space-y-24">
        {timelineItems.map((item, index) => (
          <TimelineItem 
            key={item.id}
            item={item}
            index={index}
          />
        ))}
      </div>
    </div>
  );
};  

interface TimelineItemProps {
  item: { id: number; month: string; content: string };
  index: number;
}

const TimelineItem: React.FC<TimelineItemProps> = ({ item, index }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });
  
  const isEven = index % 2 === 0;

  return (
    <div ref={ref} className="relative">
      {/* Center Heart */}
      <motion.div 
        className="absolute left-1/2 top-0 transform -translate-x-1/2 -translate-y-1/2 z-10"
        initial={{ scale: 0, opacity: 0 }}
        animate={inView ? { scale: 1, opacity: 1 } : {}}
        transition={{ delay: 0.3, duration: 0.5 }}
      >
        <div className="bg-primary-50 p-2 rounded-full">
          <Heart className="h-6 w-6 text-primary-600" fill="#a18072" />
        </div>
      </motion.div>
      
      {/* Content */}
      <motion.div 
        className={`
          ${isEven ? 'ml-auto pr-8 sm:ml-[55%]' : 'mr-auto pl-8 sm:mr-[55%]'} 
          max-w-[90%] sm:max-w-[40%]
        `}
        initial={{ opacity: 0, x: isEven ? 50 : -50 }}
        animate={inView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 0.6 }}
      >
        <div className="bg-primary-100/70 p-6 rounded-lg shadow-xl backdrop-blur-sm">
          <h3 className="text-primary-800 font-cursive text-2xl mb-2">{item.month}</h3>
          <p className="text-dark-900 leading-relaxed">{item.content}</p>
        </div>
      </motion.div>
      
      {/* Animated Background */}
      <div className={`absolute inset-0 -z-10 overflow-hidden rounded-lg ${isEven ? 'ml-auto sm:ml-[55%]' : 'mr-auto sm:mr-[55%]'} max-w-[90%] sm:max-w-[40%]`}>
        {inView && Array.from({ length: 15 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-primary-400/10"
            style={{
              width: Math.random() * 20 + 5,
              height: Math.random() * 20 + 5,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            initial={{ scale: 0, opacity: 0 }}
            animate={{ 
              scale: [0, 1, 0],
              opacity: [0, 0.7, 0],
            }}
            transition={{
              duration: Math.random() * 3 + 2,
              repeat: Infinity,
              delay: Math.random() * 2
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default Timeline;