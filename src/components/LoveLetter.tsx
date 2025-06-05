import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Heart } from 'lucide-react';

const LoveLetter: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleLetter = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="max-w-2xl mx-auto">
      <AnimatePresence initial={false} mode="wait">
        {!isOpen ? (
          <motion.div 
            key="envelope"
            className="cursor-pointer"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8 }}
            whileHover={{ scale: 1.05 }}
            onClick={toggleLetter}
          >
            <div className="bg-primary-100 w-72 h-56 mx-auto relative rounded-lg shadow-lg overflow-hidden">
              {/* Envelope */}
              <div className="absolute inset-0 bg-primary-200 rounded-lg">
                {/* Envelope Flap */}
                <div className="absolute top-0 left-0 right-0 h-28 bg-primary-300 origin-bottom" style={{ clipPath: 'polygon(0 0, 100% 0, 50% 100%)' }}></div>
                
                {/* Heart Seal */}
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10">
                  <Heart className="h-14 w-14 text-primary-600" fill="#a18072" />
                </div>
              </div>
              
              <div className="absolute bottom-6 left-0 right-0 text-center text-primary-900 font-medium text-lg">
                Click Here 😙
              </div>
            </div>
          </motion.div>
        ) : (
          <motion.div
            key="letter"
            className="relative"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, y: 20 }}
          >
            {/* Background Effects */}
            <div className="absolute inset-0 -z-10">
              {Array.from({ length: 30 }).map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute rounded-full bg-primary-400/20"
                  style={{
                    width: Math.random() * 30 + 10,
                    height: Math.random() * 30 + 10,
                    left: `${Math.random() * 100}%`,
                    top: `${Math.random() * 100}%`,
                  }}
                  animate={{ 
                    scale: [0, 1, 0],
                    opacity: [0, 0.7, 0],
                    x: [0, Math.random() * 150 - 75],
                    y: [0, Math.random() * 150 - 75]
                  }}
                  transition={{
                    duration: Math.random() * 4 + 3,
                    repeat: Infinity,
                    delay: Math.random() * 2
                  }}
                />
              ))}
            </div>
            
            {/* Letter Content */}
            <motion.div 
              className="bg-gradient-to-b from-primary-50 to-primary-100 p-8 rounded-lg shadow-lg max-w-2xl mx-auto relative z-10"
              initial={{ rotateX: 90 }}
              animate={{ rotateX: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="text-dark-900 font-cursive leading-relaxed space-y-6 text-lg">
                <p className="font-bold text-2xl text-primary-600">To my........ </p>
                <p className="font-bold text-2xl text-primary-600">To my Batman 🫵. <br />
To my YOU 🫶<br />
To me cutiee🤌🏻🎀<br />
To my heart 😘 </p>
                
                <p>Happy birthday 🫀<br />
Happy 22! 🥂<br />

Good morning to you😹<br />
Jitni wishes apne nahi maangi hogi usse zada to mene apke liye krdli hongi 🫂🥳abhi tk</p>
                
                <p>Wish i could come and hug you rn. And tell you how much i miss you... 🥹
Wish i could kiss you everyday, anytime i feel like. 
Wish i could see you at least. 
Which is not happening 😭
</p>
                
                <p>The moment i sent you the reel saving "ap bhi apni pasandida awrat ke liye bnana"  <br />
But Arushi ke pasandida mard to ap hi h na😘</p>
                
                <p>So here's my way of showing you my love and my gratitude...

Just don't ask me how i managed to do this please. <br />

 It's just a song, just words, but what it means is more than I can say. 🌹

Won't be writing here much. Yk na I prefer handwritten letters😙. 
</p>
                
                <p>Mohit, i even ended up making a whole goddamn playlist of every song you shared with me ( even your notes). 🥰</p>
                
                <p>Enjoy your day✨🫂<br />
Yeah without me👍🏻🥲<br />

Make that spark 100000x 
🤌✨
</p>
                
                <p>Arushi loves  her YOU so much.💋😘
Ik it'll be talking time to go the things in a right way but I'm ready to wait for it. Wait for the day, that ONE DAY🪄
</p>


<p>You deserve the world 🌎❤️‍🔥
And i just pray for your happiness and success. 😘
The next thing you'll see is just how i feel about you. 
The things you're about to see are just my feelings expressed through songs.

</p>


<p>Ik you are more comfortable with songs than the words. 🫂🥺
So here i tried to express the way jis...trh meri jaan ko acha lgta h. 
</p>


<p>These are 11 in number ❤️‍🩹
Your 11 . My devil's 11.
</p>



<p>Lovelovelove only 🫶🩷
Hope it's different , my different 🫡<br />
Anything for my YOU. 🤗
</p>
                
                {/* <p className="font-bold text-xl text-primary-600 mt-8">Happy Birthday, meri darling! I love you more than words could ever express.💖</p> */}
                
                <p className="text-right font-bold">Forever Yours,<br/>Sunshine🌻</p>
              </div>
              
              <div className="flex justify-center mt-8">
                <motion.button 
                  className="px-6 py-3 bg-primary-500 text-white rounded-full flex items-center gap-2 text-lg shadow-lg hover:shadow-xl"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={toggleLetter}
                >
                  <Heart className="h-5 w-5" fill="white" />
                  Close Letter
                </motion.button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default LoveLetter;