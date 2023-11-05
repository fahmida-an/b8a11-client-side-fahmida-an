import useServices from "../hooks/useServices";
import ServiceCard from "./ServiceCard";
import { Link } from "react-router-dom";

const Services = () => {
    const services = useServices();
   
    const displayedServices = services.slice(0,4);
    return (
        <>
            <div>
                <h2 className="py-10 text-5xl text-center font-bold"> Popular Sevices</h2>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 max-w-4xl mx-auto">
                {
                    displayedServices.map(service => <ServiceCard key={service._id} service={service}></ServiceCard>)
                }
             
            </div>
           <div className=" text-center p-8">
           <button className="text-white text-center bg-gradient-to-r from-zinc1 via-zinc2 to-zinc4 hover:bg-gradient-to-br outline-none font-medium rounded-lg text-sm px-5 py-2.5  mr-2 mb-2" >
               <Link to={'/allServices'}> Show All</Link>
            </button>
           </div>
        </>
    );
};

export default Services;