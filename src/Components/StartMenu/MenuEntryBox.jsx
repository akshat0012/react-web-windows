function MenuEntryBox(props) {
	return (
		<>
        <div className="bg-[#e6ebf2] pl-5 pr-5 pt-3 pb-3 items-center flex flex-col items-center gap-2">
            <img src={props.icon} className="h-[80px] w-[80px]" />
            <h1>{props.itemName}</h1>
        </div>
		</>
	)
}

export default MenuEntryBox