import { motion } from 'framer-motion'
import { useState, useEffect } from 'react';

function DesktopIcon(props) {
	const [isSelected, select] = useState();

	return (
		<>
			<motion.div
				dragMomentum={false}
				dragConstraints={props.Ref}
				className="flex flex-col h-[35px] w-[35px] items-center m-4"
			>
				<img src={props.Icon} className="h-[45px] w-[45px]" />
				<span>{props.iconName}</span>
			</motion.div>
		</>
	)
}

export default DesktopIcon