import React, { useEffect, useRef, useState } from 'react';
import { GrWindows } from 'react-icons/gr';
import icons from '../icons.json';
import { motion, AnimatePresence } from 'framer-motion'
import StartMenu from './StartMenu/StartMenu';
import NotificationCenter from './NotificationCenter/NotificationCenter';

function Taskbar(props) {

  const [isStartMenuOpen, setStartMenu] = useState(false);
  const [isNotificatioCenterOpen, setNotificationCenter] = useState(false);
  const [currentTime, setCurrentTime] = useState(new Date());

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

    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => {
      clearInterval(timer);
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [startMenuRef, toggleButtonRef]);

  function openExplorer() {
    props.handleExplorer();
  }
  function openStore() {
    props.handleStore();
  }
  function openMail() {
    props.handleMail();
  }
  function openEdge() {
    props.handleEdge();
  }
  function openReddit() {
    props.handleReddit();
  }

  return (
    <>
      <AnimatePresence>
        {isStartMenuOpen &&
          <motion.div
            initial={{ opacity: 0, y: 1000, zIndex:10  }}
            animate={{ y: 0, opacity: 1, }}
            exit={{ y: 1000, opacity: 0 }}
            transition={{ duration: 0.28, ease:"easeInOut"   }}
            className='absolute h-[650px] bottom-0'
          >
            <StartMenu Ref={startMenuRef} />
          </motion.div>}
      </AnimatePresence>

      <div className="absolute z-[20] bg-[#dfdfdf] max-h-[45px] w-full text-black flex items-center justify-between gap-10 bottom-0">
        <div className="flex items-center gap-3">
        {isNotificatioCenterOpen && 
          <NotificationCenter Ref={notificationCenterRef} />}

          <button className="pl-3 pr-[1.25rem] min-h-[45px]" onClick={handleStartButton} ref={toggleButtonRef}>
            <GrWindows size={25} />
          </button>
          <div className="flex gap-8 min-w-[390px]">
            <button onClick={openExplorer}>
              <img src={icons['Explorer']} className="h-[28px] w-[28px]" />
            </button>
            <button onClick={openEdge}>
              <img src={icons['Edge']} className="h-[28px] w-[28px]" />
            </button>
            <button onClick={openStore}>
              <img src={icons['Store']} className="h-[28px] w-[28px]" />
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
          <div className="flex flex-col items-center min-w-[70px]">
            <span>{currentTime.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</span>
            <span>{currentTime.toLocaleDateString()}</span>
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
