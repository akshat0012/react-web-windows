import icons from '../../../../icons.json'
function DownloadCompleteNotification() {
  return (
    <>
        <div  className='flex flex-col items-center justify-center m-5'>
            <div className='flex gap-4'>
                <img src={icons['Microsoft Store']} />
                <span className='text-bold'>Microsoft Store</span>
            </div>
            <div className='flex flex-col w-full p-6 rounded-xl bg-zinc-200 mt-4'>
                <span className='text-xl '>Van Arsdel</span>
                <span className='text-[#828180] mt-1'>Just got installed, check it out.</span>
                <span  className='text-[#828180] mt-4'>Sunday</span>
                <div className='flex items-center justify-around mt-4'>
                    <button>Launch</button>
                    <button>Pin to Start</button>
                </div>
            </div>
        </div>
    </>
  )
}

export default DownloadCompleteNotification