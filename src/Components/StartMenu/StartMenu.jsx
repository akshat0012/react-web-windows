import MenuEntry from "./MenuEntry";
import MenuEntryBox from "./MenuEntryBox";
import { IoIosMenu } from "react-icons/io";
import icons from '../../icons.json'
import { motion } from 'framer-motion'

function StartMenu(props) {

  let application = {
    'A': ['Alarms & Clock'],
    'C': ['Calculator', 'Calender', 'Camera', 'Cortana'],
    'E': ['Excel'],
    'G': ['Groove Music'],
    'M': ['Mail', 'Maps', 'Microsoft Edge', 'Microsoft Store']
  }

  let categories = {
    'Productivity': ['Office', 'Calender', 'Mail', 'Weather', 'Photos'],
    'Explore': ['Microsoft Store', 'Microsoft Edge', 'Maps'],
    'Build': ['Visual Studio', 'Terminal', 'Notepad']
  }

  return (
    <>
      <motion.div 
        initial = {{ y: 100, opacity: 1 }}
        animate = {{ y: 0, opacity: 1 }}
        transition={{ duration: 0.2 ,type: "easeOut"}}
        ref={props.Ref} 
        className="absolute z-[4] bg-[#d1dbe9] h-[650px] w-[750px] text-black flex bottom-[48.99px]"
      >
        <div className="w-[7%] flex flex-col ml-3 mt-3 mb-3 justify-between items-center">
          <div>
            <IoIosMenu size={25}/>
          </div>
          <div className="flex flex-col gap-8">
            <img src="peter.png" className="rounded-full h-[25px] w-[25px] mb-2"/>
            <img src={icons["SideMenuPhotos"]} className="h-[20px] w-[20px]" />
            <img src={icons["Settings"]} className="h-[25px] w-[25px]" />
            <img src={icons["Power"]} className="h-[25px] w-[25px]" />
          </div>
        </div>


        <div className="bg-[#d1dbe9] w-[40%] flex flex-col gap-3 mt-3 ml-5 overflow-scroll" >   
          {/* Use a for loop to place each entry  */}
          {Object.entries(application).map(([key, value]) => (
            <div key={key} className="mb-3">
              {/* Render key */}
              <div className="ml-[7px]">{key}</div>
              
              {/* Iterate over the array elements */}
              {value.map((item, index) => (
                <div key={index} className="flex flex-col ">
                  {/* Render each array element */}
                  <MenuEntry 
                    itemName={item}
                    icon={icons[item]}
                  />
                </div>
              ))}
            </div>
          ))}
        </div>

        <div className="h-full/3 ml-20 mt-3 overflow-scroll w-full mr-3">
          {/* Use a for loop to place each entry  */}
          {Object.entries(categories).map(([key, value]) => (
            <div key={key} className="mb-3">
              {/* Render key */}
              <div className="ml-[7px] mb-[12px]">{key}</div>
            <div className="flex flex-wrap gap-1">
              {/* Iterate over the array elements */}
              {value.map((item, index) => (
                <div key={index} className="">
                  {/* Render each array element */}
                  <MenuEntryBox
                    itemName={item}
                    icon={icons[item]}
                  />
                </div>
              ))}
            </div>  
            </div>
          ))}
        </div>
      </motion.div>
    </>
  )
}
export default StartMenu