import { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion"
import Application from "../Components/Applications/Application"
import Taskbar from "../Components/Taskbar"
import icons from '../icons.json'
import DesktopIcon from "../Components/Desktop/DesktopIcon";
import Topbar from '../Components/Topbar/Topbar';
function Foreground() {

  const ForegroundRef = useRef(null);

  const [applicationsState, setApplicationsState] = useState({
    Explorer: false,
    Edge: false,
    Store: false,
    Mail: false,
    Reddit: false,
    'Visual Studio': false
  });

  const toggleApplicationState = (appName) => {
    setApplicationsState(prevState => ({
      ...prevState,
      [appName]: prevState[appName] ? prevState[appName] : !prevState[appName],
    }));
  };

  const closeApp = (appName) => {
    setApplicationsState(prevState => ({
      ...prevState,
      [appName]: false,
    })); 
  }

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
  const handleVscode = () => {
    toggleApplicationState('Visual Studio');
  }

  return (
    <div ref={ForegroundRef} className='relative z-[4] text-white h-screen w-screen select-none overflow-hidden'>


      {Object.entries(applicationsState).map(([appName]) => (
        // enclose this in a div to get the exit animation for <Application /> <AnimatePresence /> 
        <AnimatePresence key={appName}>
          {applicationsState[appName] && (
            <motion.div
              key={appName}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.09 }}
            >
              <Application
                key={appName}
                applicationName={appName}
                applicationIcon={icons[appName]}
                closeApplication={() => closeApp(appName)}
                foregroundRef={ForegroundRef}
              />
            </motion.div>
          )}
        </AnimatePresence>
      ))}

      <div className="flex flex-col items-start gap-5 m-2">
        <DesktopIcon
          Ref={ForegroundRef}
          iconName={"Chrome"}
          Icon={icons['Chrome']}
        />

        <DesktopIcon
          Ref={ForegroundRef}
          iconName={"Discord"}
          Icon={icons['Discord']}
        />

        <DesktopIcon
          Ref={ForegroundRef}
          iconName={"Spotify"}
          Icon={icons['Spotify']}
        />
      </div>

      <Taskbar
        ForegroundReference={ForegroundRef}
        handleExplorer={handleExplorer}
        handleEdge={handleEdge}
        handleStore={handleStore}
        handleMail={handleMail}
        handleReddit={handleReddit}
        handleVscode={handleVscode}
      />
      <Topbar/>
    </div>
  )
}

export default Foreground
