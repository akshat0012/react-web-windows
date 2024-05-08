import icons from '../../icons.json'
const Preloader = () => {
  return (
    <section className="absolute top-0 z-[100]">
            <div className="flex flex-col items-center justify-center bg-black h-screen w-screen text-white text-xl">
                <img src={icons['Windows_logo']} width="90px"/>
                <h1 className="mt-5">This might take a few minutes.</h1>
                <h2>Don't turn off your PC</h2>
            </div>
            <div className ="waiting"></div>
        </section>
    );
};

export default Preloader;