import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Heart, Music2, X, Play, Pause } from 'lucide-react';
import { useInView } from 'react-intersection-observer';

interface Song {
  id: number;
  title: string;
  message: string;
  image: string;
  audioUrl: string;
}

const songs: Song[] = [
  {
    id: 1,
    title: "Humnava",
    message: "Since you've came into my life, everything feels alive, comforting and full of love🩵🩵🩵",
    image: "/music img/m1.jpeg",
    audioUrl: "/music img/a1.mpeg"
  },
  {
    id: 2,
    title: "Dheka Hi Nahi",
    message: "Didn't even realise when YOU became everything to me. It just happened, beautifully and quietly just like this song. Answers to all my prayers .I prayed for someone i hadn't met, stared at the stars for someone i didn't know. Can't remember how many falling stars i wished on. Maybe God was just waiting for the right time to send YOU 🤌",
    image: "/music img/m2.jpeg",
    audioUrl: "/music img/a2.mp3"
  },
  {
    id: 3,
    title: "Jo Tum Mere Ho",
    message: "Do I even need to tell you why this song is here? 🥰",
    image: "/music img/m3.jpeg",
    audioUrl: "/music img/a3.mpeg"
  },
  {
    id: 4,
    title: "Kya Tuje Ab Ye Dil Bataye",
    message: "If i ever go... Don't tell about me to anyone. Only when jb meri yaad aye . no one should know how much i love you. Just like, Ansuon se likh du m tujhko, mere bin koi padh hi na paaye",
    image: "/music img/m4.jpeg",
    audioUrl: "/music img/a4.mpeg"
  },
  {
    id: 5,
    title: "Banjaara",
    message: "From the day you entered into my life, you brought that spark✨ and a kind of magic ❤YOU made me forget the pain, taught me how to live all over again. You healed parts of me i didn't know i needed 🥹",
    image: "/music img/m5.jpeg",
    audioUrl: "/music img/a5.mpeg"
  },
  {
    id: 6,
    title: "Ordinary",
    message: "From the first day I've been saying it you're different. And somehow YOU became MY DIFFERENT 🫵. Since you came, I've stepped out the ordinary ",
    image: "/music img/m6.jpeg",
    audioUrl: "/music img/a6.mpeg"
  },
  {
    id: 7,
    title: "Phir Le Aya Dil",
    message: "That day, that spark ✨, that thought, that instinct which i tried to ignore.. But somehow it stayed with me all month long. Why i try to push it away? My heart kept whispering 'just go for it'..the voice within never lie❤️‍🩹",
    image: "/music img/m7.jpeg",
    audioUrl: "/music img/a7.mpeg"
  },
  {
    id: 8,
    title: "Tu Aisa Kasie Hai",
    message: "This is all what my heart feels for YOU 🫀",
    image: "/music img/m8.jpeg",
    audioUrl: "/music img/a8.mp3"
  },
  {
    id: 9,
    title: "The One",
    message: "This songs itself says it all 😭❤",
    image: "/music img/m9.jpeg",
    audioUrl: "/music img/a9.mp3"
  },
  {
    id: 10,
    title: "Little Bit Better",
    message: "Ever since YOU came, everything within me start to heal slowly... Bit by bit🌹🫂",
    image: "/music img/m10.jpeg",
    audioUrl: "/music img/a10.mpeg"
  },
  {
    id: 11,
    title: "Love Story",
    message: "Thankyou for being there 🤎",
    image: "/music img/m11.jpeg",
    audioUrl: "/music img/a11.mp3"
  }
];

