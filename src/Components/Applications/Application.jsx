import { motion, AnimatePresence } from "framer-motion"
import icons from '../../icons.json'

import Vscode from './ExternalApplications'

function Application(props) {
  function HandleDelete() {
    props.closeApplication();
  }

  return (
    <AnimatePresence>
      <motion.div 
        drag
        initial = {{ scale: 1.1, opacity: 0, x:500, y:50 }}
        animate = {{ scale: 1, opacity: 1 }}
        transition = {{ duration: 0.2}}
        dragElastic = {0}
        dragMomentum = {false}
        dragConstraints = {props.Ref}
        className="absolute z-[3] bg-[#d1dbe9] h-[800px] w-[900px] text-black overflow-hidden rounded-md shadow-xl"
      >
      <div className="resize pl-2 pt-1 pb-1 pr-3 flex items-center justify-between">
        {/* Header */}
        {props.applicationName}
        <div className="flex items-center">
          <button onClick={HandleDelete}>
            <img src={icons['notificationDismiss']}/>
          </button>
        </div>
      </div> 
      <div className="h-full flex flex-col gap-4 items-center justify-center bg-zinc-900">
        {/* Body of the Application */}
        {props.applicationName == 'Visual Studio' ? <Vscode/> : 
            <>
                <img src={props.applicationIcon} className="h-[100px] w-[100px]"/>
                <span className="text-xl text-white">Nothing here yet 🤗 </span>
            </>
        }
      </div>
      </motion.div>
    </AnimatePresence>
  )
}

export default Application
