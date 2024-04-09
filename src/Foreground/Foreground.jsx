import { useState, useRef } from "react";

import Application from "../Components/Applications/Application"
import Taskbar from "../Components/Taskbar" 
import icons from '../icons.json'
import DesktopIcon from "../Components/Desktop/DesktopIcon";
function Foreground() {

  const ForegroundRef = useRef(null);
  return (
    <div ref={ForegroundRef} className='relative z-[4] text-white h-screen w-screen select-none overflow-hidden'>
      <div className="flex flex-row gap-5 md:flex-col">
        <DesktopIcon 
          Ref = {ForegroundRef}
          iconName = {"Chrome"}
          Icon={icons['Chrome']}
        />

        <DesktopIcon 
          Ref = {ForegroundRef}
          iconName = {"Discord"}
          Icon={icons['Discord']}
        />

        <DesktopIcon 
          Ref = {ForegroundRef}
          iconName = {"Spotify"}
          Icon={icons['Spotify']}
        />
      </div>
      <div className="fixed w-full bottom-0"> {/* Taskbar wrapper */}
          <Taskbar ForegroundReference = {ForegroundRef} />
      </div>
    </div>
  )
}

export default Foreground