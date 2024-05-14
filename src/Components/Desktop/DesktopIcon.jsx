import { motion } from 'framer-motion'
import { useState } from 'react';

function DesktopIcon(props) {
	const [isSelected, select] = useState(false);

	return (
		<>
			<motion.div
				dragMomentum={false}
				dragConstraints={props.Ref}
				className={`flex flex-col h-[35px] w-[35px] items-center m-4 ${!isSelected ? 'hover:bg-sky-100': ""} `}
			>
				<img src={props.Icon} className="h-full w-full" />
				<span>{props.iconName}</span>
			</motion.div>
		</>
	)
}

export default DesktopIcon