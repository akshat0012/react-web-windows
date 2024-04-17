import { useState, useRef } from "react";

import Application from "../Components/Applications/Application"
import Taskbar from "../Components/Taskbar" 
import icons from '../icons.json'
import DesktopIcon from "../Components/Desktop/DesktopIcon";
function Foreground() {

  const ForegroundRef = useRef(null);


  const parentFunction = () => {
    console.log("Called Parent");
  }

  const [applicationsState, setApplicationsState] = useState({
    Explorer: false,
    Edge: false,
    Store: false,
    Mail: false,
    Reddit: false
  });

  const toggleApplicationState = (appName) => {
    setApplicationsState(prevState => ({
      ...prevState,
      [appName]: !prevState[appName],
    }));
  };

  const handleExplorer = () => {
    toggleApplicationState('Explorer');
  };

  const handleReddit = () => {
    toggleApplicationState('Reddit');
  };

  const handleStore = () => {
    toggleApplicationState('Store');
  }

  const handleEdge = () => {
    toggleApplicationState('Edge');
  };

  const handleMail = () => {
    toggleApplicationState('Mail');
  }
  
  return (
    <div ref={ForegroundRef} className='relative z-[4] text-white h-screen w-screen select-none overflow-hidden'>

      {applicationsState.Explorer && (
        <Application
          applicationName="Explorer"
          applicationIcon={icons['Explorer']}
          closeApplication={() => toggleApplicationState('Explorer')}
          foregroundRef={ForegroundRef}
        />
      )}

      {applicationsState.Edge && (
        <Application
          applicationName="Edge"
          applicationIcon={icons['Microsoft Edge']}
          closeApplication={() => toggleApplicationState('Edge')}
          foregroundRef={ForegroundRef}
        />
      )}   

      {applicationsState.Store && (
        <Application
          applicationName="Store"
          applicationIcon={icons['Microsoft Store']}
          closeApplication={() => toggleApplicationState('Store')}
          foregroundRef={ForegroundRef}
        />
      )}        

      {applicationsState.Mail && (
        <Application
          applicationName="Mail"
          applicationIcon={icons['Mail']}
          closeApplication={() => toggleApplicationState('Mail')}
          foregroundRef={ForegroundRef}
        />
      )}

      {applicationsState.Reddit && (
        <Application
          applicationName="Reddit"
          applicationIcon={icons['Reddit']}
          closeApplication={() => toggleApplicationState('Reddit')}
          foregroundRef={ForegroundRef}
        />
      )}


      <div className="flex flex-col gap-5">
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

      <div className="z-[10] fixed w-full bottom-0"> {/* Taskbar wrapper */}
          <Taskbar 
            ForegroundReference = {ForegroundRef}
            handleExplorer = {handleExplorer}
            handleEdge = {handleEdge}
            handleStore = {handleStore}
            handleMail = {handleMail}
            handleReddit = {handleReddit}
          />
      </div>



    </div>
  )
}

export default Foreground