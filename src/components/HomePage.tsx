import React from 'react';
import { motion } from 'framer-motion';
import BirthdayCake from './BirthdayCake';
import FlowerBackground from './FlowerBackground';
// import PhotoGallery from './PhotoGallery';
import LoveLetter from './LoveLetter';
// import Timeline from './Timeline';
import Fireworks from './Fireworks';
import Footer from './Footer';
import MemeLoader from './MemeLoader';
import DedicatedSongsSection from './DedicatedSongsSection';

const HomePage: React.FC = () => {
  return (
    <div className="min-h-screen relative">
      <div className="overflow-hidden">
        <section id="home" className="relative min-h-screen flex flex-col items-center justify-center text-center px-4 py-10">
          <FlowerBackground />
          <motion.h1 
            className="text-5xl sm:text-6xl md:text-7xl font-cursive text-primary-800 z-10 mb-16"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            Happiiesttt Birthhdayy, <br />
            <span className="text-dark-900 mt-4 block">My Batman</span> 
            <span className="text-4xl sm:text-5xl md:text-7xl block mt-4 mb-[30px]">🤎✨</span>
          </motion.h1>
          
          <BirthdayCake />
        </section>                            

        <section id="letter" className="min-h-screen py-24 px-4 bg-gradient-to-b from-primary-200 to-primary-100 flex flex-col items-center justify-center">
          <motion.h2 
            className="text-4xl md:text-5xl font-cursive text-primary-800 text-center mb-16"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            For My You💌💋
          </motion.h2>
          <LoveLetter />
        </section>

        <DedicatedSongsSection />

        <section id="timeline" className="min-h-screen py-24 px-4 bg-gradient-to-b from-primary-100 to-primary-200">
          <motion.h2 
            className="text-4xl md:text-5xl font-cursive text-primary-800 text-center mb-16"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            Short on Photos , Full of Memories🐣
          </motion.h2>
          {/* <Timeline /> */}
          <MemeLoader />
        </section>

        <section id="finale" className="min-h-screen py-24 px-4 bg-gradient-to-b from-primary-200 to-primary-100 flex flex-col items-center justify-center relative">
          <Fireworks />
          <motion.h2 
            className="text-6xl md:text-8xl font-display text-primary-800 text-center mb-8 relative z-10"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            style={{ textShadow: '0 0 20px #a18072' }}
          >
            I Love You🤎
          </motion.h2>
          <motion.p 
            className="text-8xl md:text-8xl mt-10 font-cursive text-dark-900 text-center relative z-10"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            Your Sunshine🌻
          </motion.p>
          
        </section>
 

        <Footer />
      </div>
    </div>
  );
};

export default HomePage;