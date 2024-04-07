import React, { useEffect, useRef, useState } from 'react';
import { GrWindows } from 'react-icons/gr';
import { LiaSearchSolid } from 'react-icons/lia';
import icons from '../icons.json';

import StartMenu from './StartMenu/StartMenu';
import NotificationCenter from './NotificationCenter/NotificationCenter';
import Application from './Applications/Application';

function Taskbar(props) {
  const [isStartMenuOpen, setStartMenu] = useState(false);
  const [isNotificatioCenterOpen, setNotificationCenter] = useState(false);
  const [applicationsState, setApplicationsState] = useState({
    Explorer: false,
    Edge: false,
    Store: false,
    Mail: false
  });

  const toggleApplicationState = (appName) => {
    setApplicationsState(prevState => ({
      ...prevState,
      [appName]: !prevState[appName],
    }));
  };


  const handleStartButton = () => {
    setStartMenu(!isStartMenuOpen);
  };

  const handleNotificationCenter = () => {
    setNotificationCenter(!isNotificatioCenterOpen);
  };

  const handleExplorer = () => {
    toggleApplicationState('Explorer');
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

  
  let startMenuRef = useRef();
  let toggleButtonRef = useRef();
  let notificationCenterRef = useRef();

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        startMenuRef.current &&
        !startMenuRef.current.contains(event.target) &&
        !toggleButtonRef.current.contains(event.target)
      ) {
        setStartMenu(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [startMenuRef, toggleButtonRef]);

  return (
    <div className="absolute bg-[#dfdfdf] z-[6] max-h-[48.99px] w-full text-black flex items-center justify-between gap-10 bottom-0">
      {isNotificatioCenterOpen && <NotificationCenter Ref={notificationCenterRef} />}
      {isStartMenuOpen && <StartMenu Ref={startMenuRef} />}

      {applicationsState.Explorer && (
        <Application
          applicationName="Explorer"
          applicationIcon={icons['Explorer']}
          closeApplication={() => toggleApplicationState('Explorer')}
          foregroundRef={props.ForegroundRef}
        />
      )}

      {applicationsState.Edge && (
        <Application
          applicationName="Edge"
          applicationIcon={icons['Microsoft Edge']}
          closeApplication={() => toggleApplicationState('Edge')}
          foregroundRef={props.ForegroundRef}
        />
      )}   

      {applicationsState.Store && (
        <Application
          applicationName="Store"
          applicationIcon={icons['Microsoft Store']}
          closeApplication={() => toggleApplicationState('Store')}
          foregroundRef={props.ForegroundRef}
        />
      )}        

      {applicationsState.Mail && (
        <Application
          applicationName="Mail"
          applicationIcon={icons['Mail']}
          closeApplication={() => toggleApplicationState('Mail')}
          foregroundRef={props.ForegroundRef}
        />
      )}

      <div className="flex items-center">
        <button className="pl-3 pr-[1.25rem] min-h-[48.99px]" onClick={handleStartButton} ref={toggleButtonRef}>
          <GrWindows size={25} />
        </button>
        <div className="mr-[1.25rem] min-w-[344px] max-h-[48.99px] p-3 pr-20 flex gap-4 bg-white border-2 border-zinc-900">
          <LiaSearchSolid size={25} />
          Type here to search
        </div>
        <div className="flex gap-8 min-w-[344px]">
          <img src={icons['TaskbarCortana']} className="h-[28px] w-[28px]" />
          <img src={icons['ShowWindows']} className="h-[28px] w-[28px]" />
          <button onClick={handleExplorer}>
            <img src={icons['Explorer']} className="h-[28px] w-[28px]" />
          </button>
          <button onClick={handleEdge}>
            <img src={icons['Microsoft Edge']} className="h-[28px] w-[28px]" />
          </button>
          <button onClick={handleStore}>
            <img src={icons['Microsoft Store']} className="h-[28px] w-[28px]" />
          </button>
          <button onClick={handleMail}>
          <img src={icons['Mail']} className="h-[28px] w-[28px]" />
          </button>
        </div>
      </div>

      <div className="flex gap-4 items-center justify-center mr-3">
        <img src={icons['More']} className="h-[16px] w-[16px]" />
        <img src={icons['Wifi']} className="h-[16px] w-[16px]" />
        <img src={icons['Volume']} className="h-[20px] w-[20px]" />
        <div className="flex flex-col items-center">
          <span>10:00 AM</span>
          <span>9/20/2020</span>
        </div>
        <button onClick={handleNotificationCenter}>
          <img src={icons['ControlCenter']} className="min-h-[20px] min-w-[20px]" />
        </button>
      </div>
    </div>
  );
}

export default Taskbar;
