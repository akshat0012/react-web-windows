import React, { useState, useEffect } from 'react';
import icons from '../../icons.json'
const Preloader = () => {
  // State to manage the visibility of the preloader
  const [isVisible, setIsVisible] = useState({
    visiblity: true,
    index: 100
  });

  // Simulate loading delay and hide the preloader after a certain time
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible({
        index: -1,
        visiblity: false
      });
    }, 3700); // Change this value to adjust the delay before the preloader fades out
    return () => {
        clearTimeout(timer);
        console.log(isVisible.visiblity, " ", isVisible.index);
    }
  }, []);

  return (
    <section className={`absolute top-0 z-[100]`}>
      <div className={`flex flex-col items-center justify-center bg-black h-screen w-screen text-white text-xl ${isVisible.visiblity ? 'opacity-100' : 'opacity-0 transition-opacity duration-700'}`}>
        {/* Your preloader content */}
        <img src={icons['Windows_logo']} width="90px" alt="Windows logo"/>
        <h1 className="mt-5">This might take a few minutes.</h1>
        <h2>Don't turn off your PC</h2>
      </div>
    </section>
  );
};

export default Preloader;