function MenuEntry(props) {
	return (
		<>
			<div className="flex mt-[12px] gap-[16px]">
				<img src={props.icon} className="h-[30px] w-[30px]" />
				<h1>{props.itemName}</h1>
			</div>
		</>
	)
}

export default MenuEntry