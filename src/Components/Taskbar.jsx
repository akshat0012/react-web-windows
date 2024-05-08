import React, { useEffect, useRef, useState } from 'react';
import { GrWindows } from 'react-icons/gr';
import { LiaSearchSolid } from 'react-icons/lia';
import icons from '../icons.json';

import StartMenu from './StartMenu/StartMenu';
import NotificationCenter from './NotificationCenter/NotificationCenter';

function Taskbar(props) {

  const [isStartMenuOpen, setStartMenu] = useState(false);
  const [isNotificatioCenterOpen, setNotificationCenter] = useState(false);

  const handleStartButton = () => {
    setStartMenu(!isStartMenuOpen);
  };

  const handleNotificationCenter = () => {
    setNotificationCenter(!isNotificatioCenterOpen);
  };

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

  function openExplorer() {
    console.log("Opened Explorer")
    props.handleExplorer();
  }
  function openStore() {
    console.log("Opened Store")
    props.handleStore();
  }
  function openMail() {
    console.log("Opened Mail")
    props.handleMail();
  }
  function openEdge() {
    console.log("Opened Edge")
    props.handleEdge();
  }
  function openReddit() {
    console.log("Opened Reddit")
    props.handleReddit();
  }

  return (
    <>
      {isStartMenuOpen && <StartMenu Ref={startMenuRef} />}
      <div className="absolute z-[20] bg-[#dfdfdf] max-h-[45px] w-full text-black flex items-center justify-between gap-10 bottom-0">
        {isNotificatioCenterOpen && <NotificationCenter Ref={notificationCenterRef} />}
        <div className="flex items-center gap-3">
          <button className="pl-3 pr-[1.25rem] min-h-[45px]" onClick={handleStartButton} ref={toggleButtonRef}>
            <GrWindows size={25} />
          </button>
          <div className="flex gap-8 min-w-[390px]">
            <button onClick={openExplorer}>
              <img src={icons['Explorer']} className="h-[28px] w-[28px]" />
            </button>
            <button onClick={openEdge}>
              <img src={icons['Microsoft Edge']} className="h-[28px] w-[28px]" />
            </button>
            <button onClick={openStore}>
              <img src={icons['Microsoft Store']} className="h-[28px] w-[28px]" />
            </button>
            <button onClick={openMail}>
              <img src={icons['Mail']} className="h-[28px] w-[28px]" />
            </button>
            <button onClick={openReddit}>
              <img src={icons['Reddit']} className="h-[28px] w-[28px]" />
            </button>
          </div>
        </div>

        <div className="flex gap-5 items-center justify-center mr-3">
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
    </>
  );
}

export default Taskbar;
