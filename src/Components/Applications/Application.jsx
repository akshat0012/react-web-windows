import { motion } from "framer-motion"
import icons from '../../icons.json'


function Application(props) {
  function HandleDelete() {
    props.closeApplication();
  }

  return (
    <>
      <motion.div 
        drag
        initial = {{ scale: 0 }}
        animate = {{ scale: 1 }}
        transition = {{ delay: 0.2 }}
        dragElastic = {0}
        dragMomentum = {false}
        dragConstraints = {props.Ref}
        className="absolute z-[3] bg-[#d1dbe9] h-[600px] w-[800px] text-black overflow-hidden rounded-md shadow-xl"
      >
      <div className="pl-2 pt-1 pb-1 pr-3 flex items-center justify-between">
        {/* Header */}
        {props.applicationName}
        <div className="flex items-center">
    
          <button onClick={HandleDelete}>
            <img src={icons['notificationDismiss']}/>
          </button>

        </div>
      </div> 
      <div className="h-full flex items-center justify-center bg-zinc-900">
        {/* Body of the Application */}
        <img src={props.applicationIcon} className="h-[100px] w-[100px]"/>
      </div>
      </motion.div>
    </>
  )
}

export default Application