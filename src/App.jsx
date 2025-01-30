import React from 'react';
import Background from './Background/Background';
import Foreground from './Foreground/Foreground';
import Preloader from './Components/Preloader/Preloader';

function App() {
const allImages = [
  'calculator.svg',
  'calender.svg',
  'camera.svg',
  'Chrome.svg',
  'clock.svg',
  'close.svg',
  'Connect.svg',
  'controlCenter.svg',
  'Cortana.svg',
  'Discord.svg',
  'Dismiss.svg',
  'excel.svg',
  'explorer.svg',
  'Glyph.svg',
  'groove.svg',
  'Location.svg',
  'mail.svg',
  'mailReply.svg',
  'maps.svg',
  'microsoft-edge.svg',
  'More.svg',
  'Notepad.svg',
  'Office.svg',
  'peter.png',
  'Photos.svg',
  'Power.svg',
  'Priority.svg',
  'Project.svg',
  'Reddit.svg',
  'SetFlag.svg',
  'Settings.svg',
  'SideMenuPhotos.svg',
  'Spotify.svg',
  'store.svg',
  'TaskbarCortana.svg',
  'Terminal.svg',
  'todo.svg',
  'tool.svg',
  'VisualStudio.svg',
  'Volume.svg',
  'wallpaper.png',
  'weather.svg',
  'Wifi.svg',
];

  return (
    <>
      <Preloader images={allImages} />
      <Foreground />
      <Background />
    </>
  );
}

export default App;

