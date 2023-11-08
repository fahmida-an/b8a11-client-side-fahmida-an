import dronefour from "../../assets/images/dronefour.jpg"


const NewServiceBanner = () => {
    return (
        <div>
			<h2 className="pb-10 pt-4 text-4xl text-teal-900 text-center font-bold"> New Arriaval</h2>
            <section className="bg-[#fef2f2]">
	<div className="container flex flex-col justify-center p-6 mx-auto sm:py-12 lg:py-24 lg:flex-row lg:justify-between">
		<div className="flex flex-col justify-center p-6 text-center rounded-sm lg:max-w-md xl:max-w-lg ">
			<h1 className="lg:text-6xl font-bold text-3xl"> New Drone Service <br />
				<span className="text-yellow-400">Available!!</span>
			</h1>
			<p className="mt-6 mb-8 text-lg sm:mb-12">Introducing our cutting-edge drone service, revolutionizing 
				<br className="hidden md:inline lg:hidden"/>aerial solutions with precision and innovation.
			</p>
		</div>
		<div className="flex items-center justify-center p-6 mt-8 lg:mt-0 h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128">
			<img src={dronefour} alt="" className="object-contain h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128 shadow-xl" />
		</div>
	</div>
</section>
        </div>
    );
};

export default NewServiceBanner;