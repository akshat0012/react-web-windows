import icons from '../../../../icons.json'

function UnreadMail() {
  return (
    <>
        <div className='flex flex-col items-center justify-center ml-5 mr-5 mt-1 mb-2'>
            <div className='flex gap-4'>
                <img src={icons["Mail"]}/>
                <h1>Mail</h1>
            </div>
            <div className='flex items-start gap-2 mt-4 justify-center bg-zinc-200 p-6 rounded-xl'>
                {/* Card Goes here */}
                <div className='h-1/3 m-3'>
                    <img src='peter.png' className='h-[70px] w-[70px] rounded-full' />
                </div>
                <div className='flex flex-col w-2/3'>
                    <h1 className='text-2xl'>Bessie Cooper</h1>
                    <p className='text-l text-[#828180]'>
                        Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt.
                    </p>
                </div>
            </div>
            <div className='flex w-full justify-around pr-10 pl-10 mt-6'>
                <button className='flex flex-col items-center'>
                    <img src={icons['setFlag']}/>
                    <p>Set Flag</p>
                </button>
                <button className='flex flex-col  items-center'>
                    <img src={icons['mailReply']}/>
                    Reply
                </button>
                <button className='flex flex-col items-center'>
                    <img src={icons['notificationDismiss']}/>
                    Dismiss
                </button>
            </div>
        </div>
    </>
  )
}

export default UnreadMail