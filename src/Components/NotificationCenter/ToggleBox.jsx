import { useState } from "react";
function ToggleBox(props) {
   
  const [isSelected, select] = useState(() => {
    return props.Key === 'priority_only' ? true : false;
  });
  const handleToggleButtonClick = () => {
    select(!isSelected);
  }
  return (
    <>
      <div 
        className={`text-black ${isSelected ? 'bg-[#0078d4] text-white' : 'bg-[#e4e4e7]'} flex flex-col items-start justify-center gap-3 p-3 rounded-md`}
        onClick={handleToggleButtonClick}
      >
        <img src={props.icon} className={` ${isSelected && 'invert'} h-[25px] w-[25px]`} />
        <span>{props.Content}</span>
      </div>
    </>
  )
}

export default ToggleBox