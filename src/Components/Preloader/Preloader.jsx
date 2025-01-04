import icons from '../../icons.json';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Preloader = ({ images, onComplete }) => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const preloadImages = async (imageList) => {
      const promises = imageList.map((src) => {
        return new Promise((resolve, reject) => {
          const img = new Image();
          img.src = src;
          img.onload = resolve;
          img.onerror = reject;
        });
      });

      try {
        await Promise.all(promises);
        setIsVisible(false);
        setTimeout(() => {
          setIsVisible(false);
        }, 3000);
      } catch (error) {
        console.error('Error preloading images:', error);
      }
    };

    preloadImages(images);
  }, [images]);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          className="absolute top-0 z-[100]"
          initial={{ opacity: 1 }}
          transition={{
            delay: 0.6,
          }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <div className="flex flex-col items-center justify-center bg-black h-screen w-screen text-white text-xl">
            <img src={icons['Windows_logo']} width="90px" alt="Windows logo" />
            <h1 className="mt-5">This might take a few minutes.</h1>
            <h2>Don't turn off your PC</h2>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Preloader;

