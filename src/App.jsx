import React, { useState, useEffect } from 'react';
import Preloader from './Components/Preloader/Preloader';
import Background from './Background/Background'
import Foreground from './Foreground/Foreground'
function App() {
  const [isLoading, setIsLoading] = useState(true);

  // Simulate loading delay
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 4000); // Change this value to simulate different loading times
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      { isLoading && <Preloader /> }
      <Foreground />
      <Background />
    </>
  )
}

export default App;