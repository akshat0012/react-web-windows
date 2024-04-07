function Background() {
  // This Component will only contain wallpaper
  return (
    <>
      <div className="absolute z-[1] w-full h-screen top-0 left-0" >
        <img className="h-full w-full object-cover" src="wallpaper.jpg" alt="" />
      </div>
    </>
  )
}

export default Background