const DedicatedSongsSection: React.FC = () => {
  const [selectedSong, setSelectedSong] = useState<Song | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const handleSongClick = (song: Song) => {
    setSelectedSong(song);
    setIsPlaying(false);
    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current.currentTime = 0;
    }
  };

  const togglePlay = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const closeModal = () => {
    setSelectedSong(null);
    setIsPlaying(false);
    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current.currentTime = 0;
    }
  };

  return (
    <section className="py-24 px-4 bg-gradient-to-b from-primary-100 to-primary-200 relative overflow-hidden">
      {/* Background Hearts */}
      <div className="absolute inset-0 pointer-events-none">
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

      <motion.h2 
        className="text-4xl md:text-5xl font-cursive text-primary-800 text-center mb-16"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        You in every song,every line 👀💫
      </motion.h2>

      {/* Timeline Style Songs */}
      <div className="max-w-4xl mx-auto relative">
        {/* Vertical Line */}
        <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-primary-400/30 transform -translate-x-1/2"></div>
        
        <div className="space-y-32"> {/* Increased spacing between items */}
          {songs.map((song, index) => (
            <SongTimelineItem 
              key={song.id}
              song={song}
              index={index}
              onSongClick={handleSongClick}
            />
          ))}
        </div>
      </div>

      {/* Song Modal */}
      <AnimatePresence>
        {selectedSong && (
          <motion.div
            className="fixed inset-0 bg-primary-900/90 flex items-center justify-center z-50 p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeModal}
          >
            <motion.div
              className="bg-gradient-to-br from-primary-50 to-primary-100 rounded-2xl shadow-2xl max-w-lg w-full p-8 relative"
              initial={{ y: 100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 100, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={closeModal}
                className="absolute top-4 right-4 text-primary-800 hover:text-primary-900 transition-colors"
              >
                <X className="w-6 h-6" />
              </button>

              <div className="text-center mb-8">
                <h3 className="text-2xl font-cursive text-primary-800 mb-4">{selectedSong.title}</h3>
                <p className="text-dark-900 leading-relaxed">{selectedSong.message}</p>
              </div>

              <div className="bg-primary-200/50 rounded-xl p-4 flex items-center justify-center gap-4">
                <button
                  onClick={togglePlay}
                  className="bg-primary-600 text-white rounded-full p-3 hover:bg-primary-700 transition-colors"
                >
                  {isPlaying ? <Pause className="w-6 h-6" /> : <Play className="w-6 h-6" />}
                </button>
                
                <audio
                  ref={audioRef}
                  src={selectedSong.audioUrl}
                  onEnded={() => setIsPlaying(false)}
                />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

interface SongTimelineItemProps {
  song: Song;
  index: number;
  onSongClick: (song: Song) => void;
}

const SongTimelineItem: React.FC<SongTimelineItemProps> = ({ song, index, onSongClick }) => {
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
          <Music2 className="h-6 w-6 text-primary-600" />
        </div>
      </motion.div>
      
      {/* Content */}
      <motion.div 
        className={`
          ${isEven ? 'ml-auto pr-8 sm:ml-[55%]' : 'mr-auto pl-8 sm:mr-[55%]'} 
          max-w-[90%] sm:max-w-[45%]
          cursor-pointer
        `}
        initial={{ opacity: 0, x: isEven ? 50 : -50 }}
        animate={inView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 0.6 }}
        whileHover={{ scale: 1.03 }}
        onClick={() => onSongClick(song)}
      >
        <div className="bg-primary-100/70 p-6 rounded-lg shadow-xl backdrop-blur-sm">
          <h3 className="text-primary-800 font-cursive text-2xl mb-3">{song.title}</h3>
          
          {/* Image Only */}
          <div className="mb-4 overflow-hidden rounded-lg shadow-md">
            <img 
              src={song.image} 
              alt={song.title} 
              className="w-full h-[200] object-cover transition-transform duration-300 hover:scale-105"
            />
          </div>
          
          {/* Only Click to Play text - no message */}
          <div className="mt-3 flex items-center gap-2 text-primary-600 justify-center">
            <Music2 className="h-4 w-4" />
            <span className="text-sm">Click to play</span>
          </div>
        </div>
      </motion.div>
      
      {/* Animated Background */}
      <div className={`absolute inset-0 -z-10 overflow-hidden rounded-lg ${isEven ? 'ml-auto sm:ml-[55%]' : 'mr-auto sm:mr-[55%]'} max-w-[90%] sm:max-w-[45%]`}>
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

export default DedicatedSongsSection;