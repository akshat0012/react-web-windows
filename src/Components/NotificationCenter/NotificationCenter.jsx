import { motion } from 'framer-motion'

import UnreadMail from './Notifications/MailNotifications/UnreadMail'; 
import DownloadCompleteNotification from './Notifications/StoreNotifications/DownloadCompleteNotification';
import ToggleBox from './ToggleBox';
import { useState } from 'react';
import icons from '../../icons.json'

function NotificationCenter(props) {

  return (
    <>
      <motion.div
        initial={{ x: 100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.1, type: "easeOut" }}
        ref={props.Ref}
        className="flex flex-col justify-between absolute z-[4] bg-[#f2f2f2] h-[100vh] w-[500px] text-black right-0 bottom-[48.99px] overflow-hidden"
      >
      <div className='h-5/6'>
        {/* Heading Section */}
        <div className='h-[8%] text-black flex items-end justify-end pr-3.5 mb-9 mt-10'>
          <button>Manage Notifications</button>
        </div>

        {/* Notification Center */}
        <div className='h-2/3 flex flex-col overflow-scroll'>
          <UnreadMail />
          <DownloadCompleteNotification />
          <UnreadMail />
        </div>
      </div>    
      <div className='mb-3'>
        {/* Buttons Section */}
        <div className='flex m-5 justify-between'>
          <button>Collapse</button>
          <button>Clear all notifications</button>
        </div>

        {/* Icons Section */}
        <div className='flex justify-between mr-5 ml-5 mt-5'>
          <ToggleBox 
            icon= {icons['Settings']}
            Content = {"All Settings"}
          />
          <ToggleBox 
            Key = {'priority_only'}
            icon= {icons['Location']}
            Content = {"Location"}
          />
          <ToggleBox 
            icon= {icons['Connect']}
            Content = {"Connect"}
          />
          <ToggleBox 
            icon= {icons['Project']}
            Content = {"Project"}
          />
        </div>
      </div>
      </motion.div>
    </>
  )
}
export default NotificationCenter;