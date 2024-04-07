import { motion } from 'framer-motion'
function DesktopIcon(props) {
	return (
		<>
			<motion.div
				drag
				dragElastic={0}
				dragMomentum={false}
				dragConstraints={props.Ref}
				className="flex flex-col gap-1 h-[50px] w-[50px] items-center m-4"
			>
				<img src={props.Icon} className="h-[45px] w-[45px] " />
				<span>{props.iconName}</span>
			</motion.div>
		</>
	)
}

export default DesktopIcon