import dronefour from "../../assets/images/dronefour.jpg"


const NewServiceBanner = () => {
    return (
        <div className="bg-[#fef2f2]">
           <h2 className="py-8 text-4xl text-teal-900 text-center font-bold"> New Arriaval</h2>
            <section >
	<div className="container flex flex-col justify-center p-6 mx-auto sm:py-12 lg:py-24 lg:flex-row lg:justify-between">
		<div className="flex flex-col justify-center p-6 text-center rounded-sm lg:max-w-md xl:max-w-lg lg:text-left">
			<h1 className="text-5xl font-bold leadi sm:text-4xl"> New Drone Service
				<span className="text-yellow-400">Available!!</span>
			</h1>
			<p className="mt-6 mb-8 text-lg sm:mb-12">Introducing our cutting-edge drone service, revolutionizing 
				<br className="hidden md:inline lg:hidden"/>aerial solutions with precision and innovation.
			</p>
		</div>
		<div className="flex items-center justify-center p-6 mt-8 lg:mt-0 h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128">
			<img src={dronefour} alt="" className="object-contain h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128" />
		</div>
	</div>
</section>
        </div>
    );
};

export default NewServiceBanner;