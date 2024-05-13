import React from 'react';
import Preloader from './Components/Preloader/Preloader';
import Background from './Background/Background';
import Foreground from './Foreground/Foreground';

function App() {
  return (
    <>
      <Preloader />
      <Foreground />
      <Background />
    </>
  );
}

export default App;

